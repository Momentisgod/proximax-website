import React from 'react';
import { Grid, Column } from '@carbon/react';

export default function Partnerships() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--cds-background)' }}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h1 style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '2rem' }}>Partnerships</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--cds-text-secondary)', maxWidth: '800px', marginBottom: '4rem' }}>
            We collaborate with industry leaders to deliver world-class solutions.
          </p>
        </Column>
      </Grid>
    </section>
  );
}
