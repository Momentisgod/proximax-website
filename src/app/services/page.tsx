"use client";

import React from 'react';
import { Grid, Column, Theme, Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

const servicesData = [
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure Solutions',
    desc: 'Top-tier cloud hosting and scalable infrastructure powered by industry leaders like AWS, Azure, IBM, and Oracle. We guarantee high availability, disaster recovery, and optimal performance for your enterprise workloads.',
    img: '/image/cloud.jpg'
  },
  {
    id: 'web',
    title: 'Web Design & App Development',
    desc: 'We craft bespoke, high-performance web applications and automated business solutions. Our team focuses on solving unique operational challenges, enhancing user experience, and elevating your digital presence through cutting-edge frameworks.',
    img: '/image/web.jpg'
  },
  {
    id: 'networking',
    title: 'Enterprise Networking & Wi-Fi',
    desc: 'Resilient and secure network architectures utilizing Cisco and Ruijie technologies. Keep your business securely connected with robust Wi-Fi, core routing, and reliable intranet solutions that scale with your growth.',
    img: '/image/server-service.jpg'
  },
  {
    id: 'security',
    title: 'Advanced Cybersecurity',
    desc: 'Comprehensive security strategies backed by Fortinet. We protect your critical data, prevent breaches, conduct vulnerability assessments, and ensure strict compliance across your entire IT environment.',
    img: '/image/tech.jpg'
  },
  {
    id: 'erp',
    title: 'ERP & Business Automation',
    desc: 'Streamline your workflows with customized Enterprise Resource Planning (ERP) integrations using Odoo. Boost operational efficiency, automate repetitive tasks, and enable data-driven decision-making across all departments.',
    img: '/image/consulting.jpg'
  },
  {
    id: 'physical-security',
    title: 'Intelligent Security Systems',
    desc: 'Advanced surveillance, access control, and physical security solutions powered by Hikvision. Ensure the safety of your premises, assets, and personnel with state-of-the-art monitoring and AI-driven threat detection.',
    img: '/image/It-services.jpg'
  }
];

export default function Services() {
  return (
    <>
      <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--cds-layer)' }}>
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--cds-text-primary)' }}>Our Services</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--cds-text-secondary)', maxWidth: '800px' }}>
              Proximax Technology provides a comprehensive suite of enterprise-grade digital solutions designed to elevate your business, secure your assets, and accelerate your digital transformation.
            </p>
          </Column>
        </Grid>
      </section>

      {servicesData.map((service, index) => (
        <section key={service.id} style={{ padding: '5rem 0', backgroundColor: index % 2 === 0 ? 'var(--cds-background)' : 'var(--cds-layer-01)' }}>
          <Grid style={{ alignItems: 'center' }}>
            {index % 2 === 0 ? (
              <>
                <Column lg={8} md={4} sm={4} style={{ marginBottom: '2rem' }}>
                  <img src={service.img} alt={service.title} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                </Column>
                <Column lg={1} md={0} sm={0}></Column>
                <Column lg={7} md={4} sm={4}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' }}>{service.title}</h3>
                  <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {service.desc}
                  </p>
                  <Button href="/contact" renderIcon={ArrowRight} kind="tertiary">Learn More</Button>
                </Column>
              </>
            ) : (
              <>
                <Column lg={7} md={4} sm={4} style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' }}>{service.title}</h3>
                  <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {service.desc}
                  </p>
                  <Button href="/contact" renderIcon={ArrowRight} kind="tertiary">Learn More</Button>
                </Column>
                <Column lg={1} md={0} sm={0}></Column>
                <Column lg={8} md={4} sm={4}>
                  <img src={service.img} alt={service.title} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                </Column>
              </>
            )}
          </Grid>
        </section>
      ))}

      <Theme theme="g90">
        <section style={{ padding: '4rem 0', backgroundColor: 'var(--cds-background)' }}>
          <Grid>
            <Column lg={16} md={8} sm={4} style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>Need a Custom Solution?</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', maxWidth: '800px', margin: '0 auto 2rem' }}>
                We tailor our technology services to fit the exact needs of your organization. Get in touch with our experts.
              </p>
              <Button href="/contact" renderIcon={ArrowRight} size="lg">Contact Us Today</Button>
            </Column>
          </Grid>
        </section>
      </Theme>
    </>
  );
}
