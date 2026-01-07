/*
 * Copyright (c) 2026 Gabriel Medina. All rights reserved.
 * This software and associated documentation files are proprietary to Gabriel Medina. Unauthorized copying of this file, via any medium, is strictly prohibited.
 *
 */

"use client";

import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import { useMemo } from "react";

const AppFooterBar = () => {
  const year = useMemo<number>(() => new Date().getFullYear(), []);
  return (
    <Footer container>
      <FooterCopyright href="#" by="Flowbite™" year={year} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
};

export default AppFooterBar;
