import React, { createContext, useContext, useState, ReactNode } from "react";
import { createClient } from "@supabase/supabase-js";

interface AIContextType {
  isAIConfigured: boolean;
  configureAI: (apiKey: string) => Promise<boolean>;
  generateInsights: (readingData: any) => Promise<any>;
  generateSummary: (text: string) => Promise<string>;
  textToSpeech: (text: string, speed: number) => Promise<string>;
  speechToText: () => Promise<string>;
  analyzeText: (text: string) => Promise<any>;
  isLoading: boolean;
  error: string | null;
}

const AIContext = createContext<AIContextType | undefined>(undefined);

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const AIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAIConfigured, setIsAIConfigured] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Check if AI is already configured
  React.useEffect(() => {
    const checkAIConfig = async () => {
      try {
        const { data: user } = await supabase.auth.getUser();
        if (user) {
          const { data } = await supabase
            .from("user_settings")
            .select("ai_api_key")
            .eq("user_id", user.user?.id)
            .single();

          setIsAIConfigured(!!data?.ai_api_key);
        }
      } catch (error) {
        console.error("Error checking AI configuration:", error);
      }
    };

    checkAIConfig();
  }, []);

  const configureAI = async (apiKey: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      const { data: user } = await supabase.auth.getUser();
      if (!user.user) throw new Error("User not authenticated");

      // Store API key in user_settings table
      const { error } = await supabase
        .from("user_settings")
        .upsert({
          user_id: user.user.id,
          ai_api_key: apiKey,
          updated_at: new Date().toISOString(),
        })
        .select();

      if (error) throw error;

      setIsAIConfigured(true);
      return true;
    } catch (err: any) {
      setError(err.message || "Failed to configure AI");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const generateInsights = async (readingData: any) => {
    setIsLoading(true);
    setError(null);
    try {
      // Call Supabase Edge Function for AI insights
      const { data, error } = await supabase.functions.invoke(
        "supabase-functions-generate-insights",
        {
          body: { readingData },
        },
      );

      if (error) throw error;
      return data;
    } catch (err: any) {
      setError(err.message || "Failed to generate insights");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const generateSummary = async (text: string): Promise<string> => {
    setIsLoading(true);
    setError(null);
    try {
      // Call Supabase Edge Function for text summarization
      const { data, error } = await supabase.functions.invoke(
        "supabase-functions-summarize-text",
        {
          body: { text },
        },
      );

      if (error) throw error;
      return data.summary;
    } catch (err: any) {
      setError(err.message || "Failed to generate summary");
      return "";
    } finally {
      setIsLoading(false);
    }
  };

  const textToSpeech = async (text: string, speed: number): Promise<string> => {
    setIsLoading(true);
    setError(null);
    try {
      // Call Supabase Edge Function for text-to-speech
      const { data, error } = await supabase.functions.invoke(
        "supabase-functions-text-to-speech",
        {
          body: { text, speed },
        },
      );

      if (error) throw error;
      return data.audioUrl;
    } catch (err: any) {
      setError(err.message || "Failed to convert text to speech");
      return "";
    } finally {
      setIsLoading(false);
    }
  };

  const speechToText = async (): Promise<string> => {
    // This would typically use the browser's Web Speech API
    // For now, we'll return a placeholder
    return "Speech to text functionality will be implemented using browser APIs";
  };

  const analyzeText = async (text: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // Call Supabase Edge Function for text analysis
      const { data, error } = await supabase.functions.invoke(
        "supabase-functions-analyze-text",
        {
          body: { text },
        },
      );

      if (error) throw error;
      return data;
    } catch (err: any) {
      setError(err.message || "Failed to analyze text");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AIContext.Provider
      value={{
        isAIConfigured,
        configureAI,
        generateInsights,
        generateSummary,
        textToSpeech,
        speechToText,
        analyzeText,
        isLoading,
        error,
      }}
    >
      {children}
    </AIContext.Provider>
  );
};

export const useAI = () => {
  const context = useContext(AIContext);
  if (context === undefined) {
    throw new Error("useAI must be used within an AIProvider");
  }
  return context;
};
