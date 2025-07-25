import type { Metadata } from "next";
import "../styles/globals.css";
import PageLoader from "@/components/PageLoader";
import { LoadingProvider } from "@/contexts/LoadingContext";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdn.builder.io" />
        <link rel="dns-prefetch" href="https://cdn.builder.io" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2Fb4d2cdabc8fc4b03a9cd9b5df7ec042e?format=png&width=16" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2Fb4d2cdabc8fc4b03a9cd9b5df7ec042e?format=png&width=32" />
        <link rel="icon" type="image/png" sizes="48x48" href="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2Fb4d2cdabc8fc4b03a9cd9b5df7ec042e?format=png&width=48" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2Fb4d2cdabc8fc4b03a9cd9b5df7ec042e?format=png&width=180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#102040" />
      </head>
      <body className="antialiased">
        <LoadingProvider>
          <PageLoader />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
