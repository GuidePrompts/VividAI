
export type VideoStyle = 'Cinematic' | 'Anime' | 'Realistic' | 'Cartoon' | 'Cyberpunk' | '3D Render';

export interface GenerationRequest {
  prompt: string;
  style: VideoStyle;
  duration: number; // in seconds
  aspectRatio: '16:9' | '9:16';
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface VideoHistoryItem {
  id: string;
  prompt: string;
  url: string;
  createdAt: string;
  style: VideoStyle;
}
