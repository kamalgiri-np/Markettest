"use client"

import Link from "next/link"
import { Check, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function PaymentIntegrationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AnimatedSection
          animation="fade-in"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-brand-50 to-white dark:from-background dark:to-muted/5"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Payment Integration Guide</h1>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Implement multiple payment gateways to serve your global audience
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tighter mb-4">Overview</h2>
              <p className="text-muted-foreground mb-6">
                This guide provides implementation details for integrating various payment gateways to serve customers
                from different regions. We'll cover global solutions like Stripe and PayPal, as well as regional options
                like eSewa, Khalti, Razorpay, Flutterwave, and Payoneer.
              </p>

              <div className="grid gap-6 md:grid-cols-2 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Why Multiple Payment Gateways?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 mt-1 text-primary" />
                        <span>Serve customers in regions with preferred local payment methods</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 mt-1 text-primary" />
                        <span>Reduce dependency on a single payment provider</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 mt-1 text-primary" />
                        <span>Optimize conversion rates by offering familiar payment options</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 mt-1 text-primary" />
                        <span>Minimize transaction fees by choosing cost-effective options per region</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Implementation Approach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 mt-1 text-primary" />
                        <span>Detect user location to offer relevant payment methods</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 mt-1 text-primary" />
                        <span>Implement a unified payment processing interface</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 mt-1 text-primary" />
                        <span>Handle currency conversion automatically</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-4 w-4 mt-1 text-primary" />
                        <span>Provide consistent user experience across payment methods</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="global">
                <TabsList className="w-full justify-start mb-6">
                  <TabsTrigger value="global">Global Solutions</TabsTrigger>
                  <TabsTrigger value="nepal">Nepal</TabsTrigger>
                  <TabsTrigger value="india">India</TabsTrigger>
                  <TabsTrigger value="africa">Africa</TabsTrigger>
                  <TabsTrigger value="other">Other Regions</TabsTrigger>
                </TabsList>

                <TabsContent value="global" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Stripe Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Stripe is a comprehensive payment solution that works in 40+ countries and supports 135+
                      currencies.
                    </p>

                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle className="text-base">Implementation Steps</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 list-decimal pl-4">
                          <li>Create a Stripe account and get your API keys</li>
                          <li>Install the Stripe SDK in your project</li>
                          <li>Set up a payment intent on your server</li>
                          <li>Implement the client-side payment form</li>
                          <li>Handle successful payments and failures</li>
                        </ol>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <Link href="https://stripe.com/docs" target="_blank">
                            Stripe Documentation
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <div className="bg-muted p-4 rounded-md mb-6">
                      <h4 className="font-medium mb-2">Server-side Code Example (Node.js)</h4>
                      <pre className="text-sm overflow-x-auto p-2 bg-black text-white rounded">
                        {`const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create a payment intent
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: { enabled: true },
    });
    
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`}
                      </pre>
                    </div>

                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-medium mb-2">Client-side Code Example (React)</h4>
                      <pre className="text-sm overflow-x-auto p-2 bg-black text-white rounded">
                        {`import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_your_key');

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) return;
    
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: 'https://yoursite.com/success' },
    });
    
    if (result.error) {
      console.error(result.error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Pay Now</button>
    </form>
  );
}

export default function StripeCheckout({ clientSecret }) {
  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}`}
                      </pre>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-xl font-bold mb-4">PayPal Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      PayPal is widely used globally and offers both standard checkout and express checkout options.
                    </p>

                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle className="text-base">Implementation Steps</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 list-decimal pl-4">
                          <li>Create a PayPal Developer account</li>
                          <li>Set up your application and get credentials</li>
                          <li>Integrate the PayPal JavaScript SDK</li>
                          <li>Implement the PayPal buttons</li>
                          <li>Handle payment approval and completion</li>
                        </ol>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <Link href="https://developer.paypal.com/docs" target="_blank">
                            PayPal Documentation
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-medium mb-2">Client-side Code Example (React)</h4>
                      <pre className="text-sm overflow-x-auto p-2 bg-black text-white rounded">
                        {`import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalCheckout({ amount, currency = "USD" }) {
  return (
    <PayPalScriptProvider options={{ "client-id": "your_client_id" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                  currency_code: currency,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            // Handle successful payment
            console.log("Payment completed", details);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}`}
                      </pre>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="nepal" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">eSewa Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      eSewa is Nepal's leading digital wallet and payment gateway, widely used for online transactions.
                    </p>

                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle className="text-base">Implementation Steps</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 list-decimal pl-4">
                          <li>Register as a merchant on eSewa</li>
                          <li>Get your merchant ID and secret key</li>
                          <li>Implement the payment form</li>
                          <li>Handle the payment response</li>
                          <li>Verify the transaction</li>
                        </ol>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <Link href="https://developer.esewa.com.np/" target="_blank">
                            eSewa Documentation
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-medium mb-2">Client-side Code Example (HTML Form)</h4>
                      <pre className="text-sm overflow-x-auto p-2 bg-black text-white rounded">
                        {`<form action="https://uat.esewa.com.np/epay/main" method="POST">
  <input value="100" name="tAmt" type="hidden">
  <input value="90" name="amt" type="hidden">
  <input value="5" name="txAmt" type="hidden">
  <input value="2" name="psc" type="hidden">
  <input value="3" name="pdc" type="hidden">
  <input value="MERCHANT_ID" name="scd" type="hidden">
  <input value="ORDER_ID" name="pid" type="hidden">
  <input value="https://yoursite.com/success" type="hidden" name="su">
  <input value="https://yoursite.com/failure" type="hidden" name="fu">
  <input value="Pay with eSewa" type="submit">
</form>`}
                      </pre>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-xl font-bold mb-4">Khalti Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Khalti is another popular digital wallet in Nepal that offers a simple integration process.
                    </p>

                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle className="text-base">Implementation Steps</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 list-decimal pl-4">
                          <li>Create a merchant account on Khalti</li>
                          <li>Get your public and secret keys</li>
                          <li>Integrate the Khalti SDK</li>
                          <li>Implement the payment button</li>
                          <li>Verify the transaction on your server</li>
                        </ol>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <Link href="https://docs.khalti.com/" target="_blank">
                            Khalti Documentation
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-medium mb-2">Client-side Code Example (React)</h4>
                      <pre className="text-sm overflow-x-auto p-2 bg-black text-white rounded">
                        {`import KhaltiCheckout from "khalti-checkout-web";

function KhaltiPayment({ amount, productName, productId }) {
  const config = {
    publicKey: "YOUR_PUBLIC_KEY",
    productIdentity: productId,
    productName: productName,
    productUrl: "https://yoursite.com/product",
    eventHandler: {
      onSuccess(payload) {
        // Handle success
        console.log(payload);
        
        // Verify transaction on server
        fetch("/verify-khalti", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      },
      onError(error) {
        console.log(error);
      }
    },
    amount: amount * 100 // in paisa
  };
  
  const checkout = new KhaltiCheckout(config);
  
  return (
    <button onClick={() => checkout.show()}>Pay with Khalti</button>
  );
}`}
                      </pre>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="india" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Razorpay Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Razorpay is a popular payment gateway in India that supports various payment methods including
                      UPI, cards, and net banking.
                    </p>

                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle className="text-base">Implementation Steps</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 list-decimal pl-4">
                          <li>Create a Razorpay account</li>
                          <li>Get your API keys</li>
                          <li>Create an order on your server</li>
                          <li>Implement the checkout form</li>
                          <li>Handle payment success and failure</li>
                        </ol>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <Link href="https://razorpay.com/docs/" target="_blank">
                            Razorpay Documentation
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-medium mb-2">Client-side Code Example (React)</h4>
                      <pre className="text-sm overflow-x-auto p-2 bg-black text-white rounded">
                        {`import { useEffect } from 'react';

function RazorpayCheckout({ orderId, amount, currency = "INR", customerName, customerEmail }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  const handlePayment = () => {
    const options = {
      key: "YOUR_KEY_ID",
      amount: amount * 100, // in paise
      currency,
      name: "Your Company",
      description: "Purchase Description",
      order_id: orderId,
      handler: function(response) {
        // Handle success
        console.log(response);
        
        // Verify payment on server
        fetch("/verify-razorpay", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response)
        });
      },
      prefill: {
        name: customerName,
        email: customerEmail
      },
      theme: {
        color: "#3399cc"
      }
    };
    
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };
  
  return (
    <button onClick={handlePayment}>Pay with Razorpay</button>
  );
}`}
                      </pre>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="africa" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Flutterwave Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Flutterwave is a leading payment gateway in Africa, supporting multiple payment methods across
                      different African countries.
                    </p>

                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle className="text-base">Implementation Steps</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 list-decimal pl-4">
                          <li>Create a Flutterwave account</li>
                          <li>Get your public and secret keys</li>
                          <li>Integrate the Flutterwave SDK</li>
                          <li>Implement the payment button</li>
                          <li>Handle the payment callback</li>
                        </ol>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <Link href="https://developer.flutterwave.com/docs" target="_blank">
                            Flutterwave Documentation
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-medium mb-2">Client-side Code Example (React)</h4>
                      <pre className="text-sm overflow-x-auto p-2 bg-black text-white rounded">
                        {`import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

function FlutterwaveCheckout({ amount, customerName, customerEmail, customerPhone, reference }) {
  const config = {
    public_key: "YOUR_PUBLIC_KEY",
    tx_ref: reference,
    amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: customerEmail,
      phone_number: customerPhone,
      name: customerName,
    },
    customizations: {
      title: "Your Company",
      description: "Payment for items in cart",
      logo: "https://yoursite.com/logo.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <button
      onClick={() => {
        handleFlutterPayment({
          callback: (response) => {
            console.log(response);
            
            // Verify payment on server
            fetch("/verify-flutterwave", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response)
            });
            
            closePaymentModal();
          },
          onClose: () => {},
        });
      }}
    >
      Pay with Flutterwave
    </button>
  );
}`}
                      </pre>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="other" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Payoneer Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Payoneer is useful for international payments and is popular in regions with limited access to
                      other payment methods.
                    </p>

                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle className="text-base">Implementation Approach</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">
                          Payoneer doesn't offer a direct payment gateway like Stripe or PayPal. Instead, it's typically
                          used for payouts and mass payments. For accepting payments, you can:
                        </p>
                        <ol className="space-y-2 list-decimal pl-4">
                          <li>Create a Payoneer business account</li>
                          <li>Use Payoneer's API for automated payouts</li>
                          <li>Implement manual payment confirmation for Payoneer transfers</li>
                          <li>Consider using Payoneer's Billing Service for invoicing</li>
                        </ol>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <Link href="https://developer.payoneer.com/" target="_blank">
                            Payoneer Documentation
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>

              <Separator className="my-12" />

              <h2 className="text-2xl font-bold tracking-tighter mb-4">Unified Payment Interface</h2>
              <p className="text-muted-foreground mb-6">
                To simplify integration of multiple payment gateways, we recommend creating a unified payment interface
                that abstracts the specific implementation details of each gateway.
              </p>

              <div className="bg-muted p-4 rounded-md mb-8">
                <h4 className="font-medium mb-2">Example Unified Payment Interface</h4>
                <pre className="text-sm overflow-x-auto p-2 bg-black text-white rounded">
                  {`// paymentService.js

class PaymentService {
  constructor(region = 'global') {
    this.region = region;
  }
  
  // Get available payment methods based on region
  getPaymentMethods() {
    switch(this.region) {
      case 'nepal':
        return ['esewa', 'khalti', 'card'];
      case 'india':
        return ['razorpay', 'upi', 'card'];
      case 'africa':
        return ['flutterwave', 'mpesa', 'card'];
      default:
        return ['card', 'paypal'];
    }
  }
  
  // Create payment based on selected method
  async createPayment(method, paymentDetails) {
    switch(method) {
      case 'card':
        return this.processCardPayment(paymentDetails);
      case 'paypal':
        return this.processPayPalPayment(paymentDetails);
      case 'esewa':
        return this.processEsewaPayment(paymentDetails);
      case 'khalti':
        return this.processKhaltiPayment(paymentDetails);
      case 'razorpay':
        return this.processRazorpayPayment(paymentDetails);
      case 'flutterwave':
        return this.processFlutterwavePayment(paymentDetails);
      default:
        throw new Error('Payment method not supported');
    }
  }
  
  // Implement specific payment processors
  async processCardPayment(details) {
    // Stripe implementation
  }
  
  async processPayPalPayment(details) {
    // PayPal implementation
  }
  
  async processEsewaPayment(details) {
    // eSewa implementation
  }
  
  // ... other payment processors
}

export default PaymentService;`}
                </pre>
              </div>

              <h2 className="text-2xl font-bold tracking-tighter mb-4">Best Practices</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="mr-2 h-4 w-4 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Implement Proper Error Handling</h3>
                    <p className="text-sm text-muted-foreground">
                      Always handle payment errors gracefully and provide clear feedback to users.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 h-4 w-4 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Verify Payments Server-Side</h3>
                    <p className="text-sm text-muted-foreground">
                      Never rely solely on client-side confirmation. Always verify payments on your server.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 h-4 w-4 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Implement Idempotency</h3>
                    <p className="text-sm text-muted-foreground">
                      Ensure that the same payment cannot be processed multiple times accidentally.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 h-4 w-4 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Follow Security Best Practices</h3>
                    <p className="text-sm text-muted-foreground">
                      Use HTTPS, implement proper authentication, and never store sensitive payment data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="mr-2 h-4 w-4 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Test Thoroughly</h3>
                    <p className="text-sm text-muted-foreground">
                      Test all payment flows in sandbox/test environments before going live.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h2 className="text-xl font-bold mb-4">Need Help with Implementation?</h2>
                <p className="mb-4">
                  Our team can help you implement the right payment solutions for your target audience. Contact us for
                  custom integration support.
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Our Development Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <SiteFooter />
    </div>
  )
}
