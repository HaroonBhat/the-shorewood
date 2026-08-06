import { Smooch_Sans } from "next/font/google";
import "./globals.css";
import AuroraBackground from "./components/AuroraBackground";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

const smooch = Smooch_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {

  title: "The Shorewood",
  description: "Luxury Kashmir Travel",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${smooch.className} bg-sand text-[#191919] antialiased`}>
        <AuroraBackground />
        <Navbar />
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VN5K74QKT5"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-VN5K74QKT5');
    `}
        </Script>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>

    </html>
  );
}