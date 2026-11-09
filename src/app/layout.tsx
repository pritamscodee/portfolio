import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeSync } from "@/components/ThemeSync";
import { profile } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.tagline,
};

// Applies the saved theme before first paint so there's no flash.
// Also hides animated elements until GSAP takes over (with a safety timeout).
const themeScript = `(function(){var d=document.documentElement;if(!matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("gsap-pending");setTimeout(function(){d.classList.remove("gsap-pending")},3000)}})();try{var t=JSON.parse(localStorage.getItem("theme")||"{}").state?.theme;if(t==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-sans">
        <ThemeSync />
        {children}
      </body>
    </html>
  );
}
