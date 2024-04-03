import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog de Geoffrey Brunet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className={cn("sm:min-h-screen")}>
          <Header />
          <div className={cn("px-4 py-8 sm:px-8 sm:pb-24 sm:pt-12")}>
            <div className={cn("mx-auto max-w-xl")}>{children}</div>
          </div>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
