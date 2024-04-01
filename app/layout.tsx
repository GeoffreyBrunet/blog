import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

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
        <div className="sm:min-h-screen">
          <Header />
          <div className="px-4 py-8 sm:px-8 sm:pb-24 sm:pt-12">
            <div className="mx-auto max-w-xl">{children}</div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
