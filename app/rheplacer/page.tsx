/*
 * Copyright (c) 2025-2026 Gabriel Medina. All rights reserved.
 * This software and associated documentation files are proprietary to Gabriel Medina. Unauthorized copying of this file, via any medium, is strictly prohibited.
 *
 */

import "./rheplacer.scss";
import AppNavBar from "@/app/rheplacer/nav-bar";
import AppSideBar from "@/app/rheplacer/side-bar";
import AppFooterBar from "@/app/rheplacer/footer-bar";

const Rheplacer = () => {
  return (
    <div className={"rh-grid"}>
      <div className={"rh-header"}>
        <AppNavBar />
      </div>
      <div className={"rh-sidebar"}>
        <AppSideBar />
      </div>
      <div className={"rh-content"}>Main Content</div>
      <div className={"rh-footer"}>
        <AppFooterBar />
      </div>
    </div>
  );
};

export default Rheplacer;
