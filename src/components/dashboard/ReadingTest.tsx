import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  BookOpen,
  Timer,
  BarChart3,
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
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ReadingTestProps {
  onComplete?: (results: TestResults) => void;
}

interface TestResults {
  wpm: number;
  comprehensionScore: number;
  passageId: string;
  difficulty: string;
  completionTime: number;
}

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

interface Passage {
  id: string;
  title: string;
  content: string;
  difficulty: string;
  wordCount: number;
  questions: Question[];
}

const samplePassages: Passage[] = [
  {
    id: "beginner-1",
    title: "The Benefits of Reading",
    content: `Reading is one of the most beneficial activities for the human mind. It improves vocabulary, enhances knowledge, and stimulates imagination. Regular reading has been linked to reduced stress levels and improved focus. Many successful people attribute their achievements to reading habits they developed early in life. Reading exposes us to new ideas and perspectives that we might not encounter in our daily lives. Whether it's fiction or non-fiction, every book offers something valuable to learn.`,
    difficulty: "beginner",
    wordCount: 75,
    questions: [
      {
        id: "q1",
        text: "According to the passage, what does reading improve?",
        options: [
          "Memory only",
          "Vocabulary and knowledge",
          "Physical strength",
          "Mathematical skills",
        ],
        correctAnswer: "Vocabulary and knowledge",
      },
      {
        id: "q2",
        text: "What do many successful people attribute their achievements to?",
        options: ["Luck", "Reading habits", "Genetics", "Financial support"],
        correctAnswer: "Reading habits",
      },
    ],
  },
  {
    id: "intermediate-1",
    title: "The Digital Revolution",
    content: `The digital revolution has transformed how we live, work, and communicate. From smartphones to artificial intelligence, technology continues to evolve at an unprecedented pace. While these advancements offer numerous benefits, they also present challenges such as privacy concerns and digital addiction. Finding a balance between embracing innovation and maintaining human connection has become increasingly important. As we navigate this digital landscape, it's crucial to develop digital literacy skills and critical thinking abilities. The future will likely bring even more sophisticated technologies that further blur the line between physical and virtual realities.`,
    difficulty: "intermediate",
    wordCount: 90,
    questions: [
      {
        id: "q1",
        text: "What challenges does the digital revolution present?",
        options: [
          "Only benefits, no challenges",
          "Privacy concerns and digital addiction",
          "Slower communication",
          "Reduced innovation",
        ],
        correctAnswer: "Privacy concerns and digital addiction",
      },
      {
        id: "q2",
        text: "What skills does the passage suggest are important to develop?",
        options: [
          "Programming only",
          "Digital literacy and critical thinking",
          "Social media expertise",
          "Hardware repair",
        ],
        correctAnswer: "Digital literacy and critical thinking",
      },
    ],
  },
  {
    id: "advanced-1",
    title: "Quantum Computing Fundamentals",
    content: `Quantum computing represents a paradigm shift in computational capabilities, leveraging quantum mechanical phenomena such as superposition and entanglement. Unlike classical computers that use bits as the smallest unit of data, quantum computers utilize quantum bits or qubits. These qubits can exist in multiple states simultaneously, potentially allowing quantum computers to solve complex problems exponentially faster than their classical counterparts. While still in relatively early stages of development, quantum computing shows promise for revolutionizing fields such as cryptography, material science, and pharmaceutical research. However, significant technical challenges remain, including maintaining quantum coherence and developing error correction methods. The quantum computing landscape continues to evolve with major technology companies and research institutions investing heavily in this transformative technology.`,
    difficulty: "advanced",
    wordCount: 120,
    questions: [
      {
        id: "q1",
        text: "What is the smallest unit of data in quantum computing?",
        options: ["Bits", "Bytes", "Qubits", "Pixels"],
        correctAnswer: "Qubits",
      },
      {
        id: "q2",
        text: "Which fields might quantum computing revolutionize according to the passage?",
        options: [
          "Only entertainment",
          "Cryptography and material science",
          "Only social media",
          "Only gaming",
        ],
        correctAnswer: "Cryptography and material science",
      },
      {
        id: "q3",
        text: "What technical challenges does quantum computing face?",
        options: [
          "No challenges mentioned",
          "Only software issues",
          "Maintaining quantum coherence and error correction",
          "Only cost issues",
        ],
        correctAnswer: "Maintaining quantum coherence and error correction",
      },
    ],
  },
];

