import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import {
  BookOpen,
  BarChart2,
  Settings,
  Award,
  Trophy,
  LogIn,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthForm from "@/components/auth/AuthForm";
import Dashboard from "@/components/dashboard/Dashboard";

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Home = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for active session
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);

      // Set up auth state listener
      const { data: authListener } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          setSession(session);
        },
      );

      return () => {
        authListener.subscription.unsubscribe();
      };
    };

    checkSession();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">ReadFast</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li>
                <Button variant="ghost" onClick={() => navigate("/")}>
                  Home
                </Button>
              </li>
              <li>
                <Button variant="ghost" onClick={() => navigate("/features")}>
                  Features
                </Button>
              </li>
              <li>
                <Button variant="ghost" onClick={() => navigate("/about")}>
                  About
                </Button>
              </li>
            </ul>
          </nav>
          <div>
            {session ? (
              <Button variant="outline" onClick={handleLogout}>
                Sign Out
              </Button>
            ) : (
              <Button onClick={() => navigate("/login")}>
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="container py-8">
        {session ? (
          <Dashboard />
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Improve Your Reading Speed
                </h1>
                <p className="mt-4 text-xl text-muted-foreground">
                  Train your brain to read faster while maintaining
                  comprehension with our interactive exercises and personalized
                  insights.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => navigate("/signup")}>
                    Get Started
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate("/demo")}
                  >
                    Try Demo
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="flex items-center justify-center">
              <AuthForm />
            </div>
          </div>
        )}

        {!session && (
          <section className="mt-24">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Key Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-card">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary" />
                  <CardTitle>Reading Speed Tests</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Measure your reading speed in words per minute (WPM) with
                    our timed reading passages of varying difficulty levels.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <BarChart2 className="h-8 w-8 text-primary" />
                  <CardTitle>Progress Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Track your improvement over time with detailed charts and
                    AI-powered insights to help you reach your goals faster.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary" />
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Earn badges and maintain streaks as you improve your reading
                    speed and comprehension through regular practice.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <Trophy className="h-8 w-8 text-primary" />
                  <CardTitle>Leaderboards</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Compare your progress with friends and other users worldwide
                    to stay motivated and push your limits.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container py-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-semibold">ReadFast</h3>
              <p className="text-sm text-muted-foreground">
                Helping readers worldwide improve their speed and comprehension
                since 2023.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/features" className="hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-foreground">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/privacy" className="hover:text-foreground">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-foreground">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ReadFast. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
