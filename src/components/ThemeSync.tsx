"use client";

import { useEffect } from "react";
import { useTheme } from "@/store/theme";

export function ThemeSync() {
  const theme = useTheme((s) => s.theme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  return null;
}
