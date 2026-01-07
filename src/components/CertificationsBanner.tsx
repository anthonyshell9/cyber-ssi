"use client";

const certifications = [
  { name: "CISSP", fullName: "Certified Information Systems Security Professional" },
  { name: "CISM", fullName: "Certified Information Security Manager" },
  { name: "CREST", fullName: "CREST Pathway & Pathway+" },
  { name: "ISO 27001", fullName: "Lead Auditor & Lead Implementer" },
  { name: "PECB", fullName: "ISO 27001 / ISO 9001 Internal Auditor" },
  { name: "Microsoft", fullName: "Azure & Security Operations" },
  { name: "CNSP", fullName: "Certified Network Security Practitioner" },
  { name: "Red Team", fullName: "Certified Red Team Professional" },
];

export default function CertificationsBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#0e0c19] via-[#161131] to-[#0e0c19] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-white/50 text-sm uppercase tracking-widest mb-8" data-animation="fadeIn">
          Nos experts sont certifiés
        </p>

        {/* Desktop: Scrolling animation */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-12 whitespace-nowrap">
            {[...certifications, ...certifications].map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-[#7d53de]/50 hover:bg-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#7d53de]/20 flex items-center justify-center">
                  <span className="text-[#7d53de] font-bold text-xs">{cert.name.substring(0, 2)}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{cert.name}</p>
                  <p className="text-white/50 text-xs group-hover:text-white/70 transition-colors">{cert.fullName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted by labels */}
        <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Référencé Cybermalveillance.gouv.fr</span>
          </div>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Membre CREST International</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
