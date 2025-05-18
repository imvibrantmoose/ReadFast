import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEO from "@/components/SEO";

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = React.useState("monthly");

  const plans = [
    {
      name: "Free",
      description: "Basic features for casual readers",
      price: {
        monthly: "$0",
        yearly: "$0",
      },
      features: [
        { name: "Basic reading speed tests", included: true },
        { name: "Limited progress tracking", included: true },
        { name: "3 reading passages per day", included: true },
        { name: "Basic achievements", included: true },
        { name: "AI-powered insights", included: false },
        { name: "Text-to-Speech", included: false },
        { name: "Custom text upload", included: false },
        { name: "Ad-free experience", included: false },
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      description: "Advanced features for dedicated readers",
      price: {
        monthly: "$9.99",
        yearly: "$7.99",
      },
      features: [
        { name: "Unlimited reading speed tests", included: true },
        { name: "Comprehensive progress tracking", included: true },
        { name: "Unlimited reading passages", included: true },
        { name: "All achievements", included: true },
        { name: "AI-powered insights", included: true },
        { name: "Text-to-Speech", included: true },
        { name: "Custom text upload", included: true },
        { name: "Ad-free experience", included: true },
      ],
      cta: "Subscribe Now",
      popular: true,
    },
    {
      name: "Team",
      description: "For schools, teams, and organizations",
      price: {
        monthly: "$19.99",
        yearly: "$16.99",
      },
      features: [
        { name: "All Premium features", included: true },
        { name: "Team progress dashboard", included: true },
        { name: "Custom reading materials", included: true },
        { name: "Team leaderboards", included: true },
        { name: "Progress reports", included: true },
        { name: "Admin controls", included: true },
        { name: "Priority support", included: true },
        { name: "Team onboarding", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to Premium features until the end of your billing period.",
    },
    {
      question: "Is there a free trial for Premium?",
      answer:
        "Yes, we offer a 7-day free trial for our Premium plan. You can try all Premium features without any commitment.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through our payment processor.",
    },
    {
      question: "Can I switch between plans?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the change will take effect at the end of your current billing period.",
    },
    {
      question: "Do you offer discounts for students or educators?",
      answer:
        "Yes, we offer special pricing for students, educators, and educational institutions. Please contact our sales team for more information.",
    },
    {
      question: "What's included in the Team plan?",
      answer:
        "The Team plan includes all Premium features plus team management tools, progress reports, custom reading materials, and priority support. It's perfect for schools, reading clubs, and organizations.",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <SEO
        title="Pricing - ReadFast"
        description="Choose the perfect ReadFast plan for your reading improvement journey. Free, Premium, and Team plans available."
        canonical="/pricing"
      />

      <div className="container py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the perfect plan for your reading improvement journey
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Tabs
              defaultValue="monthly"
              value={billingCycle}
              onValueChange={setBillingCycle}
              className="w-full max-w-xs mx-auto"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">
                  Yearly{" "}
                  <span className="ml-1 text-xs text-green-500">
                    (Save 20%)
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Card
                className={`h-full flex flex-col ${plan.popular ? "border-primary shadow-md" : ""}`}
              >
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      {plan.price[billingCycle]}
                    </span>
                    {plan.price[billingCycle] !== "$0" && (
                      <span className="text-muted-foreground ml-2">
                        /{" "}
                        {billingCycle === "monthly"
                          ? "month"
                          : "month, billed annually"}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature.name} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mr-2" />
                        )}
                        <span
                          className={`${feature.included ? "" : "text-muted-foreground"}`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-border pb-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-16 text-center bg-muted/30 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
            <p className="text-muted-foreground mb-6">
              Contact our sales team for enterprise pricing and custom solutions
              for your organization.
            </p>
            <Button size="lg">Contact Sales</Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
