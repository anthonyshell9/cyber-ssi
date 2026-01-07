# Cyber-SSI Website

## Stack
- Next.js 14+ (App Router) with TypeScript
- Tailwind CSS
- next-intl for internationalization
- Azure Static Web Apps deployment

## Environment
- GitHub: `anthonyshell9/cyber-ssi`
- `main` branch -> Production (cyber-ssi.com)
- `develop` branch -> Test environment

## i18n (Internationalization) - IMPORTANT

**ALWAYS translate content in both French (FR) AND English (EN).**

When adding or modifying text content:

1. **Never hardcode text in components** - Use `useTranslations` hook
2. **Always update both translation files:**
   - `src/messages/fr.json` (French)
   - `src/messages/en.json` (English)
3. **Use the localized Link from next-intl:**
   ```tsx
   import { Link } from "@/i18n/navigation";
   ```

### Translation Structure
```
src/
├── i18n/
│   ├── config.ts       # Locale configuration
│   ├── request.ts      # Server request config
│   └── navigation.ts   # Localized navigation helpers
├── messages/
│   ├── fr.json         # French translations
│   └── en.json         # English translations
└── app/
    └── [locale]/       # All pages use dynamic locale
```

### Example Usage
```tsx
"use client";
import { useTranslations } from "next-intl";

export default function MyComponent() {
  const t = useTranslations("mySection");
  return <h1>{t("title")}</h1>;
}
```

### Checklist for New Content
- [ ] Text added to `fr.json`
- [ ] Text added to `en.json`
- [ ] Component uses `useTranslations`
- [ ] Links use localized `Link` from `@/i18n/navigation`

## Commands
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - ESLint check
