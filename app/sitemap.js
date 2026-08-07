// app/sitemap.js

export default function sitemap() {
  const baseUrl = "https://www.theshorewood.com";

  const routes = [
    "",
    "/about",
    "/tours",
    "/book-a-trip",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}