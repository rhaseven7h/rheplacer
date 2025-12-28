/*
 * Copyright (c) 2025 Gabriel Medina (Rhaseven7h).
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying of this file, via any medium, is strictly prohibited.
 *
 */

import { CustomIconBestPractices } from "@/components/atoms/customIconBestPractices";
import { CustomIconCaretArrowRight } from "@/components/atoms/customIconCaretArrowRight";
import { CustomIconFingerprint } from "@/components/atoms/customIconFingerprint";
import { CustomIconInsurance } from "@/components/atoms/customIconInsurance";
import React from "react";

export const MainPageFeatureSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          The most trusted cryptocurrency platform
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          Here are a few reasons why you should choose Flowbite
        </p>
        <div className="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <CustomIconFingerprint />
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Secure storage
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              We store the vast majority of the digital assets in secure offline
              storage.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
            >
              Learn how to keep your funds safe <CustomIconCaretArrowRight />
            </a>
          </div>
          <div>
            <CustomIconInsurance />
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Insurance
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Flowbite maintains crypto insurance and all USD cash balances are
              covered.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
            >
              Learn how your crypto is covered <CustomIconCaretArrowRight />
            </a>
          </div>
          <div>
            <CustomIconBestPractices />
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Best practices
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Flowbite marketplace supports a variety of the most popular
              digital currencies.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
            >
              How to implement best practices <CustomIconCaretArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
