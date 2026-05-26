"use client";

import React from 'react';
import { Grid, Column, Tile, Theme, Button } from '@carbon/react';
import { ArrowRight, CheckmarkOutline, Rocket, Security, Group } from '@carbon/icons-react';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--cds-layer)' }}>
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--cds-text-primary)' }}>About Proximax Technology</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--cds-text-secondary)', maxWidth: '800px' }}>
              We are a premier technology consulting and implementation firm dedicated to empowering businesses through strategic, tailored, and secure digital solutions.
            </p>
          </Column>
        </Grid>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--cds-background)' }}>
        <Grid>
          <Column lg={8} md={4} sm={4} style={{ marginBottom: '3rem', paddingRight: '2rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--cds-text-primary)' }}>Our Mission</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>
              To architect and deliver cutting-edge technology ecosystems that solve complex business challenges, foster sustainable growth, and accelerate the digital transformation journey of our clients worldwide.
            </p>
          </Column>
          <Column lg={8} md={4} sm={4} style={{ marginBottom: '3rem', paddingRight: '2rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--cds-text-primary)' }}>Our Vision</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>
              To be the globally recognized strategic partner of choice for enterprises seeking innovative IT infrastructure, unparalleled cybersecurity, and visionary technological leadership.
            </p>
          </Column>
        </Grid>
      </section>

      {/* Core Values Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--cds-layer-01)' }}>
        <Grid>
          <Column lg={16} md={8} sm={4} style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>Our Core Values</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
              The principles that guide our work, define our culture, and ensure we consistently deliver excellence.
            </p>
          </Column>

          <Column lg={4} md={4} sm={4} style={{ marginBottom: '2rem' }}>
            <Tile style={{ height: '100%', padding: '2rem' }}>
              <Rocket size={32} style={{ color: 'var(--cds-interactive-01)', marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Innovation First</h4>
              <p style={{ color: 'var(--cds-text-secondary)' }}>We continuously explore emerging technologies to provide forward-thinking solutions.</p>
            </Tile>
          </Column>
          <Column lg={4} md={4} sm={4} style={{ marginBottom: '2rem' }}>
            <Tile style={{ height: '100%', padding: '2rem' }}>
              <Security size={32} style={{ color: 'var(--cds-interactive-01)', marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Uncompromising Security</h4>
              <p style={{ color: 'var(--cds-text-secondary)' }}>We build robust architectures where data protection and privacy are foundational, not an afterthought.</p>
            </Tile>
          </Column>
          <Column lg={4} md={4} sm={4} style={{ marginBottom: '2rem' }}>
            <Tile style={{ height: '100%', padding: '2rem' }}>
              <CheckmarkOutline size={32} style={{ color: 'var(--cds-interactive-01)', marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Engineering Excellence</h4>
              <p style={{ color: 'var(--cds-text-secondary)' }}>We hold ourselves to the highest standards of code quality, performance, and reliability.</p>
            </Tile>
          </Column>
          <Column lg={4} md={4} sm={4} style={{ marginBottom: '2rem' }}>
            <Tile style={{ height: '100%', padding: '2rem' }}>
              <Group size={32} style={{ color: 'var(--cds-interactive-01)', marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Client-Centricity</h4>
              <p style={{ color: 'var(--cds-text-secondary)' }}>Your success is our success. We act as a true extension of your team.</p>
            </Tile>
          </Column>
        </Grid>
      </section>

      {/* Leadership Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--cds-background)' }}>
        <Grid>
          <Column lg={16} md={8} sm={4} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>Executive Leadership</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', maxWidth: '800px' }}>
              Driven by a team of industry veterans passionate about leveraging technology to create real-world impact.
            </p>
          </Column>
          
          <Column lg={8} md={4} sm={4} style={{ marginBottom: '2rem' }}>
            <Tile style={{ height: '100%', padding: '3rem 2rem', borderTop: '4px solid var(--cds-interactive-01)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '0.5rem' }}>Han Myo Sett</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--cds-interactive-01)', marginBottom: '1.5rem', fontWeight: 500 }}>Chief Executive Officer (CEO)</p>
              <p style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6, fontSize: '1rem' }}>
                Leading Proximax Technology's overarching vision and strategic growth. Han brings deep business acumen and a relentless focus on delivering exceptional value to our enterprise clients.
              </p>
            </Tile>
          </Column>
          <Column lg={8} md={4} sm={4} style={{ marginBottom: '2rem' }}>
            <Tile style={{ height: '100%', padding: '3rem 2rem', borderTop: '4px solid var(--cds-interactive-01)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '0.5rem' }}>Thaw Moe Hein</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--cds-interactive-01)', marginBottom: '1.5rem', fontWeight: 500 }}>Chief Technology Officer (CTO)</p>
              <p style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6, fontSize: '1rem' }}>
                Spearheading our technical direction and enterprise architecture. Thaw ensures engineering excellence, technological innovation, and scalable deployments across all our solutions.
              </p>
            </Tile>
          </Column>
        </Grid>
      </section>

      {/* CTA Section */}
      <Theme theme="g90">
        <section style={{ padding: '4rem 0', backgroundColor: 'var(--cds-background)' }}>
          <Grid>
            <Column lg={16} md={8} sm={4} style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>Ready to Transform Your Business?</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Partner with Proximax Technology to build resilient, scalable, and secure operations.
              </p>
              <Button href="/contact" renderIcon={ArrowRight} size="lg">Get in Touch</Button>
            </Column>
          </Grid>
        </section>
      </Theme>
    </>
  );
}
