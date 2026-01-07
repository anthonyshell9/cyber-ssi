import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyber-SSI | Cybersécurité pour PME, administrations et institutions",
  description: "Cyber-SSI accompagne les PME, administrations et institutions dans leur cybersécurité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
