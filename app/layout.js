import {  IBM_Plex_Mono } from "next/font/google";
import AuroraBackground from "./components/AuroraBackground";
import "./globals.css";

// IBM Plex Mono is not a variable font — weights must be listed explicitly.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "300",
  style: ["normal"],
  variable: "--font-plex-mono",
});

export const metadata = {
  title: "Shorewood — Curated Coastal Journeys",
  description: "Curated coastal journeys designed to be felt, not rushed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plexMono.variable}>
      <body className={`bg-sand font-sans text-[#191919] antialiased ${plexMono.variable}`}>
        <AuroraBackground />
        {children}
      </body>
    </html>
  );
}
