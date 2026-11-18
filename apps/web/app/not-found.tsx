
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FlaskConical } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6 py-12">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-5 flex size-11 items-center justify-center rounded-xl border bg-muted/40">
          <FlaskConical className="size-5 text-muted-foreground" />
        </div>

        <p className="mb-2 text-xs font-medium text-muted-foreground">
          ERROR 404
        </p>

        <h1 className="text-lg font-semibold tracking-tight">
          Page not found
        </h1>

        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
          This page doesn't exist or may have been moved. Let's get you back on
          track.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <Link
            href="/"
            className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ArrowLeft className="size-4" />
            Back to dashboard
          </Link>

          <Link
            href="/projects"
            className="inline-flex h-9 items-center gap-2 rounded-lg border px-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            Explore projects
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Welcome back to LAB. Stop thinking. Start building.
        </p>
      </div>
    </main>
  );
}
