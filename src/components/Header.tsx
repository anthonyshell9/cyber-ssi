"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface SubItem {
  name: string;
  href: string;
}

interface CategoryWithItems {
  name: string;
  href: string;
  items: SubItem[];
}

interface NavItem {
  name: string;
  href: string;
  submenu?: (SubItem | CategoryWithItems)[];
}

const navigation: NavItem[] = [
  { name: "Accueil", href: "/" },
  {
    name: "Vos Besoins",
    href: "/vos-besoins",
    submenu: [
      { name: "PME & ETI", href: "/vos-besoins#pme" },
      { name: "Grandes Entreprises", href: "/vos-besoins#grandes-entreprises" },
      { name: "Administrations", href: "/vos-besoins#administrations" },
      { name: "Startups", href: "/vos-besoins#startups" },
    ],
  },
  {
    name: "Nos Services",
    href: "/nos-services",
    submenu: [
      {
        name: "Gouvernance & Conformité",
        href: "/nos-services/gouvernance-risque-conformite",
        items: [
          { name: "NIS2", href: "/nos-services/gouvernance-risque-conformite/nis2" },
          { name: "DORA", href: "/nos-services/gouvernance-risque-conformite/dora" },
          { name: "ISO 27001", href: "/nos-services/gouvernance-risque-conformite/iso-27001" },
          { name: "AI Act", href: "/nos-services/gouvernance-risque-conformite/ai-act" },
          { name: "VARA", href: "/nos-services/gouvernance-risque-conformite/vara" },
        ],
      },
      {
        name: "Conseils & Audits",
        href: "/nos-services/conseils-audits",
        items: [
          { name: "Maturité Cyber", href: "/nos-services/conseils-audits/maturite-cyber" },
          { name: "Évaluer votre posture", href: "/nos-services/conseils-audits/evaluer-posture" },
          { name: "Due Diligence", href: "/nos-services/conseils-audits/due-diligence" },
          { name: "RSSI externalisé", href: "/nos-services/conseils-audits/rssi-temps-partage" },
        ],
      },
      {
        name: "Services Opérationnels",
        href: "/nos-services/services-operationnels",
        items: [
          { name: "Tests d'intrusion", href: "/nos-services/services-operationnels/test-intrusion" },
          { name: "Red Team", href: "/nos-services/services-operationnels/red-team" },
          { name: "Audit de code", href: "/nos-services/services-operationnels/audit-code" },
          { name: "SOC 24/7", href: "/nos-services/services-operationnels/soc" },
        ],
      },
    ],
  },
  {
    name: "Entreprise",
    href: "/entreprise",
    submenu: [
      { name: "Qui sommes-nous", href: "/entreprise#qui-sommes-nous" },
      { name: "Notre équipe", href: "/entreprise#equipe" },
      { name: "Nos valeurs", href: "/entreprise#valeurs" },
      { name: "Certifications", href: "/entreprise#certifications" },
    ],
  },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0c19]/95 backdrop-blur-sm shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/images/2025/04/Logo-1-480x139.png"
              alt="Cyber-SSI"
              width={150}
              height={44}
              className="h-10 w-auto brightness-0 invert"
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-semibold leading-6 text-white/90 hover:text-[#7d53de] transition-colors py-2"
              >
                {item.name}
                {item.submenu && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Dropdown menu */}
              {item.submenu && activeDropdown === item.name && (
                <div className="absolute top-full left-0 mt-0 pt-2">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden min-w-[280px]">
                    {/* Check if submenu has nested items (like Nos Services) */}
                    {item.submenu[0] && 'items' in item.submenu[0] ? (
                      <div className="grid grid-cols-1 divide-y divide-gray-100">
                        {item.submenu.map((category) => (
                          <div key={category.name} className="p-4">
                            <Link
                              href={category.href}
                              className="text-sm font-bold text-[#0e0c19] hover:text-[#7d53de] transition-colors"
                            >
                              {category.name}
                            </Link>
                            {'items' in category && (
                              <ul className="mt-2 space-y-1">
                                {category.items.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      className="block text-sm text-[#3c3a47] hover:text-[#7d53de] hover:translate-x-1 transition-all py-1"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-[#3c3a47] hover:bg-[#7d53de]/10 hover:text-[#7d53de] transition-all"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/#contact"
            className="rounded-full bg-[#7d53de] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-[#0e0c19] transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0c19] max-h-[80vh] overflow-y-auto">
          <div className="space-y-1 px-4 pb-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white/90 hover:bg-[#161131] hover:text-[#7d53de]"
                  onClick={() => !item.submenu && setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu[0] && 'items' in item.submenu[0] ? (
                      item.submenu.map((category) => (
                        <div key={category.name} className="py-2">
                          <Link
                            href={category.href}
                            className="block text-sm font-semibold text-[#7d53de] py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                          {'items' in category && category.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-sm text-white/70 hover:text-[#7d53de] py-1 pl-2"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ))
                    ) : (
                      item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-white/70 hover:text-[#7d53de] py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/#contact"
              className="block rounded-full bg-[#7d53de] px-6 py-2.5 text-center text-sm font-semibold text-white mt-4 hover:bg-white hover:text-[#0e0c19]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
