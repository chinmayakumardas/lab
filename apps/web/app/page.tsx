
"use client";

import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  ArrowUpRightFromSquare,
  Check,
  ChevronDown,
  CircleAlert,
  Clock3,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Plus,
  Rocket,
  Server,
  Settings2,
  Zap,
} from "lucide-react";

const stats = [
  {
    label: "Total projects",
    value: "24",
    change: "+12.5%",
    detail: "Compared to last month",
    icon: Layers3,
    positive: true,
  },
  {
    label: "Active deployments",
    value: "18",
    change: "+4",
    detail: "Compared to last week",
    icon: Rocket,
    positive: true,
  },
  {
    label: "API requests",
    value: "2.4M",
    change: "+18.2%",
    detail: "Compared to last month",
    icon: Activity,
    positive: true,
  },
  {
    label: "Build success rate",
    value: "98.6%",
    change: "+2.4%",
    detail: "Compared to last month",
    icon: Zap,
    positive: true,
  },
];

const deployments = [
  {
    name: "Dashboard Application",
    branch: "main",
    environment: "Production",
    status: "Success",
    commit: "feat: update dashboard UI",
    time: "2 min ago",
  },
  {
    name: "API Gateway",
    branch: "develop",
    environment: "Preview",
    status: "Building",
    commit: "fix: improve response handling",
    time: "8 min ago",
  },
  {
    name: "Documentation",
    branch: "main",
    environment: "Production",
    status: "Success",
    commit: "docs: update API reference",
    time: "24 min ago",
  },
  {
    name: "Authentication Service",
    branch: "main",
    environment: "Production",
    status: "Failed",
    commit: "chore: update dependencies",
    time: "41 min ago",
  },
];

const services = [
  { name: "API Service", detail: "99.99% uptime", icon: Server },
  { name: "Database", detail: "Operational", icon: Database },
  { name: "Build Queue", detail: "All systems normal", icon: GitBranch },
  { name: "Storage", detail: "Operational", icon: Layers3 },
];

const activity = [
  {
    title: "Deployment completed",
    description: "Dashboard Application deployed to production.",
    time: "2 minutes ago",
    icon: Rocket,
  },
  {
    title: "New project created",
    description: "You created a project named API Gateway.",
    time: "1 hour ago",
    icon: Plus,
  },
  {
    title: "API key generated",
    description: "A new API key was generated for your workspace.",
    time: "3 hours ago",
    icon: Code2,
  },
  {
    title: "Build failed",
    description: "Authentication Service encountered a build error.",
    time: "5 hours ago",
    icon: CircleAlert,
  },
];

const usage = [34, 48, 40, 62, 52, 74, 58, 82, 68, 91, 76, 64, 86, 72, 96, 78, 65, 88, 72, 94, 80, 68, 84, 100];

