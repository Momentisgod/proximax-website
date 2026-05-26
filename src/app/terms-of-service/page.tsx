import React from 'react';
import { Grid, Column } from '@carbon/react';

export default function TermsOfService() {
  return (
    <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--cds-background)' }}>
      <Grid>
        <Column lg={12} md={8} sm={4} style={{ margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--cds-text-primary)' }}>Terms of Service</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', marginBottom: '3rem' }}>
            Effective Date: May 2026
          </p>

          <div style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.8, fontSize: '1.125rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--cds-text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              By accessing and using the website and services provided by Proximax Technology ("we," "our," or "us"), you agree to comply with and be legally bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our services.
            </p>

            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--cds-text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Description of Services</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Proximax Technology provides technology consulting, web development, cloud hosting, enterprise networking, cybersecurity, and ERP implementation services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice.
            </p>

            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--cds-text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>3. User Obligations and Conduct</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              As a user of our services, you agree not to:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Use the services for any illegal or unauthorized purpose.</li>
              <li style={{ marginBottom: '0.5rem' }}>Attempt to interfere with or disrupt our network, servers, or security systems.</li>
              <li style={{ marginBottom: '0.5rem' }}>Transmit any viruses, malware, or other malicious code.</li>
              <li style={{ marginBottom: '0.5rem' }}>Reproduce, duplicate, copy, sell, or exploit any portion of the service without express written permission from us.</li>
            </ul>

            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--cds-text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Intellectual Property Rights</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              All content, graphics, format, design, the user interface and other copyrighted material on the site are protected by copyright law and other intellectual property laws, and are owned by Proximax Technology and/or its licensors. You may not copy, modify, distribute, or use our intellectual property without prior written consent.
            </p>

            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--cds-text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Limitation of Liability</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              In no event shall Proximax Technology, its directors, employees, partners, agents, or suppliers, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content.
            </p>

            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--cds-text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>6. Termination</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
            </p>

            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--cds-text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>7. Contact Information</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              If you have any questions regarding these Terms of Service, please contact us at: <br/>
              <strong>Proximax Technology</strong><br/>
              Email: legal@proximax.com
            </p>
          </div>
        </Column>
      </Grid>
    </section>
  );
}
