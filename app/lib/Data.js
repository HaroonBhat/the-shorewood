// Central content file — edit copy/images here, components stay untouched.

const U = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const experiences = [
  {
    title: "Luxury Shikara Ride",
    text: "Cruise through the peaceful waters of Dal Lake aboard a traditional Shikara while enjoying breathtaking Himalayan views and authentic Kashmiri hospitality.",
    img: "/images/experiences/dallake.jpg",
    href: "/images/experiences/dallake.jpg",
  },
  {
    title: "Gulmarg Gondola",
    text: "Experience one of the world's highest cable cars with panoramic mountain views, snow adventures, and unforgettable alpine scenery.",
    img: "/images/experiences/Gondola.jpg",
    href: "/images/experiences/Gondola.jpg",
  },
  {
    title: "Luxury Houseboat Stay",
    text: "Spend your evenings in beautifully crafted houseboats featuring elegant interiors, traditional charm, and spectacular sunrise views over Dal Lake.",
    img: "/images/experiences/Houseboat.jpg",
    href: "/images/experiences/Houseboat.jpg",
  },
  {
    title: "Tarsar Marsar Escape",
    text: "Explore lush valleys, crystal-clear rivers, pine forests, scenic meadows, and charming villages surrounded by Kashmir's natural beauty.",
    img: "/images/experiences/Tarsar.jpg",
    href: "/images/experiences/Tarsar.jpg",
  },
];

