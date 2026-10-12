import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const themeInitializationScript = `
  try {
    const storedTheme = localStorage.getItem("femxo-theme");
    const isDark = storedTheme
      ? storedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  } catch {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  }
`;

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://femxo.com"),
  title: {
    default: "FEMXO ERP — India ka Naya Business ERP Platform",
    template: "%s | FEMXO ERP",
  },
  description:
    "FEMXO ERP — Multi-portal platform for dealers, sub-dealers, and customers. Manage inventory, commissions, orders, and settlements at scale.",
  keywords: [
    "ERP India",
    "dealer management",
    "commission management",
    "GST billing",
    "supply chain",
    "FEMXO",
  ],
  authors: [{ name: "Femxo Consultancy Services" }],
  creator: "FEMXO",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://femxo.com",
    siteName: "FEMXO ERP",
    title: "FEMXO ERP — India ka Naya Business ERP Platform",
    description:
      "Multi-portal ERP for dealers, sub-dealers, and customers. Scale from 0 to 1M+ users.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "FEMXO ERP Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FEMXO ERP — India ka Naya Business ERP Platform",
    description: "Multi-portal ERP for dealers, sub-dealers, and customers.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7C3AED" },
    { media: "(prefers-color-scheme: dark)", color: "#4C1D95" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${sora.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}