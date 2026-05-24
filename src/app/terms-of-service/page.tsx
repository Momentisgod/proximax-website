import React from 'react';
import { Grid, Column } from '@carbon/react';

export default function TermsOfService() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--cds-background)' }}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h1 style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '2rem' }}>Terms of Service</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', maxWidth: '800px', lineHeight: 1.8 }}>
            By accessing or using the Proximax Technology website and services, you agree to be bound by these Terms of Service.
            <br /><br />
            (Placeholder for full Terms of Service text)
          </p>
        </Column>
      </Grid>
    </section>
  );
}