export const destinations = [
  {
    name: "Srinagar",
    tag: "The Heart of Kashmir",
    description:
      "Discover the timeless beauty of Dal Lake, Mughal Gardens, vibrant local markets, and luxurious houseboat stays while experiencing the rich culture of Kashmir's summer capital.",
    img: "/images/destinations/srinagar.jpg",
  },

  {
    name: "Gulmarg",
    tag: "Adventure & Snow Paradise",
    description:
      "Experience the famous Gulmarg Gondola, breathtaking snow-covered mountains, world-class skiing, scenic meadows, and unforgettable Himalayan adventures throughout the year.",
    img: "/images/gulmarg.jpg",
  },

  {
    name: "Pahalgam",
    tag: "Valley of Shepherds",
    description:
      "Escape into lush pine forests, peaceful rivers, green valleys, and charming villages, making Pahalgam one of Kashmir's most relaxing and picturesque destinations.",
    img: "/images/destinations/Pahalgam.jpg",
  },

  {
    name: "Sonamarg",
    tag: "The Meadow of Gold",
    description:
      "Witness majestic glaciers, alpine lakes, snow-capped peaks, and thrilling trekking routes surrounded by some of the most spectacular landscapes in Kashmir.",
    img: "/images/destinations/Sonamarg.jpg",
  },

  {
    name: "Doodhpathri",
    tag: "Hidden Natural Paradise",
    description:
      "Enjoy rolling green meadows, crystal-clear streams, peaceful landscapes, and untouched natural beauty away from the crowds.",
    img: "/images/destinations/Doodhpathri.jpg",
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
    icon: "compass",
    title: "Expert Local Guides",
    text: "Discover Kashmir through experienced local guides who know every hidden valley, scenic viewpoint, and cultural treasure.",
    img: "/images/why-us/f4.jpg",
  },
  {
    icon: "utensils",
    title: "Luxury Stays ",
    text: "Enjoy handpicked luxury hotels, boutique resorts, and authentic houseboats offering exceptional comfort and breathtaking views.",
    img: "/images/why-us/f1.jpg",
  },
  {
    icon: "shield",
    title: "Safe & Hassle-Free Travel",
    text: "From airport pickup to guided tours and transportation, we handle every detail so you can simply relax and enjoy your journey.",
    img: "/images/why-us/f2.jpg",
  },
  {
    icon: "globe",
    title: "Personalized Experiences",
    text: "Every itinerary is tailored to your interests, whether you're seeking adventure, romance, family vacations, or peaceful escapes.",
    img: "/images/why-us/f3.jpg",
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
  { label: "Experience", href: "/experiences" },
  { label: "Destinations", href: "/destinations" },
  { label: "Contact", href: "/contact" },
];

export const milestones = [
  { value: "100+", label: "Custom Itineraries Planned" },
  { value: "15+", label: "Kashmir Destinations" },
  { value: "20+", label: "Trusted Local Partners" },
  { value: "24/7", label: "Travel Assistance" },
  { value: "100%", label: "Personalized Experiences" },
  { value: "Local", label: "Expert Guides" },
];

export const team = [
  {
    name: "Founder",
    role: "Travel Curator",
    img: "/images/team/founder.jpg",
  },
  {
    name: "Local Experience Expert",
    role: "Destination Specialist",
    img: "/images/team/expert.jpg",
  },
  {
    name: "Tour Coordinator",
    role: "Guest Relations",
    img: "/images/team/coordinator.jpg",
  },
  {
    name: "Adventure Guide",
    role: "Outdoor Experiences",
    img: "/images/team/guide.jpg",
  },
];

// export const team = [
//   { name: "James Carter", role: "Operations Manager", img: U("1500648767791-00dcc994a43e", 800) },
//   { name: "Sophia Bennett", role: "Travel Expert", img: U("1494790108377-be9c29b29330", 800) },
//   { name: "Willy Johnson", role: "Trip Lead", img: U("1507003211169-0a1dd7228f2d", 800) },
//   { name: "Olivia Scott", role: "Experience Designer", img: U("1534528741775-53994a69daeb", 800) },
// ];

export const contactDetails = {
  phone: "+91 9596311857",
  email: "support@theshorewood.com",
  address: "Srinagar, Jammu & Kashmir, India",
  hours: "Mon – Sun, 24/7",
};

export const faqs = [
  {
    q: "What destinations do you cover?",
    a: "We offer curated experiences across Srinagar, Gulmarg, Pahalgam, Sonamarg, Doodhpathri, Yusmarg, Gurez Valley, Bangus Valley, and other breathtaking locations across Kashmir.",
  },
  {
    q: "Can I customize my itinerary?",
    a: "Absolutely. Every journey is tailored to your interests, travel dates, budget, and preferred experiences, ensuring a personalized Kashmir adventure.",
  },
  {
    q: "Do you arrange hotels and transportation?",
    a: "Yes. We handle premium hotels, luxury stays, houseboats, airport transfers, private cabs, sightseeing, and complete travel logistics.",
  },
  {
    q: "Do you offer honeymoon and family packages?",
    a: "Yes. We specialize in honeymoon escapes, family vacations, adventure tours, luxury holidays, corporate trips, and customized group tours.",
  },
  {
    q: "How can I book a tour?",
    a: "Simply contact us through our website, WhatsApp, or phone. Our travel experts will discuss your requirements and prepare a personalized itinerary with transparent pricing.",
  },
  {
    q: "Will I have support during my trip?",
    a: "Yes. Our local team is available throughout your journey to assist with itinerary changes, transportation, accommodation, and any travel-related assistance you may need.",
  },
];

export const seasons = [
  {
    id: "spring",
    name: "Spring",
    months: "March – May",
    temp: "8 – 20°C",
    tagline: "Blossoms, gardens & fresh mountain air",

    // Kashmir spring / tulip garden
    img: "/images/seasons/s2.jpg",
    thumb: "/images/seasons/s2.jpg",

    accent: "#7FA650",

    blurb:
      "Spring brings Kashmir back to life. Almond and cherry blossoms appear across Srinagar, the Mughal gardens bloom beneath the Zabarwan mountains, and the valley fills with fresh colour. It is a beautiful time for slow mornings, garden walks and discovering Kashmir at a gentler pace.",

    highlights: [
      "Walk through Srinagar's famous Mughal gardens",
      "Experience the tulip season beneath the Zabarwan hills",
      "See almond and cherry blossoms around Srinagar",
      "Enjoy quieter roads and fewer peak-season crowds",
    ],

    bestFor: ["Couples", "Photography", "Slow escapes"],
    note: "Pack layers — mornings and evenings can still feel cool.",
  },

  {
    id: "summer",
    name: "Summer",
    months: "June – August",
    temp: "15 – 30°C",
    tagline: "Green valleys & long mountain days",

    // Green Pahalgam / Kashmir valley
    img: "/images/seasons/sa3.jpg",
    thumb: "/images/seasons/sa2.jpg",

    accent: "#2E8C8C",

    blurb:
      "Summer is Kashmir at its greenest. Dal Lake comes alive with shikaras, Gulmarg and Pahalgam open into wide alpine landscapes, and the higher mountain trails become accessible. For travellers who want to explore, this is a season made for long days outdoors.",

    highlights: [
      "Stay beside Dal Lake and experience a private shikara ride",
      "Explore the green meadows of Gulmarg and Pahalgam",
      "Discover mountain trails and alpine landscapes",
      "Enjoy comfortable days for sightseeing and outdoor experiences",
    ],

    bestFor: ["Families", "Exploration", "Mountain experiences"],
    note: "Summer is popular — reserve preferred stays and experiences early.",
  },

  {
    id: "autumn",
    name: "Autumn",
    months: "September – November",
    temp: "5 – 22°C",
    tagline: "Golden chinars & harvest season",

    // Autumn chinar trees in Kashmir
    img: "/images/seasons/a2.jpg",
    thumb:"/images/seasons/a3.jpg",

    accent: "#C8792F",

    blurb:
      "Autumn is one of Kashmir's most atmospheric seasons. Chinar trees turn shades of amber and gold, orchards fill with apples and walnuts, and the mountains stand beneath exceptionally clear skies. It is a season for travellers who prefer beautiful landscapes, quiet roads and a slower rhythm.",

    highlights: [
      "See the golden chinars around Srinagar",
      "Experience saffron country around Pampore",
      "Visit apple and walnut orchards during harvest",
      "Enjoy crisp air and clear mountain views",
    ],

    bestFor: ["Couples", "Photography", "Luxury escapes"],
    note: "Autumn is brief — plan ahead if you want to catch the chinar colours.",
  },

  {
    id: "winter",
    name: "Winter",
    months: "December – February",
    temp: "-6 – 10°C",
    tagline: "Snow, mountains & quiet escapes",

    // Gulmarg snow / winter Kashmir
    img: "/images/seasons/w1.jpg",
    thumb:"/images/seasons/w2.jpg",

    accent: "#5B7C99",

    blurb:
      "Winter transforms Kashmir into a quieter world of snow-covered mountains, frozen mornings and warm Kashmiri hospitality. Gulmarg becomes a destination for skiing and snow experiences, while Srinagar takes on a beautifully intimate character of its own.",

    highlights: [
      "Experience skiing and snow in Gulmarg",
      "Ride the Gulmarg Gondola into the high mountains",
      "Wake up to snow-covered Srinagar and mountain views",
      "Warm up with kahwa and authentic Kashmiri cuisine",
    ],

    bestFor: ["Snow lovers", "Couples", "Private escapes"],
    note: "Heavy snowfall can affect mountain roads, so flexible plans are recommended.",
  },
];


export const places = [
  {
    name: "Srinagar",
    text: "Dal Lake, Mughal gardens, old-city charm and the perfect beginning to a Kashmir journey.",

    // Dal Lake / Srinagar
    img: "/images/destinations/srinagar.jpg",

    seasons: "All year",
  },

  {
    name: "Gulmarg",
    text: "Alpine meadows, mountain views and unforgettable snow experiences in winter.",

    // Gulmarg meadow / mountains
    img: "/images/experiences/Gondola.jpg",

    seasons: "Winter & summer",
  },

  {
    name: "Pahalgam",
    text: "Pine forests, the Lidder River and peaceful mountain landscapes made for slow days.",

    // Pahalgam valley / Lidder River
    img:"/images/destinations/Pahalgam.jpg",

    seasons: "Spring – autumn",
  },

  {
    name: "Sonamarg",
    text: "Dramatic mountain scenery, alpine valleys and the gateway towards the high Himalayas.",

    // Sonamarg mountains
    img:"/images/destinations/Sonamarg.jpg",
    seasons: "Summer & autumn",
  },
];

export const experienceList = [
  {
    id: "dal-lake",
    name: "Dal Lake",
    text: "A private morning on the water, with quiet channels, mountain views and the valley waking around you.",
    img: "/images/experiences/dallake.jpg",
    icon: "boat",
    duration: "3 – 4 hours",
    best: "Spring – autumn",
    detail:
      "Begin your day on Dal Lake as Srinagar slowly comes to life. Settle into a private shikara, take in the reflections of the surrounding mountains and explore the quieter corners of the lake at an unhurried pace.",
    includes: [
      "Private shikara experience",
      "Local boatman",
      "Early-morning departure",
      "Kahwa on the water",
    ],
  },

  {
    id: "kashmiri-hospitality",
    name: "Kashmiri Hospitality",
    text: "Warm hospitality, traditional kahwa and the quiet rituals that make a journey feel personal.",
    img: "/images/expPage/hosp.jpg",
    icon: "cup",
    duration: "An evening",
    best: "All year",
    detail:
      "Experience the warmth of Kashmiri hospitality through an evening shaped around good food, traditional kahwa and conversation. Discover the customs, stories and everyday traditions that give Kashmir its character.",
    includes: [
      "Traditional Kashmiri kahwa",
      "Locally prepared dishes",
      "Introduction to Kashmiri traditions",
      "An intimate, unhurried evening",
    ],
  },

  {
    id: "mountain-escapes",
    name: "Mountain Escapes",
    text: "Trade the city for pine forests, alpine meadows and the quiet of the Kashmir mountains.",
    img: "/images/seasons/w1.jpg",
    icon: "mountain",
    duration: "Full day",
    best: "Summer & autumn",
    detail:
      "Travel beyond Srinagar into the mountain landscapes of Pahalgam, Sonamarg and the surrounding valleys. Choose a gentle walk, a scenic drive or simply spend the day surrounded by nature, with the journey shaped around your pace.",
    includes: [
      "Private vehicle and driver",
      "Scenic mountain routes",
      "Walks suited to your pace",
      "Time to explore and unwind",
    ],
  },

  {
    id: "kashmiri-cuisine",
    name: "Kashmiri Cuisine",
    text: "Discover the flavours of Kashmir, from traditional breads and kahwa to saffron and Wazwan.",
    img: "/images/expPage/cuisine.jpg",
    icon: "utensils",
    duration: "Half day",
    best: "All year",
    detail:
      "Food is one of the most intimate ways to experience Kashmir. Explore local flavours, discover traditional breads and spices, learn about saffron and experience the rich culinary traditions behind Kashmiri cuisine.",
    includes: [
      "Traditional Kashmiri breakfast experience",
      "Local markets and food culture",
      "Kashmiri cuisine tasting",
      "Kahwa and traditional flavours",
    ],
  },

  {
    id: "culture-heritage",
    name: "Culture & Heritage",
    text: "Discover Srinagar's old city, Mughal gardens, traditional crafts and the stories behind them.",
    img: "/images/expPage/her.jpg",
    icon: "arch",
    duration: "Full day",
    best: "Spring – autumn",
    detail:
      "Go beyond the usual sights and discover the cultural layers of Srinagar. Walk through the old city, visit historic gardens and discover the craftsmanship that Kashmir has carried through generations.",
    includes: [
      "Old-city Srinagar exploration",
      "Mughal gardens",
      "Traditional Kashmiri crafts",
      "Local history and cultural stories",
    ],
  },

  {
    id: "gulmarg-winter",
    name: "Winter in Gulmarg",
    text: "Step into a snow-covered mountain world surrounded by forests, peaks and unforgettable winter landscapes.",
    img: U("1548777123-e216912df7d8", 1400),
    icon: "snow",
    duration: "1 – 3 days",
    best: "December – February",
    detail:
      "When winter arrives, Gulmarg becomes one of Kashmir's most spectacular mountain escapes. Ride the Gondola, experience the snow-covered meadows and spend your days surrounded by the dramatic landscapes of the Himalayas.",
    includes: [
      "Gulmarg Gondola experience",
      "Snow and mountain activities",
      "Private transport from Srinagar",
      "Winter accommodation options",
    ],
  },
];