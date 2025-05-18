import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, LogIn, Menu, X } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface HeaderProps {
  session: any;
  onLogout: () => Promise<void>;
}

const Header: React.FC<HeaderProps> = ({ session, onLogout }) => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Library", path: "/library" },
  ];

  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">ReadFast</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Button variant="ghost" asChild>
                  <Link to={item.path}>{item.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {session ? (
            <Button variant="outline" onClick={onLogout}>
              Sign Out
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              className="hidden md:flex"
            >
              <LogIn className="mr-2 h-4 w-4" /> Sign In
            </Button>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.path}>
                    <Link
                      to={item.path}
                      className="px-4 py-2 hover:bg-accent rounded-md transition-colors"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
                {!session && (
                  <SheetClose asChild>
                    <Button onClick={() => navigate("/login")} className="mt-4">
                      <LogIn className="mr-2 h-4 w-4" /> Sign In
                    </Button>
                  </SheetClose>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
