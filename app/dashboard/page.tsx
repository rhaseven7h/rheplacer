/*
 * Copyright (c) 2025 Gabriel Medina (Rhaseven7h).
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying of this file, via any medium, is strictly prohibited.
 *
 */

"use client";

import "./dashboard.scss";
import cn from "classnames";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";

import * as React from "react";
import { HiArrowSmRight, HiTable } from "react-icons/hi";
import { HiChartPie, HiInbox, HiShoppingBag, HiUser } from "react-icons/hi2";

const DashboardHeader = () => {
  return (
    <Navbar
      fluid
      rounded
      className={"shadow-sm z-50 border-b border-b-gray-300"}
    >
      <NavbarBrand href="https://rhaseven7h.com">
        <img
          src="/RheplacerLogox.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Rheplacer
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

const DashboardSidebar = () => {
  return (
    <Sidebar
      aria-label="Rheplacer Sidebar"
      className={"shadow-[2px_0_2px_1px_rgba(0,0,0,0.05)] z-0"}
    >
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="#" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          <SidebarCollapse icon={HiShoppingBag} label="E-commerce">
            <SidebarItem href="#">Products</SidebarItem>
            <SidebarItem href="#">Sales</SidebarItem>
            <SidebarItem href="#">Refunds</SidebarItem>
            <SidebarItem href="#">Shipping</SidebarItem>
          </SidebarCollapse>
          <SidebarItem href="#" icon={HiInbox}>
            Inbox
          </SidebarItem>
          <SidebarItem href="#" icon={HiUser}>
            Users
          </SidebarItem>
          <SidebarItem href="#" icon={HiShoppingBag}>
            Products
          </SidebarItem>
          <SidebarItem href="#" icon={HiArrowSmRight}>
            Sign In
          </SidebarItem>
          <SidebarItem href="#" icon={HiTable}>
            Sign Up
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
};

function DashboardFooter() {
  return (
    <Footer
      container
      className={
        "shadow-[0px_-2px_2px_1px_rgba(0,0,0,0.05)] z-50 border-t border-t-gray-300"
      }
    >
      <FooterCopyright
        href="#"
        by="Flowbite™"
        year={new Date().getFullYear()}
      />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}

const Dashboard = () => {
  return (
    <div
      className={cn(
        "grid grid-rows-[auto_1fr_auto]",
        "grid-cols-[auto_1fr] h-[100vh]",
        "[grid-template-areas:'rh-header_rh-header'_'rh-sidebar_rh-content'_'rh-footer_rh-footer']",
      )}
    >
      <div className={"[grid-area:rh-header]"}>
        <DashboardHeader />
      </div>
      <div className={"[grid-area:rh-sidebar]"}>
        <DashboardSidebar />
      </div>
      <div className={"[grid-area:rh-content] p-4"}>Content</div>
      <div className={"[grid-area:rh-footer]"}>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default Dashboard;
