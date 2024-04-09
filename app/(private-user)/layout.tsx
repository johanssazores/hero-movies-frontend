import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/components/ReduxProvider";
import SessionProvider from "@/app/SessionProvider";
import Layout from "@/components/Layout";
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
    <SessionProvider>
      <ReduxProvider>
        <html lang="en">
          <body className={inter.className}>
            <Layout>{children}</Layout>
          </body>
        </html>
      </ReduxProvider>
    </SessionProvider>
  );
}
