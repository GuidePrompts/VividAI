
import React from 'react';
import { PricingPlan, VideoStyle } from './types';

export const VIDEO_STYLES: VideoStyle[] = [
  'Cinematic',
  'Anime',
  'Realistic',
  'Cartoon',
  'Cyberpunk',
  '3D Render'
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free',
    price: '$0',
    features: [
      '3 Generates per month',
      '720p Resolution',
      'Community Support',
      'Standard Speed'
    ]
  },
  {
    name: 'Pro',
    price: '$29',
    features: [
      'Unlimited Generates',
      '1080p Full HD',
      'Priority Queue',
      'Early access to new styles',
      'Commercial License'
    ],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Dedicated GPU instance',
      '4K Resolution',
      'API Access',
      'Custom Style Training',
      'Dedicated Account Manager'
    ]
  }
];

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Generator', path: '/generator' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];
