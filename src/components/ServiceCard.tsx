"use client";

import React from 'react';
import { ClickableTile, Theme } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import './ServiceCard.scss';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

export default function ServiceCard({ title, description, imageSrc, href }: ServiceCardProps) {
  return (
    <Theme theme="g100">
      <ClickableTile href={href} className="service-card">
        <div className="service-card-image" style={{ backgroundImage: `url(${imageSrc})` }} />
        <div className="service-card-content">
          <h4 className="service-card-title">{title}</h4>
          <p className="service-card-desc">{description}</p>
          <div className="service-card-icon">
            <ArrowRight size={20} />
          </div>
        </div>
      </ClickableTile>
    </Theme>
  );
}
