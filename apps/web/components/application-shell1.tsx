




"use client";

import {
  BadgeCheck,
  BarChart3,
  Briefcase,
  ChevronRight,
  ChevronsUpDown,
  ClipboardList,
  Clock3,
  FileText,
  Folder,
  Globe2,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Settings,
  Sparkles,
  Star,
  User,
  Users,
} from "lucide-react";
import { MotionConfig, motion } from "motion/react";
import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "cn";

import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { Separator } from "@workspace/ui/components/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";

const person1 = {
  name: "Chinmay Kumar Das",
  firstName: "Chinmay",
  lastName: "Das",
  initials: "CK",
  email: "chinmayakumardas2000@gmail.com",
  username: "chinmaya",
  role: "Product Designer",
  company: "AASINT",
  location: "Bhubaneswar, India",
  avatar:
    "/profile-full.png",
};

type NavItem = {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  isActive?: boolean;
  children?: NavItem[];
};

type NavGroup = {
  title: string;
  items: NavItem[];
  defaultOpen?: boolean;
};

type UserData = {
  name: string;
  email: string;
  avatar: string;
};

type SidebarData = {
  logo: {
    src: string;
    alt: string;
    title: string;
    description: string;
  };
  navGroups: NavGroup[];
  footerGroup: NavGroup;
  user?: UserData;
  workspaces?: Array<{
    id: string;
    name: string;
    logo: string;
    plan: string;
  }>;
  activeWorkspace?: string;
};

const sidebarData: SidebarData = {
  logo: {
    src: "https://cdn.shadcnblocks.com/shadcnblocks/block/logos/shadcnblocks-logo.svg",
    alt: "Lab",
    title: "Hey Buddy",
  description: "Stop thinking. Start building.",
  },

  navGroups: [
    {
      title: "Overview",
      defaultOpen: true,
      items: [
        {
          label: "Dashboard",
          icon: LayoutDashboard,
          href: "/",
          isActive: true,
        },
        { label: "Tasks", icon: ClipboardList, href: "/tasks" },
        { label: "Roadmap", icon: BarChart3, href: "/roadmap" },
      ],
    },
    {
      title: "Projects",
      defaultOpen: true,
      items: [
        {
          label: "Active Projects",
          icon: Briefcase,
          href: "/projects",
          children: [
            { label: "Project Alpha", icon: FileText, href: "/projects/alpha" },
            { label: "Project Beta", icon: FileText, href: "/projects/beta" },
            { label: "Project Gamma", icon: FileText, href: "/projects/gamma" },
          ],
        },
        {
          label: "Archived",
          icon: Folder,
          href: "/projects/archived",
          children: [
            { label: "2024 Archive", icon: FileText, href: "/projects/archived/2024" },
            { label: "2023 Archive", icon: FileText, href: "/projects/archived/2023" },
          ],
        },
      ],
    },
    {
      title: "Team",
      defaultOpen: false,
      items: [
        { label: "Members", icon: Users, href: "/team/members" },
        { label: "Sprints", icon: Clock3, href: "/team/sprints" },
        { label: "Approvals", icon: BadgeCheck, href: "/team/approvals" },
        { label: "Reviews", icon: Star, href: "/team/reviews" },
      ],
    },
    {
      title: "Workspace",
      defaultOpen: false,
      items: [
        { label: "Integrations", icon: Globe2, href: "/integrations" },
        { label: "Automations", icon: Sparkles, href: "/automations" },
      ],
    },
  ],

  footerGroup: {
    title: "Support",
    items: [
      { label: "Help Center", icon: HelpCircle, href: "/help" },
      { label: "Settings", icon: Settings, href: "/settings" },
    ],
  },

  user: {
    name: person1.name,
    email: person1.email,
    avatar: person1.avatar,
  },

  workspaces: [
    {
      id: "1",
      name: "Shadcnblocks",
      logo: "https://cdn.shadcnblocks.com/shadcnblocks/block/logos/shadcnblocks-logo.svg",
      plan: "Enterprise",
    },
    {
      id: "2",
      name: "Shadcn Templates",
      logo: "https://cdn.shadcnblocks.com/shadcnblocks/block/logos/shadcnblocks-logo.svg",
      plan: "Startup",
    },
    {
      id: "3",
      name: "Shadcn Components",
      logo: "https://cdn.shadcnblocks.com/shadcnblocks/block/logos/shadcnblocks-logo.svg",
      plan: "Free",
    },
  ],

  activeWorkspace: "1",
};

