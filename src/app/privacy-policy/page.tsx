import React from 'react';
import { Grid, Column } from '@carbon/react';

export default function PrivacyPolicy() {
  return (
    <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--cds-background)' }}>
      <Grid>
        <Column lg={12} md={8} sm={4} style={{ margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--cds-text-primary)' }}>Privacy Policy</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--cds-text-secondary)', marginBottom: '3rem' }}>
            Last Updated: May 2026
          </p>

          <div style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.8, fontSize: '1.125rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--cds-text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Introduction</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Proximax Technology ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--cds-text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Information We Collect</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We may collect information about you in a variety of ways. The information we may collect via the Site includes:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services.</li>
            </ul>

            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--cds-text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>3. How We Use Your Information</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Create and manage your account.</li>
              <li style={{ marginBottom: '0.5rem' }}>Process your transactions and deliver the services you requested.</li>
              <li style={{ marginBottom: '0.5rem' }}>Email you regarding your account or order.</li>
              <li style={{ marginBottom: '0.5rem' }}>Improve our website and service offerings based on your feedback.</li>
              <li style={{ marginBottom: '0.5rem' }}>Respond to customer service requests and support needs.</li>
            </ul>

            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--cds-text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Disclosure of Your Information</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service.</li>
            </ul>

            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--cds-text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Data Security</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--cds-text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>6. Contact Us</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              If you have questions or comments about this Privacy Policy, please contact us at: <br/>
              <strong>Proximax Technology</strong><br/>
              Email: info@proximax.com<br/>
              Phone: +1-800-PROXIMAX
            </p>
          </div>
        </Column>
      </Grid>
    </section>
  );
}
