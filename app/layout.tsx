import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DATA } from "./data";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: DATA.initials,
  description: "Web Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="no-scrollbar">
          {children}
          </div>
        </ThemeProvider></body>
    </html>
  );
}