const spring = {
  type: "spring",
  bounce: 0.18,
  duration: 0.45,
} as const;

const buttonMotion =
  "relative isolate overflow-visible transition-[width,height,padding,background-color,color,transform] duration-200 ease-out group-data-[collapsible=icon]:overflow-hidden active:scale-[0.98] data-active:bg-transparent data-active:hover:bg-sidebar-accent/60 motion-reduce:transition-none motion-reduce:active:scale-100";

const ActivePill = () => (
  <motion.span
    layoutId="sidebar-active-pill"
    transition={spring}
    className="absolute inset-0 -z-10 rounded-md bg-sidebar-accent shadow-xs ring-1 ring-sidebar-border/60"
  />
);

const normalizePath = (path: string) =>
  path.length > 1 ? path.replace(/\/+$/, "") : "/";

const findTrail = (pathname: string) => {
  const currentPath = normalizePath(pathname);

  for (const group of sidebarData.navGroups) {
    for (const item of group.items) {
      if (normalizePath(item.href) === currentPath) {
        return [group.title, item.label];
      }

      const child = item.children?.find(
        (entry) => normalizePath(entry.href) === currentPath
      );

      if (child) {
        return [group.title, item.label, child.label];
      }
    }
  }

  if (currentPath === "/") {
    return ["Overview", "Dashboard"];
  }

  return currentPath
    .split("/")
    .filter(Boolean)
    .map((segment) =>
      decodeURIComponent(segment)
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())
    );
};

const SidebarLogo = ({ logo }: { logo: SidebarData["logo"] }) => (
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton size="lg">
        <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-primary">
          <img
            src={logo.src}
            alt={logo.alt}
            className="size-6 text-primary-foreground invert dark:invert-0"
          />
        </div>
        <div className="flex flex-col gap-0.5 leading-none">
          <span className="font-medium">{logo.title}</span>
          <span className="text-xs text-muted-foreground">
            {logo.description}
          </span>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
);

