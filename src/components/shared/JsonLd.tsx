import { siteConfig } from "@/config/site";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: siteConfig.author.name,

    url: siteConfig.url,

    jobTitle: "Full Stack Developer",

    description: siteConfig.description,

    email: siteConfig.author.email,

    sameAs: siteConfig.social.map(
      (social) => social.url
    ),

    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Software Development"
    ],
  };


  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: siteConfig.name,

    url: siteConfig.url,

    description: siteConfig.description,

    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  };


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}