

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Cookies Policy | Chinmaya.Lab",
  description: "Learn how Chinmaya.Lab uses cookies to improve your experience.",
};

export default function CookiesPolicy() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-background to-background dark:from-slate-950/40 dark:via-background dark:to-background" />
      <div className="absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="container mx-auto max-w-4xl px-6">
       

        <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight">
          Cookies Policy
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Last updated: July 12, 2026
        </p>

        <div className="prose prose-lg dark:prose-invert mt-12 space-y-10 text-muted-foreground">
          <p>
            At <strong>Chinmaya.Lab</strong>, we use cookies and similar technologies to provide 
            the best experience on our website.
          </p>

          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a website. 
            They help us remember your preferences and improve site functionality.
          </p>

          <h2>Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use Chinmaya.Lab.</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and choices.</li>
          </ul>

          <h2>Managing Your Cookies</h2>
          <p>
            You can manage or disable cookies through your browser settings at any time. 
            However, disabling essential cookies may affect the functionality of the site.
          </p>

          <h2>Questions?</h2>
          <p>
            If you have any questions about our Cookies Policy, feel free to reach out via the 
            contact page.
          </p>
        </div>

        <div className="mt-16">
          <Link href="/">
            <Button className="group relative h-12 w-fit overflow-hidden rounded-full p-1 ps-6 pe-14 text-base font-medium transition-all duration-500 hover:bg-primary/90 hover:ps-14 hover:pe-6">
              <span className="relative z-10">Return to Homepage</span>
              <div className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:-rotate-45">
                <ArrowLeft className="h-4 w-4" />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}