function SectionHeading({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <div>
        <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Success: "bg-emerald-500/10 text-emerald-600",
    Building: "bg-blue-500/10 text-blue-600",
    Failed: "bg-red-500/10 text-red-600",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium ${styles[status]}`}
    >
      <span
        className={`size-1.5 rounded-full ${
          status === "Success"
            ? "bg-emerald-500"
            : status === "Building"
              ? "animate-pulse bg-blue-500"
              : "bg-red-500"
        }`}
      />
      {status}
    </span>
  );
}

export default function HomePage() {
  return (
    <main className="space-y-6 p-4 md:p-6">
      {/* Page heading */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Overview</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Monitor your projects, deployments, and platform activity.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex h-9 items-center gap-2 rounded-lg border bg-background px-3 text-sm font-medium transition-colors hover:bg-muted">
            Last 30 days
            <ChevronDown className="size-4 text-muted-foreground" />
          </button>
          <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            <Plus className="size-4" />
            New project
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-xl border bg-card p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <div className="rounded-lg border p-2">
                  <Icon className="size-4 text-muted-foreground" />
                </div>
              </div>

              <div className="mt-4 flex items-end justify-between gap-2">
                <p className="text-2xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <span className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                  <ArrowUpRight className="size-3.5" />
                  {stat.change}
                </span>
              </div>

              <p className="mt-1 text-xs text-muted-foreground">
                {stat.detail}
              </p>
            </div>
          );
        })}
      </div>

      {/* Analytics + service health */}
      <div className="grid gap-4 xl:grid-cols-[1.7fr_1fr]">
        <section className="rounded-xl border bg-card p-4 shadow-sm md:p-5">
          <SectionHeading
            title="API usage"
            description="Request volume across your projects"
            action={
              <button className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground">
                View analytics
                <ArrowUpRightFromSquare className="size-3.5" />
              </button>
            }
          />

          <div className="mt-5 flex items-end gap-3">
            <p className="text-3xl font-semibold tracking-tight">2.4M</p>
            <span className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
              <ArrowUpRight className="size-3.5" />
              18.2%
            </span>
          </div>

          <p className="mt-1 text-xs text-muted-foreground">
            Total requests in the last 30 days
          </p>

          <div className="mt-7 flex h-40 items-end gap-1.5 sm:gap-2">
            {usage.map((height, index) => (
              <div
                key={index}
                className="group relative flex h-full flex-1 items-end"
              >
                <div
                  style={{ height: `${height}%` }}
                  className="w-full rounded-t-sm bg-primary/20 transition-colors group-hover:bg-primary"
                />
              </div>
            ))}
          </div>

          <div className="mt-3 flex justify-between border-t pt-3 text-[11px] text-muted-foreground">
            <span>30 days ago</span>
            <span>15 days ago</span>
            <span>Today</span>
          </div>
        </section>

        <section className="rounded-xl border bg-card p-4 shadow-sm md:p-5">
          <SectionHeading
            title="System status"
            description="Current platform health"
            action={
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] font-medium text-emerald-600">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                All operational
              </span>
            }
          />

          <div className="mt-5 space-y-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.name}
                  className="flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg border p-2">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{service.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {service.detail}
                      </p>
                    </div>
                  </div>
                  <span className="size-2 rounded-full bg-emerald-500" />
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-lg border bg-muted/30 p-3">
            <div className="flex items-center gap-2 text-xs font-medium">
              <Check className="size-4 text-emerald-600" />
              No incidents reported
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              All monitored services are running normally.
            </p>
          </div>
        </section>
      </div>

      {/* Deployments */}
      <section className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="p-4 md:p-5">
          <SectionHeading
            title="Recent deployments"
            description="Latest deployment activity across your projects"
            action={
              <button className="text-xs font-medium text-muted-foreground hover:text-foreground">
                View all
              </button>
            }
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-y bg-muted/30 text-xs text-muted-foreground">
                <th className="px-5 py-3 font-medium">Project</th>
                <th className="px-4 py-3 font-medium">Environment</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Commit</th>
                <th className="px-5 py-3 text-right font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {deployments.map((deployment) => (
                <tr
                  key={deployment.name}
                  className="border-b last:border-0 transition-colors hover:bg-muted/30"
                >
                  <td className="px-5 py-3.5">
                    <div className="font-medium">{deployment.name}</div>
                    <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <GitBranch className="size-3" />
                      {deployment.branch}
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-muted-foreground">
                    {deployment.environment}
                  </td>
                  <td className="px-4 py-3.5">
                    <StatusBadge status={deployment.status} />
                  </td>
                  <td className="max-w-[220px] truncate px-4 py-3.5 text-xs text-muted-foreground">
                    {deployment.commit}
                  </td>
                  <td className="px-5 py-3.5 text-right text-xs text-muted-foreground">
                    {deployment.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Activity + quick actions */}
      <div className="grid gap-4 xl:grid-cols-2">
        <section className="rounded-xl border bg-card p-4 shadow-sm md:p-5">
          <SectionHeading
            title="Recent activity"
            description="Latest updates from your workspace"
            action={
              <button className="text-xs font-medium text-muted-foreground hover:text-foreground">
                View activity
              </button>
            }
          />

          <div className="mt-5 space-y-5">
            {activity.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border">
                    <Icon className="size-4 text-muted-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-medium">{item.title}</p>
                      <span className="text-[11px] text-muted-foreground">
                        {item.time}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-xl border bg-card p-4 shadow-sm md:p-5">
          <SectionHeading
            title="Quick actions"
            description="Common tasks for your workspace"
          />

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "Create a project",
                description: "Start a new application",
                icon: Plus,
              },
              {
                title: "Deploy application",
                description: "Ship your latest changes",
                icon: Rocket,
              },
              {
                title: "Manage API keys",
                description: "Control API access",
                icon: Code2,
              },
              {
                title: "Workspace settings",
                description: "Configure your workspace",
                icon: Settings2,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  className="group flex items-center gap-3 rounded-lg border p-3 text-left transition-colors hover:bg-muted/50"
                >
                  <div className="rounded-lg border bg-background p-2">
                    <Icon className="size-4 text-muted-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
