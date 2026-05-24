"use client";

import React from 'react';
import { Grid, Column, TextInput, TextArea, Button } from '@carbon/react';

export default function Contact() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--cds-background)' }}>
      <Grid>
        <Column lg={8} md={8} sm={4} style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '2rem' }}>Contact Us</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--cds-text-secondary)', marginBottom: '2rem' }}>
            Let Proximax Technology be your strategic partner in navigating the digital landscape.
          </p>
          <div style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.8 }}>
            <p><strong>Email:</strong> info@proximaxtech.com</p>
            <p><strong>Phone:</strong> +95 9458647250</p>
            <p><strong>Location:</strong> Yangon, Myanmar, 11131</p>
          </div>
        </Column>

        <Column lg={8} md={8} sm={4}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <TextInput id="name" labelText="Name" placeholder="Your name" />
            <TextInput id="email" labelText="Email" placeholder="Your email address" type="email" />
            <TextArea id="message" labelText="Message" placeholder="How can we help you?" rows={5} />
            <Button type="button" size="md" style={{ alignSelf: 'flex-start' }}>Send Message</Button>
          </form>
        </Column>
      </Grid>
    </section>
  );
}
