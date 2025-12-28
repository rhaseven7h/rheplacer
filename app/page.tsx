/*
 * Copyright (c) 2025 Gabriel Medina (Rhaseven7h).
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying of this file, via any medium, is strictly prohibited.
 *
 */
import { MainPageCallToActionSection } from '@/app/components/mainPageCallToActionSection';
import { MainPageFeatureSection } from '@/app/components/mainPageFeatureSection';
import { MainPageFooterSection } from '@/app/components/mainPageFooterSection';
import { MainPageHeroSection } from '@/app/components/mainPageHeroSection';
import { DarkThemeToggle } from 'flowbite-react';
import React from 'react';

const MainPage = () => {
  return (
    <div className="p-0 m-0">
      <DarkThemeToggle className="fixed top-4 right-4 z-50" />
      <MainPageHeroSection />
      <MainPageFeatureSection />
      <MainPageCallToActionSection />
      <MainPageFooterSection />
    </div>
  );
};

export default MainPage;
