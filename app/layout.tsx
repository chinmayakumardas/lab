


import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import Script from "next/script";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
   metadataBase: new URL("https://lab.chinmayakumardas.com"),
  title: "BYM Lab — Blow Your Mind By Chinmaya Kumar Das",
  description:
    "Tools built to inspire, create & ship — across creative, design, development & tech. One lab, infinite possibilities.",
    verification: {
    google: "-E3d5lcWSRoF44sPMxEbcZJKgd468wBlpVquntc7dyg", // paste your code here
  },
    keywords: ["BYM Lab", "creative tools", "design", "development", "AI", "blow your mind"],
  authors: [{ name: "BYM Lab" }],
  themeColor: "#1b2618",
  openGraph: {
    title: "BYM Lab — Blow Your Mind BY Chinmaya Kumar Das",
    description: "Creative, Design, Dev & Tech tools — One lab, infinite possibilities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
        style={{ background: "#1b2618", margin: 0, padding: 0 }}
      >
                 {/* GA4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZN0HXVS31X" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZN0HXVS31X', { page_path: window.location.pathname });
          `}
        </Script>
          {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "vuq9liloti");
          `}
        </Script>
        {/* Page loader — renders on first mount, exits smoothly */}
        <PageLoader />

        {/* Page content fades in after loader */}
        {children}
      </body>
    </html>
  );
}