const NavMenuItem = ({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: (href: string) => void;
}) => {
  const Icon = item.icon;
  const hasChildren = !!item.children?.length;
  const currentPath = normalizePath(pathname);

  if (!hasChildren) {
    const isActive = normalizePath(item.href) === currentPath;

    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          isActive={isActive}
          className={buttonMotion}
        >
          <a
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(item.href);
            }}
          >
            {isActive && <ActivePill />}
            <Icon className="size-4" />
            <span>{item.label}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  const childIsActive = item.children!.some(
    (child) => normalizePath(child.href) === currentPath
  );

  return (
    <Collapsible
      asChild
      defaultOpen={item.children!.some(
        (child) => normalizePath(child.href) === currentPath
      ) || item.isActive}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className={buttonMotion}>
            <Icon className="size-4" />
            <span>{item.label}</span>
            <ChevronRight className="ml-auto size-4 text-muted-foreground transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-data-[state=open]/collapsible:rotate-90 motion-reduce:transition-none" />
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down motion-reduce:animate-none">
          <SidebarMenuSub>
            {item.children!.map((child, index) => {
              const isActive =
                normalizePath(child.href) === currentPath;

              return (
                <SidebarMenuSubItem
                  key={child.label}
                  className="animate-in duration-300 fade-in-0 fill-mode-both slide-in-from-left-2 motion-reduce:animate-none"
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <SidebarMenuSubButton
                    asChild
                    isActive={isActive}
                    className={buttonMotion}
                  >
                    <a
                      href={child.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={(event) => {
                        event.preventDefault();
                        onNavigate(child.href);
                      }}
                    >
                      {isActive && <ActivePill />}
                      <span>{child.label}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              );
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};

const NavUser = ({ user }: { user: UserData }) => {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="transition-[width,height,padding,background-color,transform] duration-200 ease-out active:scale-[0.98] motion-reduce:transition-none data-open:bg-sidebar-accent data-open:text-sidebar-accent-foreground"
            >
              <Avatar className="size-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">
                  {initials}
                </AvatarFallback>
              </Avatar>

              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {user.email}
                </span>
              </div>

              <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg duration-200"
            side="bottom"
            align="end"
            sideOffset={6}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">
                    {initials}
                  </AvatarFallback>
                </Avatar>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <User className="mr-2 size-4" />
              Account
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <LogOut className="mr-2 size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const AppSidebar = ({
  pathname,
  onNavigate,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  pathname: string;
  onNavigate: (href: string) => void;
}) => {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarLogo logo={sidebarData.logo} />
      </SidebarHeader>

      <SidebarContent className="overflow-hidden">
        <ScrollArea className="min-h-0 flex-1">
          {sidebarData.navGroups.map((group, groupIndex) => (
            <SidebarGroup
              key={group.title}
              className="animate-in duration-500 fade-in-0 fill-mode-both slide-in-from-left-2 motion-reduce:animate-none"
              style={{ animationDelay: `${groupIndex * 60}ms` }}
            >
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <NavMenuItem
                      key={item.label}
                      item={item}
                      pathname={pathname}
                      onNavigate={onNavigate}
                    />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </ScrollArea>
      </SidebarContent>

      <SidebarFooter>
        {/* {sidebarData.user && <NavUser user={sidebarData.user} />} */}
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
};

interface ApplicationShell1Props {
  className?: string;
  children: React.ReactNode;
}

export function ApplicationShell1({
  className,
  children,
}: ApplicationShell1Props) {
  const pathname = usePathname();
  const router = useRouter();

  const trail = findTrail(pathname);

  const handleNavigate = React.useCallback(
    (href: string) => {
      router.push(href);
    },
    [router]
  );

  return (
    <MotionConfig reducedMotion="user">
      <SidebarProvider className={cn(className)}>
        <AppSidebar
          pathname={pathname}
          onNavigate={handleNavigate}
        />

        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />

            <Separator
              orientation="vertical"
              className="mx-2 hidden md:block"
            />

            <a href="/" className="flex items-center gap-2 md:hidden">
              <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-primary">
                <img
                  src={sidebarData.logo.src}
                  alt={sidebarData.logo.alt}
                  className="size-6 text-primary-foreground invert dark:invert-0"
                />
              </div>

              <span className="font-semibold">
                {sidebarData.logo.title}
              </span>
            </a>

            <Breadcrumb className="hidden md:block">
              <BreadcrumbList>
                {trail.map((crumb, index) => {
                  const isLast = index === trail.length - 1;

                  return (
                    <React.Fragment key={`${crumb}-${index}`}>
                      {index > 0 && <BreadcrumbSeparator />}

                      <BreadcrumbItem
                        className="animate-in duration-300 fade-in-0 fill-mode-both slide-in-from-bottom-1 motion-reduce:animate-none"
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        {isLast ? (
                          <BreadcrumbPage>{crumb}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink href="#">
                            {crumb}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </React.Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </header>

          <div className="flex flex-1 flex-col gap-4 p-4">
            <div
              key={pathname}
              className="min-h-[100vh] flex-1 animate-in rounded-xl bg-muted/50 duration-500 ease-out fade-in-0 fill-mode-both slide-in-from-bottom-2 zoom-in-[0.99] motion-reduce:animate-none md:min-h-min"
            >
              {children}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </MotionConfig>
  );
}
