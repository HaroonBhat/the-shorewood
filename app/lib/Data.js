// Central content file — edit copy/images here, components stay untouched.

const U = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const experiences = [
  {
    title: "Luxury Shikara Ride",
    text: "Cruise through the peaceful waters of Dal Lake aboard a traditional Shikara while enjoying breathtaking Himalayan views and authentic Kashmiri hospitality.",
    img: "/images/gulmarg.jpg",
    href: "/experiences/shikara-ride",
  },
  {
    title: "Gulmarg Gondola",
    text: "Experience one of the world's highest cable cars with panoramic mountain views, snow adventures, and unforgettable alpine scenery.",
    img: "/images/gulmarg.jpg",
    href: "/experiences/gulmarg-gondola",
  },
  {
    title: "Luxury Houseboat Stay",
    text: "Spend your evenings in beautifully crafted houseboats featuring elegant interiors, traditional charm, and spectacular sunrise views over Dal Lake.",
    img: "/images/gulmarg.jpg",
    href: "/experiences/houseboat-stay",
  },
  {
    title: "Pahalgam Valley Escape",
    text: "Explore lush valleys, crystal-clear rivers, pine forests, scenic meadows, and charming villages surrounded by Kashmir's natural beauty.",
    img: "/images/gulmarg.jpg",
    href: "/experiences/pahalgam",
  },
];

export const destinations = [
  {
    name: "Amalfi",
    tag: "Cliffside villages & lemon groves",
    img: U("1533106418989-88406c7cc8ca", 1600),
  },
  {
    name: "Santorini",
    tag: "White terraces above a blue caldera",
    img: U("1570077188670-e3a8d69ac5ff", 1600),
  },
  {
    name: "Maldives",
    tag: "Overwater stays & glass-clear lagoons",
    img: U("1514282401047-d79a71a590e8", 1600),
  },
  {
    name: "Big Sur",
    tag: "Pacific cliffs and redwood mornings",
    img: U("1449034446853-66c86144b0ad", 1600),
  },
];

export const packages = [
  {
    title: "Morocco Desert Journey",
    duration: "8 Days / 7 Nights",
    price: "$1,600",
    img: U("1489749798305-4fea3ae63d43", 1000),
    href: "/tours/morocco-cultural-desert-journey",
  },
  {
    title: "Italy Classic",
    duration: "7 Days / 6 Nights",
    price: "$1,400",
    img: U("1523906834658-6e24ef2386f9", 1000),
    href: "/tours/italy-classic-discovery",
  },
  {
    title: "Africa Experience",
    duration: "8 Days / 7 Nights",
    price: "$2,200",
    img: U("1516426122078-c23e76319801", 1000),
    href: "/tours/africa-safari-experience",
  },
  {
    title: "Japan Spring",
    duration: "7 Days / 6 Nights",
    price: "$1,200",
    img: U("1522383225653-ed111181a951", 1000),
    href: "/tours/japan-spring-highlights",
  },
];

export const features = [
  {
    title: "Authentic Experiences",
    img:"/images/dallake.jpg",
    text: "Trips tailored to your style and your budget.",
    icon: "compass",
  },
  {
    title: "Culinary Adventures",
    img:"/images/gulmarg.jpg",
    text: "Savour local cuisines with guided food tours.",
    icon: "utensils",
  },
  {
    title: "Trusted Partnerships",
    img:"/images/gulmarg.jpg",
    text: "Handpicked hotels, guides and local experiences.",
    icon: "shield",
  },
  {
    title: "Cultural Immersion",
    img:"/images/gulmarg.jpg",
    text: "Engage with local traditions and communities.",
    icon: "globe",
  },
];

export const testimonials = [
  {
    quote:
      "Travelling with Shorewood completely changed how I see group travel. Everything was thoughtfully planned, and nothing ever felt rushed.",
    name: "Emily Carter",
    role: "Solo Traveller",
    img: U("1494790108377-be9c29b29330", 400),
  },
  {
    quote:
      "The coastal route through Amalfi was the highlight of our year. Small group, brilliant guides, and stays we'd never have found alone.",
    name: "Daniel Okafor",
    role: "Photographer",
    img: U("1500648767791-00dcc994a43e", 400),
  },
  {
    quote:
      "From the first call to the last sunset, everything was handled. I just showed up and let the itinerary do the rest.",
    name: "Mira Shah",
    role: "Repeat Traveller",
    img: U("1534528741775-53994a69daeb", 400),
  },
];

export const posts = [
  {
    title: "Discovering Island Life Beyond Luxury",
    date: "25 Feb 2026",
    img: U("1439066615861-d1af74d74000", 1000),
    href: "/blogs/discovering-island-life-beyond-luxury",
  },
  {
    title: "Experiencing Europe Beyond Tourist Routes",
    date: "10 Mar 2026",
    img: U("1493246507139-91e8fad9978e", 1000),
    href: "/blogs/experiencing-europe-beyond-tourist-routes",
  },
  {
    title: "Slow Mornings on the Northern Coast",
    date: "02 Apr 2026",
    img: U("1476514525535-07fb3b4ae5f1", 1000),
    href: "/blogs/slow-mornings-northern-coast",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tours", href: "/tours" },
  { label: "Destinations", href: "/destinations" },
  { label: "Contact", href: "/contact" },
];
