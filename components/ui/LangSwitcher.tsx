"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";
import { useLocale } from "next-intl"; // Solo para saber el idioma actual

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const change = (newLocale: string) => {
    // Si el idioma es el mismo, no hacemos nada
    if (newLocale === locale) return;

    // Lógica nativa: Reemplazamos el prefijo del idioma en la ruta
    // Ejemplo: /es/about -> /en/about
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");

    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div className="flex items-center gap-1 px-1 py-1.5 rounded-full border border-white/10 bg-[#1a1a2e] mr-4 md:mr-0">
      <button
        onClick={() => change("es")}
        disabled={isPending}
        className={`px-4 py-1.5 rounded-full text-sm font-normal transition-all duration-300 ${
          locale === "es" ? "bg-purple-600 text-white shadow-md" : "text-white/60 hover:text-purple-300"
        }`}
      >
        Español
      </button>

      <button
        onClick={() => change("en")}
        disabled={isPending}
        className={`px-4 py-1.5 rounded-full text-sm font-normal transition-all duration-300 ${
          locale === "en" ? "bg-purple-600 text-white shadow-md" : "text-white/60 hover:text-purple-300"
        }`}
      >
        English
      </button>
    </div>
  );
}