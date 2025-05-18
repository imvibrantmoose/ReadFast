import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Bot, Key, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAI } from "@/context/AIContext";

const apiKeySchema = z.object({
  apiKey: z.string().min(1, { message: "API Key is required" }),
});

type ApiKeyFormValues = z.infer<typeof apiKeySchema>;

const AISettings: React.FC = () => {
  const { isAIConfigured, configureAI, isLoading, error } = useAI();
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<ApiKeyFormValues>({
    resolver: zodResolver(apiKeySchema),
    defaultValues: {
      apiKey: "",
    },
  });

  const onSubmit = async (data: ApiKeyFormValues) => {
    setSuccess(null);
    const result = await configureAI(data.apiKey);
    if (result) {
      setSuccess("AI configuration successful!");
      form.reset();
    }
  };

  return (
    <Card className="w-full bg-card">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          <div>
            <CardTitle>AI Configuration</CardTitle>
            <CardDescription>
              Configure your OpenAI API key to enable AI-powered features
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}

        <div className="mb-6 p-4 bg-muted rounded-md">
          <div className="flex items-start gap-2">
            <Info className="h-5 w-5 text-blue-500 mt-0.5" />
            <div>
              <h4 className="font-medium mb-1">
                AI Features Require OpenAI API Key
              </h4>
              <p className="text-sm text-muted-foreground">
                To use AI-powered features like insights, text-to-speech, and
                summarization, you need to provide your OpenAI API key. Your key
                is stored securely and used only for your account.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <a
                  href="https://platform.openai.com/api-keys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Get your API key from OpenAI
                </a>
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">OpenAI API Key</Label>
            <div className="relative">
              <Key className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="apiKey"
                type="password"
                placeholder="sk-..."
                className="pl-10"
                {...form.register("apiKey")}
              />
            </div>
            {form.formState.errors.apiKey && (
              <p className="text-sm text-destructive">
                {form.formState.errors.apiKey.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading
              ? "Configuring..."
              : isAIConfigured
                ? "Update API Key"
                : "Configure AI"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col text-sm text-muted-foreground">
        <p>
          Your API key is stored securely and never shared with third parties.
        </p>
      </CardFooter>
    </Card>
  );
};

export default AISettings;
