"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function LocaleRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language?.split("-")[0] || "fr";
    const locale = browserLang === "en" ? "en" : "fr";

    // Redirect to localized path
    const localizedPath = `/${locale}${pathname}`;
    router.replace(localizedPath);
  }, [pathname, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0e0c19] via-[#161131] to-[#7d53de]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7d53de] mx-auto mb-4"></div>
        <p className="text-white">Redirecting...</p>
      </div>
    </div>
  );
}
