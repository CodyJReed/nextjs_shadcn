"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { useTheme } from "next-themes";

interface ComponentProps {
  className?: string;
}

export function LightDarkToggle({ className }: ComponentProps) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          className={className}
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
        >
          <Button variant="outline">
            <SunIcon className="block dark:hidden" />
            <MoonIcon className="hidden dark:block" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span className="inline dark:hidden">Enable dark mode</span>
          <span className="hidden dark:inline">Enable light mode</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
