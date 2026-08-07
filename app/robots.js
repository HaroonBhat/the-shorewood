export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/_next/",
          "/private/",
        ],
      },
    ],
    sitemap: "https://www.theshorewood.com/sitemap.xml",
    host: "https://www.theshorewood.com",
  };
}