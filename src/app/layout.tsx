import type { Metadata } from "next";
import { Sora, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cyber-SSI | Cybersécurité pour PME, administrations et institutions",
  description: "Cyber-SSI accompagne les PME, administrations et institutions dans leur cybersécurité : conformité NIS2, RGPD, DORA, certifications ISO 27001, RSSI externalisé.",
  keywords: ["cybersécurité", "PME", "ISO 27001", "NIS2", "RGPD", "DORA", "RSSI", "conformité", "audit sécurité"],
  authors: [{ name: "Cyber-SSI" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Cyber-SSI | Cybersécurité pour PME",
    description: "L'entreprise de cybersécurité pour PME, administrations et institutions",
    url: "https://cyber-ssi.com",
    siteName: "Cyber-SSI",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${sora.variable} ${montserrat.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
