


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ArrowUpRight, X, TextAlignJustify } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export type NavigationSection = {
  title: string;
  href: string;
  external?: boolean;
};

const navigationData: NavigationSection[] = [
  {
    title: "Tools",
    href: "/tools",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Portfolio",
    href: "https://chinmayakumardas.com",
    external: true,
  },
];

const CollaborateButton = ({ className }: { className?: string }) => (
  <Button
    className={cn(
      "relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden hover:bg-primary/80",
      className
    )}
  >
    <span className="relative z-10 transition-all duration-500 hover:cursor-pointer">
      Let's Collaborate
    </span>

    <div className="absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
      <ArrowUpRight size={16} />
    </div>
  </Button>
);

const Navbar = () => {
  const pathname = usePathname();
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024) setIsOpen(false);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  const isActive = (href: string) => {
    if (href.startsWith("http")) return false;
    return pathname === href;
  };

  return (
    <header className="bg-background">
      <div className="max-w-7xl mx-auto w-full px-4 py-4 sm:px-6">
        <nav
          className={cn(
            "w-full flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
            sticky
              ? "p-2.5 bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-full"
              : "bg-transparent border-transparent"
          )}
        >
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="max-lg:hidden bg-muted p-0.5 rounded-full">
            <NavigationMenuList className="flex gap-0">
              {navigationData.map((navItem) => (
                <NavigationMenuItem key={navItem.title}>
                  {/* <NavigationMenuLink
                    asChild
                    className={cn(
                      "px-2 lg:px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal",
                      isActive(navItem.href) && "bg-background text-foreground shadow-sm"
                    )}
                  >
                    <Link
                      href={navItem.href}
                      target={navItem.external ? "_blank" : undefined}
                      rel={navItem.external ? "noopener noreferrer" : undefined}
                    >
                      {navItem.title}
                    </Link>
                  </NavigationMenuLink> */}
                  <NavigationMenuLink
  className={cn(
    "px-2 lg:px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal",
    isActive(navItem.href) && "bg-background text-foreground shadow-sm"
  )}
>
  <Link
    href={navItem.href}
    target={navItem.external ? "_blank" : undefined}
    rel={navItem.external ? "noopener noreferrer" : undefined}
  >
    {navItem.title}
  </Link>
</NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Collaborate Button */}
          <Link href="/contact" className="hidden lg:flex">
            <CollaborateButton />
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden rounded-full bg-background border border-border p-2.5 transition-colors hover:bg-muted"
          >
            <TextAlignJustify size={24} />
          </button>
        </nav>
      </div>

      {/* Full Screen Mobile Menu - Premium Style */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-background lg:hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Logo />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 rounded-full hover:bg-muted transition-all active:scale-95"
            >
              <X size={28} />
            </button>
          </div>

          {/* Big Animated Menu Items */}
          <div className="flex-1 flex flex-col px-6 pt-10 space-y-2 overflow-y-auto">
            {navigationData.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "group relative text-5xl font-medium py-6 px-4 rounded-2xl transition-all duration-300 hover:bg-muted/50 active:scale-[0.985]",
                  isActive(item.href) && "text-primary"
                )}
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-3">
                  {item.title}
                </span>
                <div className="absolute bottom-4 left-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </Link>
            ))}

            {/* Collaborate Button in Menu */}
            <div className="pt-8 pb-12">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block">
                <CollaborateButton className="w-full h-16 text-lg" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;