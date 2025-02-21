"use client";

import * as React from "react";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleThemeChange = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button variant="ghost" size="icon" className="" onClick={handleThemeChange}>
      {currentTheme === 'light' ?
        (
          <>
            <Sun className="h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:text-indigo-700 hover:text-yellow-400 dark:hover:text-blue-800" />
            <span className="sr-only">Toggle theme</span>
          </>
        )
        :
        (
          <>
            <MoonStar className="absolute h-[1.6rem] w-[1.6rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-indigo-700 dark:hover:text-blue-800" />
            <span className="sr-only">Toggle theme</span>
          </>
        )
      }
    </Button >
  );
}
