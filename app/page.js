import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Packages from "./components/Destinations";
import WhyUs from "./components/Whyus";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import CTA from "./components/CTA";


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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experiences />
        
        <Packages />
        <WhyUs />
        {/* <Testimonials /> */}
        {/* <Blogs /> */}
        {/* <CTA /> */}
      </main>
    </>
  );
}
