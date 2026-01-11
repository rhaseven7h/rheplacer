/*
 * Copyright (c) 2025 Gabriel Medina (Rhaseven7h).
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying of this file, via any medium, is strictly prohibited.
 *
 */

import DashboardFooterBar from "@/components/pages/rheplacer/dashboardFooterBar";
import DashboardNavigationBar from "@/components/pages/rheplacer/dashboardNavigationBar";
import DashboardSideBar from "@/components/pages/rheplacer/dashboardSideBar";

const RheplacerPage = () => {
  return (
    <>
      <div className={"rh-grid"}>
        <div className={"rh-header"}>
          <DashboardNavigationBar />
        </div>
        <div className={"rh-sidebar"}>
          <DashboardSideBar />
        </div>
        <div className={"rh-content"}>Main Content</div>
        <div className={"rh-footer"}>
          <DashboardFooterBar />
        </div>
      </div>
    </>
  );
};

export default RheplacerPage;
