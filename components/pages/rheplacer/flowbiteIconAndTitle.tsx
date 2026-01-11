/*
 * Copyright (c) 2025 Gabriel Medina (Rhaseven7h).
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying of this file, via any medium, is strictly prohibited.
 *
 */

const FlowbiteIconAndTitle = () => {
  return (
    <a href="https://flowbite.com" className="flex mr-4">
      <img
        src="https://flowbite.s3.amazonaws.com/logo.svg"
        className="mr-3 h-8"
        alt="FlowBite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Flowbite
      </span>
    </a>
  );
};

export default FlowbiteIconAndTitle;
