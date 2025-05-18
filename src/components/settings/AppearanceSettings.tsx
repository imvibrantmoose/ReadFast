import React from "react";
import { Paintbrush, Monitor } from "lucide-react";

import { useTheme } from "@/components/ui/theme-provider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const AppearanceSettings: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [primaryColor, setPrimaryColor] = React.useState("blue");
  const [fontSize, setFontSize] = React.useState("medium");

  const handleThemeChange = (value: string) => {
    setTheme(value as "light" | "dark" | "system");
  };

  return (
    <Card className="w-full bg-card">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Paintbrush className="h-6 w-6 text-primary" />
          <div>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Customize how ReadFast looks and feels
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Theme</Label>
          <RadioGroup
            defaultValue={theme}
            onValueChange={handleThemeChange}
            className="grid grid-cols-3 gap-4"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="border-2 rounded-md p-1 cursor-pointer hover:bg-accent transition-colors">
                <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
                  <div className="w-10 h-10 bg-slate-900 rounded" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="theme-light" />
                <Label htmlFor="theme-light" className="cursor-pointer">
                  Light
                </Label>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="border-2 rounded-md p-1 cursor-pointer hover:bg-accent transition-colors">
                <div className="w-20 h-20 bg-slate-900 rounded flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="theme-dark" />
                <Label htmlFor="theme-dark" className="cursor-pointer">
                  Dark
                </Label>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="border-2 rounded-md p-1 cursor-pointer hover:bg-accent transition-colors">
                <div className="w-20 h-20 bg-gradient-to-b from-white to-slate-900 rounded flex items-center justify-center">
                  <Monitor className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="system" id="theme-system" />
                <Label htmlFor="theme-system" className="cursor-pointer">
                  System
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="primary-color">Primary Color</Label>
          <Select value={primaryColor} onValueChange={setPrimaryColor}>
            <SelectTrigger id="primary-color">
              <SelectValue placeholder="Select primary color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blue">Blue</SelectItem>
              <SelectItem value="green">Green</SelectItem>
              <SelectItem value="purple">Purple</SelectItem>
              <SelectItem value="red">Red</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="font-size">Font Size</Label>
          <Select value={fontSize} onValueChange={setFontSize}>
            <SelectTrigger id="font-size">
              <SelectValue placeholder="Select font size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
              <SelectItem value="x-large">Extra Large</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full">Save Preferences</Button>
      </CardContent>
    </Card>
  );
};

export default AppearanceSettings;
