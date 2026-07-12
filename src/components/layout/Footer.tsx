import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-gray-600 md:flex-row">

        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {siteConfig.social.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
            </Link>
          ))}
        </div>

      </div>
    </footer>
  );
}