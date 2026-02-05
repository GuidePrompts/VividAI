
import { GoogleGenAI } from "@google/genai";
import { GenerationRequest } from "../types";

export const checkHasApiKey = async (): Promise<boolean> => {
  if (typeof window.aistudio?.hasSelectedApiKey === 'function') {
    return await window.aistudio.hasSelectedApiKey();
  }
  return !!process.env.API_KEY;
};

export const openApiKeySelector = async () => {
  if (typeof window.aistudio?.openSelectKey === 'function') {
    await window.aistudio.openSelectKey();
  }
};

export const generateVideo = async (params: GenerationRequest, onProgress?: (msg: string) => void) => {
  // Always create a new instance to catch updated keys
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const promptWithStyle = `${params.style} style video: ${params.prompt}`;
  
  onProgress?.("Initializing neural engine...");
  
  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: promptWithStyle,
      config: {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: params.aspectRatio
      }
    });

    onProgress?.("Processing video frames... This might take a minute.");

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 8000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
      onProgress?.("Still baking your masterpiece... hang tight!");
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) {
      throw new Error("Generation completed but no video link was returned.");
    }

    // Append API key for direct fetch of the MP4
    const videoUrl = `${downloadLink}&key=${process.env.API_KEY}`;
    return videoUrl;
  } catch (error: any) {
    if (error?.message?.includes("Requested entity was not found")) {
      throw new Error("API_KEY_EXPIRED");
    }
    throw error;
  }
};
