"use client";

import React from 'react';
import { Grid, Column, Link as CarbonLink, Theme } from '@carbon/react';
import { LogoLinkedin, LogoFacebook } from '@carbon/icons-react';
import Link from 'next/link';
import './SiteFooter.scss';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <Theme theme="g100">
      <footer className="site-footer">
        <Grid>
          <Column lg={4} md={4} sm={4} className="footer-section">
            <h3 className="footer-title">Proximax Technology</h3>
            <p className="footer-desc">
              Your strategic partner for digital transformation, specializing in web solutions, high-performance hosting, and comprehensive IT services.
            </p>
          </Column>

          <Column lg={4} md={4} sm={4} className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/services" passHref legacyBehavior><CarbonLink>Services</CarbonLink></Link></li>
              <li><Link href="/partnerships" passHref legacyBehavior><CarbonLink>Partnerships</CarbonLink></Link></li>
              <li><Link href="/about" passHref legacyBehavior><CarbonLink>About Us</CarbonLink></Link></li>
              <li><Link href="/contact" passHref legacyBehavior><CarbonLink>Contact</CarbonLink></Link></li>
              <li><Link href="/privacy-policy" passHref legacyBehavior><CarbonLink>Privacy Policy</CarbonLink></Link></li>
              <li><Link href="/terms-of-service" passHref legacyBehavior><CarbonLink>Terms of Service</CarbonLink></Link></li>
            </ul>
          </Column>

          <Column lg={4} md={4} sm={4} className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <p className="footer-text">Email: <CarbonLink href="mailto:info@proximaxtech.com">info@proximaxtech.com</CarbonLink></p>
            <p className="footer-text">Phone: <CarbonLink href="tel:+959458647250">+95 9458647250</CarbonLink></p>
            <p className="footer-text">Location: Yangon, Myanmar, 11131</p>
            
            <div className="footer-socials">
              <h4 className="footer-heading">Follow Us</h4>
              <CarbonLink href="https://www.linkedin.com/company/proximax-technology" target="_blank" rel="noopener noreferrer">
                <LogoLinkedin size={24} className="social-icon" />
              </CarbonLink>
              <CarbonLink href="https://www.facebook.com/profile.php?id=61578916859695" target="_blank" rel="noopener noreferrer">
                <LogoFacebook size={24} className="social-icon" />
              </CarbonLink>
            </div>
          </Column>
        </Grid>
        <Grid>
          <Column lg={16} md={8} sm={4} className="footer-bottom">
            <p>© {currentYear} Proximax Technology. All rights reserved.</p>
          </Column>
        </Grid>
      </footer>
    </Theme>
  );
}
