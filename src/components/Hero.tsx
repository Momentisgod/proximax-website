"use client";

import React from 'react';
import { Button, Theme } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import { useRouter } from 'next/navigation';
import './Hero.scss';

interface HeroProps {
  title: string;
  subtitle: string;
  videoSrc?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({ title, subtitle, videoSrc, ctaText = "Start Your Transformation", ctaLink = "/contact" }: HeroProps) {
  const router = useRouter();

  return (
    <Theme theme="g100">
      <section className="hero-section">
        {videoSrc && (
          <div className="video-background">
            <video autoPlay muted loop playsInline id="bgVideo">
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
          </div>
        )}
        
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <Button 
            renderIcon={ArrowRight} 
            size="xl" 
            onClick={() => router.push(ctaLink)}
            className="hero-cta"
          >
            {ctaText}
          </Button>
        </div>
      </section>
    </Theme>
  );
}
