


import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function AboutMe() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-background to-background dark:from-slate-950/40 dark:via-background dark:to-background" />
      <div className="absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-0 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          {/* Profile */}
          <Avatar className="h-36 w-36 border-4 border-background shadow-xl">
            <AvatarImage src="/images/profile.png" />
            <AvatarFallback>CL</AvatarFallback>
          </Avatar>

          {/* Content */}
          <div className="flex-1">
            <p className="text-sm font-medium uppercase tracking-[2px] text-primary">
              About Me
            </p>

            <h2 className="mt-4 text-xl font-medium leading-tight sm:text-2xl md:text-3xl lg:text-[34px]">
              Hey there. I'm <span className="font-semibold">Chinmaya</span> — a
              full-stack developer who enjoys{" "}
              <span className="rounded bg-[linear-gradient(90deg,_rgba(59,130,246,0.22)_0%,_rgba(59,130,246,0.05)_100%)] px-1">
                turning ideas into real products
              </span>{" "}
              through <span className="border-b-2 border-primary">Chinmaya.Lab</span>,
              my personal space for building, experimenting, and learning.
            </h2>

            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Every project in this lab starts with curiosity. I use it to
              explore modern technologies, create meaningful software, and share
              the journey of continuous learning and improvement.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <p className="mb-5 text-sm text-muted-foreground">
                Want to know more about my work and experience?
              </p>

             <Link
  href="https://chinmayakumardas.com/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    className="group relative h-11 w-fit overflow-hidden rounded-full p-1 ps-5 pe-12 text-sm font-medium transition-all duration-500 hover:bg-primary/90 hover:ps-12 hover:pe-5"
  >
    <span className="relative z-10">Visit My Portfolio</span>

    <div className="absolute right-1 flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-40px)] group-hover:rotate-45">
      <ArrowUpRight className="h-4 w-4" />
    </div>
  </Button>
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}