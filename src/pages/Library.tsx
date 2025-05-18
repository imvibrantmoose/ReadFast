import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Search,
  Filter,
  BookText,
  Clock,
  BarChart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";

interface ReadingPassage {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  readTime: number;
  wordCount: number;
  image?: string;
}

const Library: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  const passages: ReadingPassage[] = [
    {
      id: "1",
      title: "The Benefits of Reading",
      excerpt:
        "Reading is one of the most beneficial activities for the human mind. It improves vocabulary, enhances knowledge, and stimulates imagination...",
      category: "educational",
      difficulty: "beginner",
      readTime: 2,
      wordCount: 250,
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&q=80",
    },
    {
      id: "2",
      title: "The Digital Revolution",
      excerpt:
        "The digital revolution has transformed how we live, work, and communicate. From smartphones to artificial intelligence, technology continues to evolve...",
      category: "technology",
      difficulty: "intermediate",
      readTime: 3,
      wordCount: 350,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    },
    {
      id: "3",
      title: "Quantum Computing Fundamentals",
      excerpt:
        "Quantum computing represents a paradigm shift in computational capabilities, leveraging quantum mechanical phenomena such as superposition and entanglement...",
      category: "technology",
      difficulty: "advanced",
      readTime: 5,
      wordCount: 600,
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80",
    },
    {
      id: "4",
      title: "The Art of Fiction",
      excerpt:
        "Fiction allows us to explore new worlds, experience different lives, and understand complex emotions. Great fiction has the power to transform our perspective...",
      category: "literature",
      difficulty: "intermediate",
      readTime: 4,
      wordCount: 450,
      image:
        "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=400&q=80",
    },
    {
      id: "5",
      title: "Introduction to Mindfulness",
      excerpt:
        "Mindfulness is the practice of being present and fully engaged with whatever we're doing at the moment — free from distraction or judgment...",
      category: "wellness",
      difficulty: "beginner",
      readTime: 3,
      wordCount: 320,
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
    },
    {
      id: "6",
      title: "Climate Change: The Science",
      excerpt:
        "Climate change is one of the most pressing challenges facing our planet. Understanding the science behind it is crucial for developing effective solutions...",
      category: "science",
      difficulty: "advanced",
      readTime: 6,
      wordCount: 700,
      image:
        "https://images.unsplash.com/photo-1611273426858-450e7846dca2?w=400&q=80",
    },
  ];

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "educational", name: "Educational" },
    { id: "technology", name: "Technology" },
    { id: "literature", name: "Literature" },
    { id: "wellness", name: "Wellness" },
    { id: "science", name: "Science" },
  ];

  const filteredPassages = passages.filter((passage) => {
    // Filter by search query
    const matchesSearch =
      passage.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      passage.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by category
    const matchesCategory =
      activeTab === "all" || passage.category === activeTab;

    // Filter by difficulty
    const matchesDifficulty =
      difficultyFilter === "all" || passage.difficulty === difficultyFilter;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      default:
        return "";
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <SEO
        title="Reading Library - ReadFast"
        description="Explore our curated collection of reading passages across various categories and difficulty levels to improve your reading speed."
        canonical="/library"
      />

      <div className="container py-12">
        <div className="mb-8">
          <motion.h1
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Reading Library
          </motion.h1>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our curated collection of reading passages
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by title or content..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="w-full md:w-64">
            <Select
              value={difficultyFilter}
              onValueChange={setDifficultyFilter}
            >
              <SelectTrigger>
                <div className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by difficulty" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="mb-8 flex flex-wrap">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              {filteredPassages.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPassages.map((passage, index) => (
                    <motion.div
                      key={passage.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                        {passage.image && (
                          <div className="aspect-video w-full overflow-hidden">
                            <img
                              src={passage.image}
                              alt={passage.title}
                              className="w-full h-full object-cover transition-transform hover:scale-105"
                            />
                          </div>
                        )}
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">
                              {passage.title}
                            </CardTitle>
                            <Badge
                              className={getDifficultyColor(passage.difficulty)}
                            >
                              {passage.difficulty.charAt(0).toUpperCase() +
                                passage.difficulty.slice(1)}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <CardDescription className="line-clamp-3">
                            {passage.excerpt}
                          </CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between pt-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {passage.readTime} min read
                          </div>
                          <div className="flex items-center">
                            <BookText className="h-4 w-4 mr-1" />
                            {passage.wordCount} words
                          </div>
                        </CardFooter>
                        <CardFooter className="pt-0">
                          <Button className="w-full">Start Reading</Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">
                    No passages found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters to find what you're
                    looking for.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          className="mt-16 text-center bg-muted/30 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            Track Your Reading Progress
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Complete reading tests with our library passages to track your speed
            and comprehension improvements over time.
          </p>
          <Button size="lg">View Your Progress</Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Library;
