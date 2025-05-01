-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  stripe_customer_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create plans table
CREATE TABLE plans (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  interval TEXT NOT NULL CHECK (interval IN ('month', 'year')),
  features JSONB,
  stripe_price_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create subscriptions table
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) NOT NULL,
  plan_id TEXT REFERENCES plans(id) NOT NULL,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT UNIQUE,
  status TEXT CHECK (status IN ('active', 'trialing', 'past_due', 'canceled', 'incomplete', 'incomplete_expired')),
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create content table
CREATE TABLE content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  content_type TEXT CHECK (content_type IN ('article', 'video', 'ebook', 'webinar', 'template')),
  access_level TEXT CHECK (access_level IN ('free', 'basic', 'professional', 'executive')),
  slug TEXT UNIQUE,
  thumbnail_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create user_content table for tracking user interactions with content
CREATE TABLE user_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) NOT NULL,
  content_id UUID REFERENCES content(id) NOT NULL,
  is_favorite BOOLEAN DEFAULT FALSE,
  is_read BOOLEAN DEFAULT FALSE,
  last_accessed TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(user_id, content_id)
);

-- Insert default plans
INSERT INTO plans (id, name, description, price, interval, features, stripe_price_id) VALUES
('basic-monthly', 'Basic', 'Essential resources for individual professionals', 9, 'month', '["Access to basic articles", "Monthly newsletter", "Community forum access"]', 'price_basic_monthly'),
('professional-monthly', 'Professional', 'Comprehensive resources for growing professionals', 19, 'month', '["Everything in Basic", "Premium research reports", "Webinar recordings", "Priority support"]', 'price_professional_monthly'),
('executive-monthly', 'Executive', 'Premium resources for executive-level professionals', 39, 'month', '["Everything in Professional", "1-on-1 consulting sessions", "Executive workshops", "Early access to new content"]', 'price_executive_monthly'),
('basic-annual', 'Basic', 'Essential resources for individual professionals', 79, 'year', '["Access to basic articles", "Monthly newsletter", "Community forum access"]', 'price_basic_annual'),
('professional-annual', 'Professional', 'Comprehensive resources for growing professionals', 149, 'year', '["Everything in Basic", "Premium research reports", "Webinar recordings", "Priority support"]', 'price_professional_annual'),
('executive-annual', 'Executive', 'Premium resources for executive-level professionals', 299, 'year', '["Everything in Professional", "1-on-1 consulting sessions", "Executive workshops", "Early access to new content"]', 'price_executive_annual');

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Create RLS policies
-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE content ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_content ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Subscriptions policies
CREATE POLICY "Users can view their own subscriptions"
  ON subscriptions FOR SELECT
  USING (auth.uid() = user_id);

-- Content policies
CREATE POLICY "Anyone can view content"
  ON content FOR SELECT
  USING (true);

-- User content policies
CREATE POLICY "Users can view their own content interactions"
  ON user_content FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own content interactions"
  ON user_content FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own content interactions"
  ON user_content FOR UPDATE
  USING (auth.uid() = user_id);
