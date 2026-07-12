

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-background to-background dark:from-slate-950/40 dark:via-background dark:to-background" />
      <div className="absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-0 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="container mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
       

        <h1 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
          Something exciting is{" "}
          <span className="rounded bg-[linear-gradient(90deg,_rgba(59,130,246,0.22)_0%,_rgba(59,130,246,0.05)_100%)] px-2">
            coming soon
          </span>
          .
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          We're putting the finishing touches on this experience. It'll be
          available soon.
        </p>

        <div className="mt-12">
          <Link href="/">
            <Button className="group relative h-11 w-fit overflow-hidden rounded-full p-1 ps-5 pe-12 text-sm font-medium transition-all duration-500 hover:bg-primary/90 hover:ps-12 hover:pe-5">
              <span className="relative z-10">Back to Home</span>

              <div className="absolute right-1 flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-40px)] group-hover:-rotate-45">
                <ArrowLeft className="h-4 w-4" />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}