import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
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
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { Info, TrendingUp, Brain, Calendar } from "lucide-react";

interface ProgressChartProps {
  userData?: {
    wpmData: Array<{ date: string; wpm: number }>;
    comprehensionData: Array<{ date: string; score: number }>;
    insights: Array<{ id: string; title: string; description: string }>;
  };
}

const ProgressChart: React.FC<ProgressChartProps> = ({
  userData = {
    wpmData: [
      { date: "2023-01-01", wpm: 120 },
      { date: "2023-01-08", wpm: 135 },
      { date: "2023-01-15", wpm: 128 },
      { date: "2023-01-22", wpm: 145 },
      { date: "2023-01-29", wpm: 152 },
      { date: "2023-02-05", wpm: 160 },
      { date: "2023-02-12", wpm: 158 },
    ],
    comprehensionData: [
      { date: "2023-01-01", score: 75 },
      { date: "2023-01-08", score: 80 },
      { date: "2023-01-15", score: 78 },
      { date: "2023-01-22", score: 85 },
      { date: "2023-01-29", score: 82 },
      { date: "2023-02-05", score: 88 },
      { date: "2023-02-12", score: 90 },
    ],
    insights: [
      {
        id: "1",
        title: "Reading Speed Improvement",
        description:
          "Your reading speed has improved by 33% in the last month. Keep practicing with more advanced texts to continue improving.",
      },
      {
        id: "2",
        title: "Comprehension Balance",
        description:
          "Your comprehension scores remain high while your speed increases. This indicates excellent progress in efficient reading.",
      },
      {
        id: "3",
        title: "Suggested Focus",
        description:
          "Try practicing with technical texts to further challenge your reading adaptability.",
      },
    ],
  },
}) => {
  const [timeFilter, setTimeFilter] = useState("month");
  const [chartType, setChartType] = useState("wpm");

  return (
    <div className="w-full h-full bg-background">
      <Card className="w-full h-full">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Reading Progress</CardTitle>
              <CardDescription>
                Track your reading speed and comprehension over time
              </CardDescription>
            </div>
            <div className="flex space-x-2">
              <Select value={timeFilter} onValueChange={setTimeFilter}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                  <SelectItem value="year">Year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Calendar className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="wpm"
            onValueChange={setChartType}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="wpm">
                <TrendingUp className="h-4 w-4 mr-2" />
                Reading Speed
              </TabsTrigger>
              <TabsTrigger value="comprehension">
                <Brain className="h-4 w-4 mr-2" />
                Comprehension
              </TabsTrigger>
              <TabsTrigger value="insights">
                <Info className="h-4 w-4 mr-2" />
                AI Insights
              </TabsTrigger>
            </TabsList>

            <TabsContent value="wpm" className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={userData.wpmData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="wpm"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    name="Words Per Minute"
                  />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="comprehension" className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={userData.comprehensionData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="score"
                    fill="#82ca9d"
                    name="Comprehension Score (%)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="insights">
              <div className="space-y-4">
                {userData.insights.map((insight) => (
                  <Card key={insight.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{insight.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{insight.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressChart;
