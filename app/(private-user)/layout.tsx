import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProviderRoot from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hero Movies",
  description: "Hero Movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProviderRoot>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ProviderRoot>
  );
}
