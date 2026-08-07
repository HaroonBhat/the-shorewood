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
  title: "The Shorewood | Luxury Kashmir Tours & Travel Experiences",
  description:
    "Discover luxury Kashmir travel with The Shorewood. Explore customized tours, premium stays, houseboats, sightseeing, honeymoon packages, and unforgettable journeys across Srinagar, Gulmarg, Pahalgam, Sonamarg, and beyond.",
  keywords: [
    "The Shorewood",
    "Luxury Kashmir Tours",
    "Kashmir Travel",
    "Kashmir Tour Packages",
    "Luxury Travel Kashmir",
    "Srinagar Tours",
    "Gulmarg Tour",
    "Pahalgam Tour",
    "Sonamarg Tour",
    "Houseboat Kashmir",
    "Customized Kashmir Itinerary",
    "Private Kashmir Tours",
    "Honeymoon Packages Kashmir",
    "Kashmir Vacation",
    "Travel Agency Kashmir"
  ],
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