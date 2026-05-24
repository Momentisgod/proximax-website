"use client";

import React from 'react';
import { Grid, Column, Tile } from '@carbon/react';

export default function About() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--cds-background)' }}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h1 style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '2rem' }}>About Us</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--cds-text-secondary)', maxWidth: '800px', marginBottom: '2rem' }}>
            At Proximax Technology, we empower businesses with strategic, tailored, and secure technology solutions that drive operational excellence, foster innovation, and accelerate digital transformation.
          </p>
          <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', maxWidth: '800px' }}>
            We act as your trusted technical partner, freeing you to focus on your core operations while we manage your technology backbone.
          </p>
        </Column>
      </Grid>

      <Grid style={{ marginTop: '4rem' }}>
        <Column lg={16} md={8} sm={4}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '2rem' }}>Leadership Team</h2>
        </Column>
        <Column lg={8} md={4} sm={4} style={{ marginBottom: '2rem' }}>
          <Tile style={{ height: '100%', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.5rem' }}>Han Myo Sett</h3>
            <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', marginBottom: '1.5rem', fontWeight: 500 }}>Chief Executive Officer (CEO)</p>
            <p style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>Leading Proximax Technology's vision and strategy to drive digital innovation and deliver exceptional value to our clients.</p>
          </Tile>
        </Column>
        <Column lg={8} md={4} sm={4} style={{ marginBottom: '2rem' }}>
          <Tile style={{ height: '100%', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.5rem' }}>Thaw Moe Hein</h3>
            <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', marginBottom: '1.5rem', fontWeight: 500 }}>Chief Technology Officer (CTO)</p>
            <p style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>Spearheading our technical direction, enterprise architecture, and ensuring engineering excellence across all technology solutions.</p>
          </Tile>
        </Column>
      </Grid>
    </section>
  );
}