const ReadingTest: React.FC<ReadingTestProps> = ({ onComplete = () => {} }) => {
  const [stage, setStage] = useState<
    "selection" | "reading" | "quiz" | "results"
  >("selection");
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<string>("beginner");
  const [currentPassage, setCurrentPassage] = useState<Passage | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(60); // seconds
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<TestResults | null>(null);
  const [progress, setProgress] = useState<number>(0);

  // Effect for timer
  useEffect(() => {
    let timer: number | undefined;

    if (isTimerRunning && timeRemaining > 0) {
      timer = window.setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
        setProgress((prev) => prev + 100 / 60); // Assuming 60 seconds total
      }, 1000);
    } else if (isTimerRunning && timeRemaining <= 0) {
      setIsTimerRunning(false);
      setStage("quiz");
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerRunning, timeRemaining]);

  const handleDifficultySelect = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
  };

  const startReading = () => {
    const filteredPassages = samplePassages.filter(
      (p) => p.difficulty === selectedDifficulty,
    );
    const randomPassage =
      filteredPassages[Math.floor(Math.random() * filteredPassages.length)];
    setCurrentPassage(randomPassage);
    setStage("reading");
    setTimeRemaining(60); // Reset timer to 60 seconds
    setProgress(0);
  };

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const calculateResults = () => {
    if (!currentPassage) return;

    // Calculate WPM based on passage word count and time taken
    const timeTaken = 60 - timeRemaining; // seconds
    const wpm = Math.round((currentPassage.wordCount / timeTaken) * 60);

    // Calculate comprehension score
    let correctAnswers = 0;
    currentPassage.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const comprehensionScore = Math.round(
      (correctAnswers / currentPassage.questions.length) * 100,
    );

    const testResults: TestResults = {
      wpm,
      comprehensionScore,
      passageId: currentPassage.id,
      difficulty: currentPassage.difficulty,
      completionTime: timeTaken,
    };

    setResults(testResults);
    onComplete(testResults);
    setStage("results");
  };

  const resetTest = () => {
    setStage("selection");
    setCurrentPassage(null);
    setTimeRemaining(60);
    setIsTimerRunning(false);
    setAnswers({});
    setResults(null);
    setProgress(0);
  };

  return (
    <div className="bg-background w-full max-w-4xl mx-auto p-4 rounded-xl">
      {stage === "selection" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Reading Speed Test</h1>
            <p className="text-muted-foreground">
              Measure your reading speed and comprehension
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Select Difficulty Level</CardTitle>
              <CardDescription>
                Choose a difficulty level that matches your reading ability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                defaultValue={selectedDifficulty}
                onValueChange={handleDifficultySelect}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner" className="cursor-pointer">
                    Beginner
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate" className="cursor-pointer">
                    Intermediate
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced" className="cursor-pointer">
                    Advanced
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter>
              <Button onClick={startReading} className="w-full">
                <BookOpen className="mr-2 h-4 w-4" />
                Start Reading Test
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}

      {stage === "reading" && currentPassage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{currentPassage.title}</h2>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="font-mono text-lg">{timeRemaining}s</span>
            </div>
          </div>

          <Progress value={progress} className="h-2" />

          {!isTimerRunning ? (
            <div className="text-center space-y-4 p-8">
              <h3 className="text-xl font-medium">Ready to start?</h3>
              <p className="text-muted-foreground">
                You'll have 60 seconds to read the passage. Try to understand as
                much as possible.
              </p>
              <Button onClick={startTimer} size="lg">
                <Timer className="mr-2 h-4 w-4" />
                Begin Reading
              </Button>
            </div>
          ) : (
            <Card className="border-none shadow-none">
              <CardContent className="p-6">
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg leading-relaxed">
                    {currentPassage.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      )}

      {stage === "quiz" && currentPassage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Comprehension Quiz</h2>
            <p className="text-muted-foreground">
              Answer these questions about the passage you just read
            </p>
          </div>

          <div className="space-y-6">
            {currentPassage.questions.map((question, index) => (
              <Card key={question.id}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Question {index + 1}
                  </CardTitle>
                  <CardDescription>{question.text}</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={answers[question.id] || ""}
                    onValueChange={(value) =>
                      handleAnswerSelect(question.id, value)
                    }
                    className="space-y-3"
                  >
                    {question.options.map((option, optIndex) => (
                      <div
                        key={optIndex}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem
                          value={option}
                          id={`${question.id}-${optIndex}`}
                        />
                        <Label
                          htmlFor={`${question.id}-${optIndex}`}
                          className="cursor-pointer"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-end">
            <Button
              onClick={calculateResults}
              disabled={
                Object.keys(answers).length < currentPassage.questions.length
              }
            >
              Submit Answers
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      )}

      {stage === "results" && results && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Your Results</h2>
            <p className="text-muted-foreground">
              Here's how you performed on the reading test
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Reading Speed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl font-bold">{results.wpm}</span>
                    <p className="text-muted-foreground">Words Per Minute</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Comprehension</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl font-bold">
                      {results.comprehensionScore}%
                    </span>
                    <p className="text-muted-foreground">Accuracy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {results.wpm < 150 ? (
                  <div className="flex items-start space-x-2">
                    <BarChart3 className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Reading Speed</p>
                      <p className="text-muted-foreground">
                        Your reading speed is below average. Regular practice
                        can help improve this.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start space-x-2">
                    <BarChart3 className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Reading Speed</p>
                      <p className="text-muted-foreground">
                        Great job! Your reading speed is above average.
                      </p>
                    </div>
                  </div>
                )}

                {results.comprehensionScore < 70 ? (
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Comprehension</p>
                      <p className="text-muted-foreground">
                        Your comprehension could use some improvement. Try
                        reading more carefully.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Comprehension</p>
                      <p className="text-muted-foreground">
                        Excellent! You understood the passage very well.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={resetTest} className="w-full">
                Try Another Passage
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default ReadingTest;
