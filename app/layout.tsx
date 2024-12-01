import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Ui/Header";
import Footer from "@/components/Ui/Footer";
import ThemeProviders from "@/components/Theme";

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
      <body className="flex flex-col min-h-screen font-maslss">
        <ThemeProviders>
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
