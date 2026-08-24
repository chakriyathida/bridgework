import "./globals.css";
import Nav from "@/components/Nav";
import CookieBanner from "@/components/CookieBanner";

export const metadata = {
  title: "Bridgework — school subjects, real jobs",
  description:
    "Bridgework connects what students are taught this week to the jobs that use it, through short simulations written by people who do the work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Karla:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <CookieBanner />
      </body>
    </html>
  );
}
