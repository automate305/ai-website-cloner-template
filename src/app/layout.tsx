import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "My Trial Lawyer, PLLC | Miami Personal Injury Attorney",
    template: "%s | My Trial Lawyer, PLLC",
  },
  description:
    "My Trial Lawyer, PLLC — aggressive personal injury, property insurance litigation, and business law representation in Miami, Florida. Free consultations. (786) 855-1000.",
  keywords: [
    "Miami personal injury lawyer",
    "Florida trial lawyer",
    "property insurance litigation",
    "car accident attorney Miami",
    "My Trial Lawyer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
