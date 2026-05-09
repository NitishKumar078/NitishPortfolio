import type { Metadata, Viewport } from "next";
import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
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
  themeColor: "#0b0b0f",
};

export const metadata: Metadata = {
  title: "Nitish Kumar M — Software Developer",
  description:
    "Nitish Kumar M — Software Developer from Bengaluru. Building npm packages, Chrome extensions, .NET and React applications.",
  openGraph: {
    title: "Nitish Kumar M — Software Developer",
    description:
      "Software Developer from Bengaluru building npm packages, Chrome extensions, .NET and React apps.",
    url: "https://www.nishkumar.dev",
    siteName: "Nitish Kumar M",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitish Kumar M — Software Developer",
    description:
      "Software Developer from Bengaluru building npm packages, Chrome extensions, .NET and React apps.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://www.nishkumar.dev"),
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
