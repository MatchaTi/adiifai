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
      className="fixed bottom-4 right-4 py-1 px-4 rounded-full flex items-center gap-2 bg-light-bg border border-light-secondary dark:bg-dark-bg dark:border-dark-secondary lg:static"
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      <Icon
        icon={theme == "light"
          ? "line-md:sunny-outline-to-moon-alt-loop-transition"
          : "line-md:moon-alt-to-sunny-outline-loop-transition"}
      />
      <span>
        {theme == "light" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
