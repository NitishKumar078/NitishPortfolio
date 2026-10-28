import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans, DM_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../globals.css";
import "../clay.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffeadf",
};

export const metadata: Metadata = {
  title: "Nitish Kumar M | Web Developer & Freelance Website Design",
  authors: [{ name: "Nitish Kumar M", url: "https://www.nishkumar.dev" }],
  description:
    "Independent software developer in Bengaluru. Explore custom websites, Chrome and Edge extensions, npm packages, and React and .NET applications by Nitish Kumar M.",
  alternates: { canonical: "https://www.nishkumar.dev" },
  openGraph: {
    title: "Nitish Kumar M | Ideas into interfaces",
    description:
      "Thoughtful websites and useful software. Explore my design work, browser tools, and open-source projects.",
    url: "https://www.nishkumar.dev",
    siteName: "Nitish Kumar M",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitish Kumar M | Ideas into interfaces",
    description: "Thoughtful websites and useful software, built in Bengaluru.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://www.nishkumar.dev"),
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmMono.variable} ${bricolage.variable}`}
    >
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

