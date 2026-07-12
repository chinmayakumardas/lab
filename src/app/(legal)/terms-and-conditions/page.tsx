import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Terms & Conditions | Chinmaya.Lab",
  description: "Terms and Conditions for using Chinmaya.Lab",
};

export default function TermsAndConditions() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-background to-background dark:from-slate-950/40 dark:via-background dark:to-background" />
      <div className="absolute left-1/3 top-32 -z-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="container mx-auto max-w-4xl px-6">
        

        <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Last updated: July 12, 2026
        </p>

        <div className="prose prose-lg dark:prose-invert mt-12 space-y-10 text-muted-foreground">
          <p>
            Welcome to <strong>Chinmaya.Lab</strong>. By accessing or using this website, 
            you agree to comply with these Terms and Conditions.
          </p>

          <h2>1. Use of Website</h2>
          <p>
            You may use Chinmaya.Lab for personal learning and inspiration. 
            You agree not to misuse the content or attempt to replicate projects without permission.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            All content, code, designs, and projects on Chinmaya.Lab are the intellectual 
            property of Chinmaya Kumar Das unless otherwise stated.
          </p>

          <h2>3. Limitation of Liability</h2>
          <p>
            The website is provided "as is". I am not liable for any damages arising from 
            the use of this website or its content.
          </p>

          <h2>4. Contact</h2>
          <p>
            If you have any questions regarding these terms, please feel free to contact me.
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