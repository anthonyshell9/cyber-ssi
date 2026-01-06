import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e0c19] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/2025/04/Logo-noir-icone-300x300.png"
              alt="Cyber-SSI"
              width={60}
              height={60}
              className="mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm max-w-md">
              Cyber-SSI accompagne les PME, administrations et institutions dans leur transformation sécuritaire.
              Conformité, certifications et expertise RSSI à votre service.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#services" className="hover:text-[#7d53de] transition-colors">Conformité réglementaire</Link></li>
              <li><Link href="#services" className="hover:text-[#7d53de] transition-colors">Certifications ISO</Link></li>
              <li><Link href="#services" className="hover:text-[#7d53de] transition-colors">RSSI externalisé</Link></li>
              <li><Link href="#services" className="hover:text-[#7d53de] transition-colors">Formation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:contact@cyber-ssi.com" className="hover:text-[#7d53de] transition-colors">
                  contact@cyber-ssi.com
                </a>
              </li>
              <li>France & International</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Cyber-SSI. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/mentions-legales" className="hover:text-[#7d53de] transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-[#7d53de] transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
