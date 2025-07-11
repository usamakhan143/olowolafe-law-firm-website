import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Olowolafe Law Firm | Federal Experience Meets Fierce Advocacy",
  description:
    "Premier legal representation in Nebraska and Iowa. Federal prosecutor turned defense attorney. Experienced in criminal defense, federal cases, and civil litigation.",
  keywords:
    "law firm, attorney, lawyer, Nebraska, Iowa, federal defense, criminal defense, legal representation",
  authors: [{ name: "Olowolafe Law Firm" }],
  robots: "index, follow",
  openGraph: {
    title: "Olowolafe Law Firm | Federal Experience Meets Fierce Advocacy",
    description:
      "Premier legal representation in Nebraska and Iowa. Federal prosecutor turned defense attorney.",
    type: "website",
    url: "https://olowolafelaw.com",
    siteName: "Olowolafe Law Firm",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olowolafe Law Firm | Federal Experience Meets Fierce Advocacy",
    description: "Premier legal representation in Nebraska and Iowa.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#102040" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
