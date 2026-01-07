"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface SubItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

interface CategoryWithItems {
  name: string;
  href: string;
  icon?: React.ReactNode;
  items: SubItem[];
}

interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  submenu?: (SubItem | CategoryWithItems)[];
}

// Icons for navigation
const icons = {
  conformite: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  posture: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
    </svg>
  ),
  maturite: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  test: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
    </svg>
  ),
  gouvernance: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  conseils: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  ),
  operationnel: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  mission: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  valeurs: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  certifications: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  casClients: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
};

const navigation: NavItem[] = [
  { name: "Accueil", href: "/" },
  {
    name: "Vos Besoins",
    href: "/vos-besoins",
    submenu: [
      { name: "Mise en conformité réglementaire", href: "/nos-services/gouvernance-risque-conformite", icon: icons.conformite },
      { name: "Évaluer votre posture de sécurité", href: "/nos-services/conseils-audits", icon: icons.posture },
      { name: "Améliorer la maturité cyber", href: "/nos-services", icon: icons.maturite },
      { name: "Tester la résistance de votre système", href: "/nos-services/services-operationnels", icon: icons.test },
    ],
  },
  {
    name: "Nos Services",
    href: "/nos-services",
    submenu: [
      {
        name: "Gouvernance & Conformité",
        href: "/nos-services/gouvernance-risque-conformite",
        icon: icons.gouvernance,
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
        icon: icons.conseils,
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
        icon: icons.operationnel,
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
      { name: "Notre mission", href: "/entreprise#mission", icon: icons.mission },
      { name: "Nos valeurs", href: "/entreprise#valeurs", icon: icons.valeurs },
      { name: "Nos certifications", href: "/entreprise#certifications", icon: icons.certifications },
      { name: "Cas clients", href: "/#cas-clients", icon: icons.casClients },
    ],
  },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if a nav item is active
  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0e0c19] shadow-xl py-0"
          : "bg-[#0e0c19]/90 backdrop-blur-md py-2"
      }`}
    >
      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}>
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <Image
              src="/images/2025/04/Logo-1-480x139.png"
              alt="Cyber-SSI"
              width={150}
              height={44}
              className={`w-auto brightness-0 invert transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? "h-8" : "h-10"
              }`}
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-[#7d53de] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <svg
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
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
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 text-sm font-semibold leading-6 transition-all duration-200 py-2 relative ${
                  isActiveLink(item.href)
                    ? "text-[#7d53de]"
                    : "text-white/90 hover:text-[#7d53de]"
                }`}
              >
                {item.name}
                {item.submenu && (
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                {/* Active indicator line */}
                {isActiveLink(item.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7d53de] rounded-full" />
                )}
              </Link>

              {/* Dropdown menu */}
              {item.submenu && activeDropdown === item.name && (
                <div className="absolute top-full left-0 mt-0 pt-2">
                  <div
                    className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden min-w-[320px] animate-fadeIn"
                    style={{ animation: "fadeIn 0.2s ease-out" }}
                  >
                    {/* Check if submenu has nested items (like Nos Services) */}
                    {item.submenu[0] && 'items' in item.submenu[0] ? (
                      <div className="grid grid-cols-1 divide-y divide-gray-100">
                        {item.submenu.map((category) => (
                          <div key={category.name} className="p-4 hover:bg-gray-50 transition-colors">
                            <Link
                              href={category.href}
                              className="flex items-center gap-2 text-sm font-bold text-[#0e0c19] hover:text-[#7d53de] transition-colors"
                            >
                              {'icon' in category && (
                                <span className="text-[#7d53de]">{category.icon}</span>
                              )}
                              {category.name}
                            </Link>
                            {'items' in category && (
                              <ul className="mt-2 space-y-1 pl-7">
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
                            className="flex items-center gap-3 px-4 py-3 text-sm text-[#3c3a47] hover:bg-[#7d53de]/10 hover:text-[#7d53de] transition-all"
                          >
                            {'icon' in subItem && (
                              <span className="text-[#7d53de]">{subItem.icon}</span>
                            )}
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
            className={`rounded-full bg-[#7d53de] text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-[#0e0c19] transition-all duration-300 hover:scale-105 ${
              isScrolled ? "px-5 py-2" : "px-6 py-2.5"
            }`}
          >
            Contactez-nous
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0e0c19] border-t border-white/10 space-y-1 px-4 pb-4 pt-2">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#161131] transition-colors ${
                  isActiveLink(item.href)
                    ? "text-[#7d53de] bg-[#161131]"
                    : "text-white/90 hover:text-[#7d53de]"
                }`}
                onClick={() => !item.submenu && setMobileMenuOpen(false)}
              >
                {item.name}
                {isActiveLink(item.href) && (
                  <span className="w-2 h-2 rounded-full bg-[#7d53de]" />
                )}
              </Link>
              {item.submenu && (
                <div className="pl-4 space-y-1 border-l-2 border-[#7d53de]/30 ml-3 mt-1">
                  {item.submenu[0] && 'items' in item.submenu[0] ? (
                    item.submenu.map((category) => (
                      <div key={category.name} className="py-2">
                        <Link
                          href={category.href}
                          className="flex items-center gap-2 text-sm font-semibold text-[#7d53de] py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {'icon' in category && (
                            <span>{category.icon}</span>
                          )}
                          {category.name}
                        </Link>
                        {'items' in category && category.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-sm text-white/70 hover:text-[#7d53de] py-1 pl-7"
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
                        className="flex items-center gap-2 text-sm text-white/70 hover:text-[#7d53de] py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {'icon' in subItem && (
                          <span className="text-[#7d53de]">{subItem.icon}</span>
                        )}
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
            className="block rounded-full bg-[#7d53de] px-6 py-2.5 text-center text-sm font-semibold text-white mt-4 hover:bg-white hover:text-[#0e0c19] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </header>
  );
}
