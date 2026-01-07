"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  return (
    <div className="flex items-center gap-1 text-sm font-semibold">
      {locales.map((loc, index) => (
        <span key={loc} className="flex items-center">
          {index > 0 && <span className="text-white/40 mx-1">|</span>}
          <button
            onClick={() => handleLocaleChange(loc)}
            className={`transition-colors ${
              locale === loc
                ? "text-[#7d53de]"
                : "text-white/70 hover:text-white"
            }`}
            aria-label={`Switch to ${localeNames[loc]}`}
          >
            {localeNames[loc]}
          </button>
        </span>
      ))}
    </div>
  );
}
