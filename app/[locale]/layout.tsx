import type { Metadata } from "next";
import "../../styles/globals.css"; 
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Gabriela Aguilar | Frontend Developer",
  description:
    "Frontend Developer especializada en React, Next.js y WordPress. Desarrollo interfaces modernas, rápidas y optimizadas para SEO y conversión. Disponible para proyectos freelance y oportunidades remotas.",
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




export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}