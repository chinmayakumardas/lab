import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        <Link href="/" className="text-2xl font-bold">
          {siteConfig.name}
        </Link>

        <nav>
          <ul className="flex items-center gap-6">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium transition hover:text-blue-600"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}