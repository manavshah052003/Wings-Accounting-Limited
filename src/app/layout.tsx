import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ACCA Affiliated — Expert Outsourcing for UK Accountancy Firms`,
  description:
    "Wings Accounting Limited — ACCA Affiliated firm providing expert accounting outsourcing solutions. VAT Returns, Bookkeeping, Year-End Accounts, Payroll and more for UK accountancy firms.",
  keywords: [
    "accounting outsourcing UK",
    "ACCA affiliated accounting",
    "bookkeeping outsourcing",
    "VAT returns UK",
    "year end accounts",
    "payroll outsourcing",
    "London accounting firm",
    "accountancy outsourcing",
  ],
  openGraph: {
    title: `${siteConfig.name} | Trusted ACCA Affiliated Outsourcing Partner`,
    description:
      "ACCA Affiliated firm providing expert outsourcing for UK accountancy practices. 20+ years of experience. Start your free trial today.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
