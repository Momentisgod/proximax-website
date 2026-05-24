"use client";

import React from 'react';
import { Grid, Column } from '@carbon/react';
import './PartnerLogos.scss';

interface Partner {
  name: string;
  src: string;
}

interface PartnerLogosProps {
  partners: Partner[];
}

export default function PartnerLogos({ partners }: PartnerLogosProps) {
  return (
    <section className="partners-section">
      <div className="partners-header">
        <h2>Our Partners</h2>
        <div className="underline"></div>
      </div>
      <Grid className="partners-grid">
        {partners.map((partner, index) => (
          <Column sm={2} md={2} lg={2} key={index} className="partner-logo-wrapper">
            <img src={partner.src} alt={partner.name} className="partner-logo" />
          </Column>
        ))}
      </Grid>
    </section>
  );
}
