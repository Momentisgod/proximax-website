"use client";

import React from 'react';
import Link from 'next/link';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  Theme
} from '@carbon/react';
import { LogoLinkedin, LogoFacebook } from '@carbon/icons-react';

export default function SiteHeader() {
  return (
    <Theme theme="g100">
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <Header aria-label="Proximax Technology Header">
            <HeaderMenuButton
              aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <Link href="/" passHref legacyBehavior>
              <HeaderName prefix="Proximax">
                Technology
              </HeaderName>
            </Link>
            <HeaderNavigation aria-label="Proximax Technology Navigation">
              <Link href="/services" passHref legacyBehavior>
                <HeaderMenuItem>Services</HeaderMenuItem>
              </Link>
              <Link href="/partnerships" passHref legacyBehavior>
                <HeaderMenuItem>Partnerships</HeaderMenuItem>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <HeaderMenuItem>About Us</HeaderMenuItem>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <HeaderMenuItem>Contact</HeaderMenuItem>
              </Link>
            </HeaderNavigation>
            <HeaderGlobalBar>
              {/* Optional: Add global actions here if needed */}
            </HeaderGlobalBar>
          </Header>
        )}
      />
    </Theme>
  );
}
