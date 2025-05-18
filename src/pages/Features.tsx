import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  BarChart2,
  Award,
  Trophy,
  Bot,
  Mic,
  VolumeX,
  FileText,
  Upload,
  Library,
  Bell,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const Features: React.FC = () => {
  const features = [
    {
      title: "Reading Speed Tests",
      description:
        "Measure your reading speed in words per minute (WPM) with our timed reading passages of varying difficulty levels.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      color: "bg-blue-100 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Progress Tracking",
      description:
        "Track your improvement over time with detailed charts and AI-powered insights to help you reach your goals faster.",
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
      color: "bg-green-100 dark:bg-green-900/20",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      title: "Achievements",
      description:
        "Earn badges and maintain streaks as you improve your reading speed and comprehension through regular practice.",
      icon: <Award className="h-8 w-8 text-primary" />,
      color: "bg-purple-100 dark:bg-purple-900/20",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Leaderboards",
      description:
        "Compare your progress with friends and other users worldwide to stay motivated and push your limits.",
      icon: <Trophy className="h-8 w-8 text-primary" />,
      color: "bg-amber-100 dark:bg-amber-900/20",
      textColor: "text-amber-600 dark:text-amber-400",
    },
  ];

  const aiFeatures = [
    {
      title: "AI-Powered Insights",
      description:
        "Get personalized recommendations based on your reading patterns to improve your speed and comprehension.",
      icon: <Bot className="h-8 w-8 text-primary" />,
    },
    {
      title: "Text-to-Speech",
      description:
        "Listen to AI-generated voice reading at adjustable speeds to help you follow along and improve your pace.",
      icon: <VolumeX className="h-8 w-8 text-primary" />,
    },
    {
      title: "Speech-to-Text",
      description:
        "Read aloud while the app tracks and evaluates your pronunciation, providing real-time feedback.",
      icon: <Mic className="h-8 w-8 text-primary" />,
    },
    {
      title: "Summarization AI",
      description:
        "Get AI-powered summaries of longer texts to improve your comprehension skills and retention.",
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
    {
      title: "Custom Text Upload",
      description:
        "Upload your own text passages or articles to practice with, and let AI analyze them for readability and complexity.",
      icon: <Upload className="h-8 w-8 text-primary" />,
    },
  ];

  const additionalFeatures = [
    {
      title: "Curated Text Library",
      description:
        "Access pre-loaded passages sorted by difficulty and genres, with age-appropriate content for all readers.",
      icon: <Library className="h-8 w-8 text-primary" />,
    },
    {
      title: "Notifications & Reminders",
      description:
        "Set up daily practice reminders, receive milestone celebrations, and get daily reading tips.",
      icon: <Bell className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <SEO
        title="Features - ReadFast"
        description="Explore all the features of ReadFast including reading tests, AI-powered insights, and personalized tracking."
        canonical="/features"
      />

      <div className="container py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Features That Power Your Reading Journey
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ReadFast combines interactive exercises, progress tracking, and
            AI-powered insights to help you read faster while maintaining
            comprehension.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div
                    className={`${feature.color} ${feature.textColor} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              AI-Powered Features
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Leverage the power of artificial intelligence to enhance your
              reading experience
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Additional Features
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Improve Your Reading Speed?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of users who have already improved their reading
              speed and comprehension with ReadFast.
            </p>
            <Button size="lg" className="px-8">
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
