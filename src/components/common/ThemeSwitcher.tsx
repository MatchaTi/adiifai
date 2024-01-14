"use client";

import { useTheme } from "next-themes";
import useHasMounted from "@/hooks/useHasMounted";
import { Icon } from "@iconify/react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const mounted = useHasMounted();

  if (!mounted) return null;

  return (
    <button
      className="p-2 rounded-full bg-light-bg border border-light-secondary dark:bg-dark-bg dark:border-dark-secondary"
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      <Icon
        icon={theme == "light"
          ? "line-md:moon-alt-to-sunny-outline-loop-transition"
          : "line-md:sunny-outline-to-moon-alt-loop-transition"}
      />
    </button>
  );
}
