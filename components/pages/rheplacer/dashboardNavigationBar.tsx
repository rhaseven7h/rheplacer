/*
 * Copyright (c) 2025 Gabriel Medina (Rhaseven7h).
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying of this file, via any medium, is strictly prohibited.
 *
 */

import AppsIconButtonAndMenu from "@/components/pages/rheplacer/appsIconButtonAndMenu";
import FlowbiteIconAndTitle from "@/components/pages/rheplacer/flowbiteIconAndTitle";
import NavigationBarSearchBox from "@/components/pages/rheplacer/navigationBarSearchBox";
import NewWidgetButton from "@/components/pages/rheplacer/newWidgetButton";
import NotificationsIconButtonAndMenu from "@/components/pages/rheplacer/notificationsIconButtonAndMenu";
import UserIconButtonAndMenu from "@/components/pages/rheplacer/userIconButtonAndMenu";

const NavigationBarLeftSide = () => {
  return (
    <div className="flex justify-start items-center">
      <FlowbiteIconAndTitle />
      <NavigationBarSearchBox />
    </div>
  );
};

const NavigationBarRightSide = () => {
  return (
    <div className="flex items-center lg:order-2">
      <NewWidgetButton />
      <NotificationsIconButtonAndMenu />
      <AppsIconButtonAndMenu />
      <UserIconButtonAndMenu />
    </div>
  );
};

const DashboardNavigationBar = () => {
  return (
    <header className="antialiased">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          <NavigationBarLeftSide />
          <NavigationBarRightSide />
        </div>
      </nav>
    </header>
  );
};

export default DashboardNavigationBar;
