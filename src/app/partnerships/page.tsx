"use client";

import React from 'react';
import { Grid, Column, Theme, Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

const partnerCategories = [
  {
    category: 'Cloud & Infrastructure',
    description: 'We partner with the world\'s leading cloud providers to offer scalable, secure, and high-performance infrastructure solutions.',
    partners: [
      { name: 'AWS', src: 'https://d0.awsstatic.com/logos/powered-by-aws.png' },
      { name: 'Microsoft Azure', src: '/image/Microsoft-Azure.png' },
      { name: 'IBM', src: '/image/IBM_logo®_rev_blue50_RGB.png' },
      { name: 'Oracle', src: '/image/Oracle%20logo.png' },
      { name: 'Red Hat', src: '/image/Red-Hat-logo-768x432.png' },
      { name: 'GoDaddy', src: '/image/GoDaddy_LockUp_RGB_Teal.png' }
    ]
  },
  {
    category: 'Networking & Cybersecurity',
    description: 'Ensuring your business stays connected and protected with enterprise-grade networking and security appliances.',
    partners: [
      { name: 'Cisco', src: '/image/cisco-org-logo.png' },
      { name: 'Fortinet', src: '/image/Fortinet-logo-rgb-black-red.png' },
      { name: 'Ruijie', src: '/image/ruijie-seeklogo.png' }
    ]
  },
  {
    category: 'Enterprise Software & Automation',
    description: 'Empowering your operations with powerful ERP, CRM, and payment solutions to drive efficiency.',
    partners: [
      { name: 'Odoo', src: '/image/odoo_logo.png' },
      { name: 'HubSpot', src: '/image/Hub-Spot.png' },
      { name: 'Stripe', src: '/image/Stripe%20logo%20Stripe%20wordmark%20-%20blurple%20(large).png' }
    ]
  },
  {
    category: 'Intelligent Physical Security',
    description: 'State-of-the-art surveillance and access control to protect your physical premises.',
    partners: [
      { name: 'Hikvision', src: '/image/Hikvision%20Logo.png' }
    ]
  }
];

export default function Partnerships() {
  return (
    <>
      <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--cds-layer)' }}>
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--cds-text-primary)' }}>Our Strategic Partnerships</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--cds-text-secondary)', maxWidth: '800px' }}>
              At Proximax Technology, we believe in the power of collaboration. We have forged strong partnerships with industry-leading technology vendors to deliver world-class, reliable, and innovative solutions to our clients.
            </p>
          </Column>
        </Grid>
      </section>

      {partnerCategories.map((category, index) => (
        <section key={category.category} style={{ padding: '5rem 0', backgroundColor: index % 2 === 0 ? 'var(--cds-background)' : 'var(--cds-layer-01)' }}>
          <Grid>
            <Column lg={16} md={8} sm={4} style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' }}>{category.category}</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', maxWidth: '800px' }}>
                {category.description}
              </p>
            </Column>
          </Grid>
          <Grid>
            {category.partners.map((partner) => (
              <Column key={partner.name} lg={4} md={4} sm={4} style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                  padding: '2rem',
                  backgroundColor: 'var(--cds-layer)',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  width: '100%',
                  height: '160px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'transform 0.2s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <img 
                    src={partner.src} 
                    alt={partner.name} 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'grayscale(100%) opacity(0.8)', transition: 'all 0.3s ease' }} 
                    onMouseOver={(e) => { e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.8)'; }}
                  />
                </div>
              </Column>
            ))}
          </Grid>
        </section>
      ))}

      <Theme theme="g90">
        <section style={{ padding: '4rem 0', backgroundColor: 'var(--cds-background)' }}>
          <Grid>
            <Column lg={16} md={8} sm={4} style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>Become a Partner</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', maxWidth: '800px', margin: '0 auto 2rem' }}>
                Are you an innovative technology vendor? We are always looking to expand our ecosystem to bring more value to our clients.
              </p>
              <Button href="/contact" renderIcon={ArrowRight} size="lg">Partner With Us</Button>
            </Column>
          </Grid>
        </section>
      </Theme>
    </>
  );
}
