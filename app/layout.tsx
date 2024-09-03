import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Ui/Header";
import Footer from "@/components/Ui/Footer";
import ThemeProviders from "@/components/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProviders>
          <Header />
          <div className="flex-grow duration-200">{children}</div>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
