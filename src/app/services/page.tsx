import React from 'react';
import { Grid, Column } from '@carbon/react';

export default function Services() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--cds-background)' }}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h1 style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '2rem' }}>Our Services</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--cds-text-secondary)', maxWidth: '800px', marginBottom: '4rem' }}>
            We provide a comprehensive suite of digital solutions designed to elevate your business.
          </p>
        </Column>
      </Grid>
      <Grid>
        <Column lg={8} md={4} sm={4} style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Web Solutions: Design & Development</h3>
          <p style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>
            We specialize in crafting impactful and intuitive digital presences, from stunning corporate websites to complex e-commerce platforms. Our expertise extends to engineering bespoke web applications, meticulously designed to automate intricate business processes, enhance user engagement, and solve unique operational challenges.
          </p>
        </Column>
        <Column lg={8} md={4} sm={4} style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>High-Performance Hosting</h3>
          <p style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>
            We provide top-tier, reliable, and secure hosting infrastructure, ensuring your websites and web applications experience optimal performance and continuous availability. Leveraging our strategic partnerships with global cloud leaders like AWS, Azure, IBM, and Oracle.
          </p>
        </Column>
        <Column lg={8} md={4} sm={4} style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>IT Services & Consulting</h3>
          <p style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>
            Beyond our specialized web solutions and hosting, Proximax Technology offers a full spectrum of comprehensive IT services and strategic technology consulting. We act as your trusted technical partner, providing expert guidance on IT infrastructure optimization, system integration, network support, and robust cybersecurity strategies.
          </p>
        </Column>
      </Grid>
    </section>
  );
}
