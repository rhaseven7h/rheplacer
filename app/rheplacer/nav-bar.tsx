/*
 * Copyright (c) 2026 Gabriel Medina. All rights reserved.
 * This software and associated documentation files are proprietary to Gabriel Medina. Unauthorized copying of this file, via any medium, is strictly prohibited.
 *
 */

"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

const AppNavBar = () => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Rheplacer Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Rheplacer
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default AppNavBar;
