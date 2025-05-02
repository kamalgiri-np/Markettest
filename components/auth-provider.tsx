"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import type { Session, User } from "@supabase/supabase-js"

type AuthContextType = {
  user: User | null
  session: Session | null
  isLoading: boolean
  isConfigured: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isConfigured, setIsConfigured] = useState(true)

  useEffect(() => {
    const checkConfiguration = async () => {
      try {
        // Check if Supabase is configured by attempting to get the session
        const { data, error } = await supabase.auth.getSession()

        if (error && error.message.includes("not configured")) {
          setIsConfigured(false)
          console.warn("Supabase is not properly configured. Auth functionality will be limited.")
        } else {
          setSession(data.session)
          setUser(data.session?.user ?? null)
        }
      } catch (error) {
        console.error("Error checking Supabase configuration:", error)
        setIsConfigured(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkConfiguration()

    // Only set up auth listener if Supabase is configured
    if (isConfigured) {
      try {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
          setSession(session)
          setUser(session?.user ?? null)
        })

        return () => {
          authListener?.subscription.unsubscribe()
        }
      } catch (error) {
        console.error("Error setting up auth listener:", error)
        setIsConfigured(false)
      }
    }
  }, [isConfigured])

  const signIn = async (email: string, password: string) => {
    if (!isConfigured) {
      return { error: new Error("Supabase is not configured") }
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      return { error }
    } catch (error) {
      return { error }
    }
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    if (!isConfigured) {
      return { error: new Error("Supabase is not configured") }
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })
      return { error }
    } catch (error) {
      return { error }
    }
  }

  const signOut = async () => {
    if (isConfigured) {
      await supabase.auth.signOut()
    }
  }

  const value = {
    user,
    session,
    isLoading,
    isConfigured,
    signIn,
    signUp,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
