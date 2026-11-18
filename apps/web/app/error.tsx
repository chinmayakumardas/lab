
"use client";

import { useEffect } from "react";
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6 py-12">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-5 flex size-11 items-center justify-center rounded-xl border bg-destructive/5">
          <AlertTriangle className="size-5 text-destructive" />
        </div>

        <p className="mb-2 text-xs font-medium text-muted-foreground">
          APPLICATION ERROR
        </p>

        <h1 className="text-lg font-semibold tracking-tight">
          Something went wrong
        </h1>

        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
          An unexpected error interrupted this process. Try again to continue
          working in your workspace.
        </p>

        {error.digest && (
          <p className="mt-3 font-mono text-xs text-muted-foreground">
            Error ID: {error.digest}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => reset()}
            className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <RefreshCw className="size-3.5" />
            Try again
          </button>

          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="inline-flex h-9 items-center gap-2 rounded-lg border px-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <ArrowLeft className="size-3.5" />
            Back to dashboard
          </button>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Welcome back to LAB. Stop thinking. Start building.
        </p>
      </div>
    </main>
  );
}
