import React from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">ReadFast</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Helping readers worldwide improve their speed and comprehension
              since 2023.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/reading-test" className="hover:text-foreground">
                  Reading Tests
                </Link>
              </li>
              <li>
                <Link to="/progress" className="hover:text-foreground">
                  Progress Tracking
                </Link>
              </li>
              <li>
                <Link to="/library" className="hover:text-foreground">
                  Text Library
                </Link>
              </li>
              <li>
                <Link to="/ai-insights" className="hover:text-foreground">
                  AI Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/features" className="hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ReadFast. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
