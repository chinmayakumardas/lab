import { FlaskConical, Sparkles, Rocket } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06b6d440,transparent_60%)]" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative z-10 max-w-3xl px-6 text-center">
        {/* Logo */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
          <FlaskConical className="h-10 w-10 text-cyan-400" />
        </div>

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
          <Sparkles className="h-4 w-4" />
          Ideas → Experiments → Products
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          LAB
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-white/90 md:text-5xl">
          Building Future Products
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-gray-400">
          A place where ideas are tested, prototypes are built,
          and innovative products are created.
          Experimenting with technology to discover what comes next.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:bg-cyan-400">
            <Rocket className="h-4 w-4" />
            Explore Projects
          </button>

          <button className="rounded-full border border-white/20 px-8 py-3 font-semibold transition hover:bg-white/10">
            Give Feedback
          </button>
        </div>

        {/* Footer */}
        <p className="mt-16 text-sm uppercase tracking-[0.3em] text-gray-500">
          Experiments • Products • Technology
        </p>
      </div>
    </main>
  );
}