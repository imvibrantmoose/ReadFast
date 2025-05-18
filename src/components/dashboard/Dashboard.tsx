import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, BarChart2, Settings, Award, Trophy } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DashboardProps {
  username?: string;
  currentWpm?: number;
  streak?: number;
  achievements?: number;
}

const Dashboard = ({
  username = "Reader",
  currentWpm = 0,
  streak = 0,
  achievements = 0,
}: DashboardProps) => {
  const dashboardItems = [
    {
      title: "Reading Speed Test",
      description:
        "Test your reading speed and comprehension with passages of varying difficulty.",
      icon: <BookOpen className="h-6 w-6" />,
      link: "/reading-test",
      color: "bg-blue-100 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Progress Tracking",
      description:
        "View your reading speed history and comprehension trends over time.",
      icon: <BarChart2 className="h-6 w-6" />,
      link: "/progress",
      color: "bg-green-100 dark:bg-green-900/20",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      title: "Settings",
      description:
        "Customize your reading experience with font size, dark mode, and more.",
      icon: <Settings className="h-6 w-6" />,
      link: "/settings",
      color: "bg-purple-100 dark:bg-purple-900/20",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Achievements",
      description:
        "View your earned badges and track your current reading streak.",
      icon: <Award className="h-6 w-6" />,
      link: "/achievements",
      color: "bg-amber-100 dark:bg-amber-900/20",
      textColor: "text-amber-600 dark:text-amber-400",
    },
    {
      title: "Leaderboards",
      description: "Compare your reading speed with friends and global users.",
      icon: <Trophy className="h-6 w-6" />,
      link: "/leaderboards",
      color: "bg-red-100 dark:bg-red-900/20",
      textColor: "text-red-600 dark:text-red-400",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome back, {username}!
            </h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                Current Speed: {currentWpm} WPM
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
                Streak: {streak} days
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full">
                Achievements: {achievements}
              </div>
            </div>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div
                    className={`${item.color} ${item.textColor} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}
                  >
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Placeholder for additional content */}
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to={item.link}>Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Daily Tip
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Try the "pointer method" - use your finger or a pen to guide your
            eyes while reading. This can help increase your reading speed by up
            to 25% by reducing fixations and regressions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
