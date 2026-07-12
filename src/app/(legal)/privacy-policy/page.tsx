import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Privacy Policy | Chinmaya.Lab",
  description: "How Chinmaya.Lab collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-background to-background dark:from-slate-950/40 dark:via-background dark:to-background" />
      <div className="absolute right-1/4 bottom-10 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="container mx-auto max-w-4xl px-6">
       

        <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Last updated: July 12, 2026
        </p>

        <div className="prose prose-lg dark:prose-invert mt-12 space-y-10 text-muted-foreground">
          <p>
            At <strong>Chinmaya.Lab</strong>, your privacy is important to me. 
            This Privacy Policy explains how I collect, use, and protect your information.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect basic information such as your name, email address, and usage data 
            when you interact with the website or contact me.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            The information is used to respond to your inquiries, improve the website, 
            and share updates about projects and experiments at Chinmaya.Lab.
          </p>

          <h2>Data Protection</h2>
          <p>
            I take reasonable measures to protect your personal data. I do not sell or share 
            your personal information with third parties for marketing purposes.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, update, or request deletion of your personal data. 
            Feel free to contact me for any such requests.
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