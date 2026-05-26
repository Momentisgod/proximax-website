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

      {/* Metrics Section */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--cds-background)', borderBottom: '1px solid var(--cds-border-subtle)' }}>
        <Grid>
          <Column lg={4} md={2} sm={2} style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--cds-interactive-01)' }}>100+</h3>
            <p style={{ fontSize: '1rem', color: 'var(--cds-text-secondary)', fontWeight: 500 }}>Enterprise Clients</p>
          </Column>
          <Column lg={4} md={2} sm={2} style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--cds-interactive-01)' }}>99.9%</h3>
            <p style={{ fontSize: '1rem', color: 'var(--cds-text-secondary)', fontWeight: 500 }}>Service Uptime</p>
          </Column>
          <Column lg={4} md={2} sm={2} style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--cds-interactive-01)' }}>15+</h3>
            <p style={{ fontSize: '1rem', color: 'var(--cds-text-secondary)', fontWeight: 500 }}>Global Partners</p>
          </Column>
          <Column lg={4} md={2} sm={2} style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--cds-interactive-01)' }}>24/7</h3>
            <p style={{ fontSize: '1rem', color: 'var(--cds-text-secondary)', fontWeight: 500 }}>Technical Support</p>
          </Column>
        </Grid>
      </section>

      {/* What We Do Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--cds-background)' }}>
        <Grid>
          <Column lg={16} md={8} sm={4} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>What We Do</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', maxWidth: '800px' }}>
              At Proximax Technology, we empower businesses with strategic, tailored, and secure technology solutions that drive operational excellence, foster innovation, and accelerate digital transformation.
            </p>
          </Column>

          {/* Row 1 */}
          <Column lg={5} md={4} sm={4} style={{ marginBottom: '2rem' }}>
            <ServiceCard 
              title="Cloud & Infrastructure Solutions"
              description="Top-tier cloud hosting and scalable infrastructure powered by industry leaders like AWS, Azure, IBM, and Oracle to guarantee high availability and optimal performance."
              imageSrc="/image/cloud.jpg"
              href="/services"
            />
          </Column>
          <Column lg={5} md={4} sm={4} style={{ marginBottom: '2rem' }}>
            <ServiceCard 
              title="Web Design & App Development"
              description="We craft bespoke, high-performance web applications and automated business solutions that solve unique operational challenges and enhance your digital presence."
              imageSrc="/image/web.jpg"
              href="/services"
            />
          </Column>
          <Column lg={5} md={4} sm={4} style={{ marginBottom: '2rem' }}>
            <ServiceCard 
              title="Enterprise Networking & Wi-Fi"
              description="Resilient and secure network architectures utilizing Cisco and Ruijie technologies to keep your business securely connected with robust Wi-Fi and core routing."
              imageSrc="/image/server-service.jpg"
              href="/services"
            />
          </Column>

          {/* Row 2 */}
          <Column lg={5} md={4} sm={4} style={{ marginBottom: '2rem' }}>
            <ServiceCard 
              title="Advanced Cybersecurity"
              description="Comprehensive security strategies backed by Fortinet to protect your critical data, prevent breaches, and ensure compliance across your entire IT environment."
              imageSrc="/image/tech.jpg"
              href="/services"
            />
          </Column>
          <Column lg={5} md={4} sm={4} style={{ marginBottom: '2rem' }}>
            <ServiceCard 
              title="ERP & Business Automation"
              description="Streamline your workflows with customized Enterprise Resource Planning (ERP) integrations using Odoo, boosting efficiency and data-driven decision-making."
              imageSrc="/image/consulting.jpg"
              href="/services"
            />
          </Column>
          <Column lg={5} md={4} sm={4} style={{ marginBottom: '2rem' }}>
            <ServiceCard 
              title="Intelligent Security Systems"
              description="Advanced surveillance and access control solutions powered by Hikvision to ensure the physical security of your premises, assets, and personnel."
              imageSrc="/image/It-services.jpg"
              href="/services"
            />
          </Column>
        </Grid>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--cds-layer)' }}>
        <Grid>
          <Column lg={16} md={8} sm={4} style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>Why Choose Proximax</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
              We don't just provide technology; we deliver strategic value. Here is why leading enterprises trust us as their digital transformation partner.
            </p>
          </Column>

          <Column lg={4} md={4} sm={4} style={{ marginBottom: '2rem', padding: '0 1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--cds-text-primary)' }}>Proven Expertise</h4>
            <p style={{ color: 'var(--cds-text-secondary)', lineHeight: '1.6' }}>
              Decades of combined experience across diverse IT domains, ensuring highly specialized solutions tailored to your unique industry needs.
            </p>
          </Column>
          <Column lg={4} md={4} sm={4} style={{ marginBottom: '2rem', padding: '0 1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--cds-text-primary)' }}>Strategic Partnerships</h4>
            <p style={{ color: 'var(--cds-text-secondary)', lineHeight: '1.6' }}>
              Backed by global tech giants like Microsoft, AWS, and IBM, we bring you enterprise-grade technologies at competitive rates.
            </p>
          </Column>
          <Column lg={4} md={4} sm={4} style={{ marginBottom: '2rem', padding: '0 1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--cds-text-primary)' }}>Robust Security</h4>
            <p style={{ color: 'var(--cds-text-secondary)', lineHeight: '1.6' }}>
              Security is woven into our DNA. We ensure your data, network, and physical assets are protected by industry-leading standards.
            </p>
          </Column>
          <Column lg={4} md={4} sm={4} style={{ marginBottom: '2rem', padding: '0 1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--cds-text-primary)' }}>24/7 Dedicated Support</h4>
            <p style={{ color: 'var(--cds-text-secondary)', lineHeight: '1.6' }}>
              Our expert support team is always on standby to resolve issues swiftly, ensuring maximum uptime for your business operations.
            </p>
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
