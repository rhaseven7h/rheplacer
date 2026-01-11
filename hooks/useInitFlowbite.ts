/*
 * Copyright (c) 2025 Gabriel Medina (Rhaseven7h).
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying of this file, via any medium, is strictly prohibited.
 *
 */
"use client";

import { initFlowbite } from "flowbite";
import { useEffect } from "react";

const useInitFlowbite = () => {
  useEffect(() => {
    initFlowbite();
  }, []);
};

export default useInitFlowbite;
