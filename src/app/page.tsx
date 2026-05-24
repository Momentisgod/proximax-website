"use client";

import React from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import PartnerLogos from '@/components/PartnerLogos';
import { Grid, Column, Theme, Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

const partners = [
  { name: 'Microsoft Azure', src: '/image/Microsoft-Azure.png' },
  { name: 'Cisco', src: '/image/cisco-org-logo.png' },
  { name: 'Fortinet', src: '/image/Fortinet-logo-rgb-black-red.png' },
  { name: 'Odoo', src: '/image/odoo_logo.png' },
  { name: 'Red Hat', src: '/image/Red-Hat-logo-768x432.png' },
  { name: 'GoDaddy', src: '/image/GoDaddy_LockUp_RGB_Teal.png' },
  { name: 'Oracle', src: '/image/Oracle%20logo.png' },
  { name: 'AWS', src: 'https://d0.awsstatic.com/logos/powered-by-aws.png' },
  { name: 'IBM', src: '/image/IBM_logo®_rev_blue50_RGB.png' },
  { name: 'Hikvision', src: '/image/Hikvision%20Logo.png' },
  { name: 'Ruijie', src: '/image/ruijie-seeklogo.png' },
  { name: 'Stripe', src: '/image/Stripe%20logo%20Stripe%20wordmark%20-%20blurple%20(large).png' },
  { name: 'HubSpot', src: '/image/Hub-Spot.png' }
];

export default function Home() {
  return (
    <>
      <Hero 
        title="Unlock Your Business's Full Potential"
        subtitle="Your Strategic Partner for Digital Transformation & Cloud Solutions."
        videoSrc="/Background/Timeline%201.mp4"
      />

      <PartnerLogos partners={partners} />

      <section style={{ padding: '4rem 0', backgroundColor: 'var(--cds-background)' }}>
        <Grid>
          <Column lg={16} md={8} sm={4} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>What We Do</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', maxWidth: '800px' }}>
              At Proximax Technology, we empower businesses with strategic, tailored, and secure technology solutions that drive operational excellence, foster innovation, and accelerate digital transformation.
            </p>
          </Column>

          <Column lg={5} md={4} sm={4}>
            <ServiceCard 
              title="Web Solutions: Design & Development"
              description="We specialize in crafting impactful digital presences and engineering bespoke web applications designed to automate business processes and solve unique operational challenges."
              imageSrc="/image/web.jpg"
              href="/services"
            />
          </Column>
          <Column lg={5} md={4} sm={4}>
            <ServiceCard 
              title="High-Performance Hosting"
              description="We provide top-tier hosting infrastructure leveraging AWS, Azure, IBM, and Oracle to ensure optimal performance, lightning-fast load times, and continuous availability."
              imageSrc="/image/cloud.jpg"
              href="/services"
            />
          </Column>
          <Column lg={5} md={4} sm={4}>
            <ServiceCard 
              title="Comprehensive IT Services & Consulting"
              description="Our expert guidance covers IT infrastructure optimization, system integration, network support, and robust cybersecurity strategies to align with your business objectives."
              imageSrc="/image/consulting.jpg"
              href="/services"
            />
          </Column>
        </Grid>
      </section>

      <Theme theme="g90">
        <section style={{ padding: '4rem 0', backgroundColor: 'var(--cds-background)' }}>
          <Grid>
            <Column lg={16} md={8} sm={4} style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>Ready to Elevate Your Business?</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Let Proximax Technology be your strategic partner in navigating the digital landscape. Contact us today to discuss your unique needs and how our expertise can drive your growth.
              </p>
              <Button href="/contact" renderIcon={ArrowRight} size="lg">Get Your Free Consultation</Button>
            </Column>
          </Grid>
        </section>
      </Theme>
    </>
  );
}
