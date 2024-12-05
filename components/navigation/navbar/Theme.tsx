"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, resolvedTheme: currentTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant={"outline"}
          className="cursor-pointer outline-none focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200"
        >
          {currentTheme === "light" && (
            <Image
              src={"/icons/sun.svg"}
              width={23}
              height={23}
              alt="light mode logo"
              priority
              loading="eager"
              className="active-theme"
            />
          )}
          {currentTheme === "dark" && (
            <Image
              src={"/icons/moon.svg"}
              width={23}
              height={23}
              alt="dark mode logo"
              priority
              loading="eager"
              className="active-theme"
            />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Image
            src={"/icons/sun.svg"}
            width={15}
            height={15}
            alt="light mode logo"
            priority
            loading="eager"
            className="invert-colors"
          />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Image
            src={"icons/moon.svg"}
            width={14}
            height={14}
            alt="light mode logo"
            priority
            loading="eager"
          />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Image
            src={"/icons/computer.svg"}
            width={15}
            height={15}
            alt="light mode logo"
            priority
            loading="eager"
          />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeToggle;
