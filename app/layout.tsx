// app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Gabriela Aguilar | Frontend Developer",
  description:
    "Frontend Developer especializada en React, Next.js y WordPress. Desarrollo interfaces modernas, rápidas y optimizadas para SEO y conversión.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "Freelance Web Developer",
    "Web Designer",
    "SEO Optimization",
    "Gabriela Aguilar"
  ],
  openGraph: {
    title: "Gabriela Aguilar | Frontend Developer",
    description:
      "Desarrollo interfaces modernas y optimizadas con React, Next.js y WordPress. Disponible para proyectos freelance.",
    url: "https://gabs-six.vercel.app",
    siteName: "Gabriela Aguilar Portfolio",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}