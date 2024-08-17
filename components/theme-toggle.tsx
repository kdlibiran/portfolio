"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <Button variant="link"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      <Moon className="absolute h-24 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-100" />
      <Sun className="h-24 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-100" />
    </Button>
  )
}
