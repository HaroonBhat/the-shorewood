import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Destinations from "./components/Destinations";
import Packages from "./components/Destinations";
import WhyUs from "./components/Whyus";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export const metadata = {
  title: "Shorewood — Curated Coastal Journeys",
  description:
    "Curated coastal journeys designed to be felt, not rushed. Handpicked stays, local guides and slow mornings by the water.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Destinations />
        <Packages />
        <WhyUs />
        <Testimonials />
        <Blogs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
