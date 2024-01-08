"use client";

import { useTheme } from "next-themes";
import useHasMounted from "@/hooks/useHasMounted";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const mounted = useHasMounted();

  if (!mounted) return null;

  return (
    <button
      className="px-4 py-2 rounded bg-neutral-800 dark:bg-neutral-200"
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      Button
    </button>
  );
}
