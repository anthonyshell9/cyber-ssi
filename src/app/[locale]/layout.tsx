import type { Metadata } from "next";
import { Sora, Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimationInit from "@/components/ScrollAnimationInit";
import "../globals.css";

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    fr: "Cyber-SSI | Cybersécurité pour PME, administrations et institutions",
    en: "Cyber-SSI | Cybersecurity for SMBs, public administrations and institutions",
  };

  const descriptions = {
    fr: "Cyber-SSI accompagne les PME, administrations et institutions dans leur cybersécurité : conformité NIS2, RGPD, DORA, certifications ISO 27001, RSSI externalisé.",
    en: "Cyber-SSI supports SMBs, public administrations and institutions in their cybersecurity: NIS2, GDPR, DORA compliance, ISO 27001 certifications, outsourced CISO.",
  };

  return {
    title: titles[locale as Locale] || titles.fr,
    description: descriptions[locale as Locale] || descriptions.fr,
    keywords: ["cybersécurité", "cybersecurity", "PME", "SMB", "ISO 27001", "NIS2", "RGPD", "GDPR", "DORA", "RSSI", "CISO", "conformité", "compliance", "audit sécurité"],
    authors: [{ name: "Cyber-SSI" }],
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
      apple: "/favicon.svg",
    },
    openGraph: {
      title: locale === "en" ? "Cyber-SSI | Cybersecurity for SMBs" : "Cyber-SSI | Cybersécurité pour PME",
      description: locale === "en"
        ? "The cybersecurity company for SMBs, public administrations and institutions"
        : "L'entreprise de cybersécurité pour PME, administrations et institutions",
      url: "https://cyber-ssi.com",
      siteName: "Cyber-SSI",
      type: "website",
      locale: locale === "en" ? "en_US" : "fr_FR",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${sora.variable} ${montserrat.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ScrollAnimationInit />
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
