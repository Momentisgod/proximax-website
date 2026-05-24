import React from 'react';
import { Grid, Column } from '@carbon/react';

export default function PrivacyPolicy() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--cds-background)' }}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h1 style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '2rem' }}>Privacy Policy</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', maxWidth: '800px', lineHeight: 1.8 }}>
            This Privacy Policy explains how Proximax Technology collects, uses, and discloses information about you when you access or use our website.
            <br /><br />
            (Placeholder for full Privacy Policy text)
          </p>
        </Column>
      </Grid>
    </section>
  );
}
