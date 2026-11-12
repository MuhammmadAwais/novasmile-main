import type { Metadata } from "next";
import { EB_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { InteractiveBubbleCursor } from "@/components/ui/interactive-cursor";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { practiceData } from "@/content/practice-data";

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mr. Dentist — Family, Cosmetic & Implant Dentistry in San Antonio, TX",
  description:
    "Veteran-led family, cosmetic, and restorative dental care by Dr. Medhat G. Bader, DMD at 6338 Old Pearsall Rd, Suite 105, San Antonio, TX. Same-day cleanings, walk-ins, and anxiety-free care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const brandTheme =
    (process.env.NEXT_PUBLIC_BRAND_THEME as "blue-gold" | "original") ||
    practiceData.brandTheme ||
    "blue-gold";

  return (
    <html
      lang="en"
      data-brand-theme={brandTheme}
      suppressHydrationWarning
      className={`${ebGaramond.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-surface text-on-surface font-sans selection:bg-secondary-container selection:text-on-secondary-container"
      >
        <SmoothScroll />
        <InteractiveBubbleCursor />
        {children}
      </body>
    </html>
  );
}
