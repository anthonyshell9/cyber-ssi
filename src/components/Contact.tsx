"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [activeTab, setActiveTab] = useState<"form" | "calendly">("form");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e0c19] mb-4">
            Contactez-nous
          </h2>
          <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
          <p className="text-[#3c3a47] text-lg max-w-2xl mx-auto">
            Vous avez un projet de cybersécurité ? Vous souhaitez évaluer votre posture de sécurité
            ou vous mettre en conformité ? Parlons-en ensemble.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-white p-1 shadow-lg">
            <button
              onClick={() => setActiveTab("form")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === "form"
                  ? "bg-[#7d53de] text-white"
                  : "text-[#3c3a47] hover:text-[#7d53de]"
              }`}
            >
              Envoyer un message
            </button>
            <button
              onClick={() => setActiveTab("calendly")}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === "calendly"
                  ? "bg-[#7d53de] text-white"
                  : "text-[#3c3a47] hover:text-[#7d53de]"
              }`}
            >
              Prendre rendez-vous
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "form" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7d53de]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#7d53de]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0e0c19]">Email</h3>
                    <a href="mailto:contact@cyber-ssi.com" className="text-[#7d53de] hover:underline">
                      contact@cyber-ssi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7d53de]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#7d53de]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0e0c19]">Zone d&apos;intervention</h3>
                    <p className="text-[#3c3a47]">France & International</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7d53de]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#7d53de]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0e0c19]">Rendez-vous</h3>
                    <button
                      onClick={() => setActiveTab("calendly")}
                      className="text-[#7d53de] hover:underline"
                    >
                      Planifier un appel de 30 min
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0e0c19] mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#7d53de] focus:ring-2 focus:ring-[#7d53de]/20 outline-none transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0e0c19] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#7d53de] focus:ring-2 focus:ring-[#7d53de]/20 outline-none transition-all"
                      placeholder="jean@entreprise.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#0e0c19] mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#7d53de] focus:ring-2 focus:ring-[#7d53de]/20 outline-none transition-all"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#0e0c19] mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#7d53de] focus:ring-2 focus:ring-[#7d53de]/20 outline-none transition-all"
                      placeholder="+33 6 00 00 00 00"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0e0c19] mb-2">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#7d53de] focus:ring-2 focus:ring-[#7d53de]/20 outline-none transition-all resize-none"
                    placeholder="Décrivez votre besoin en cybersécurité..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 px-6 rounded-full bg-[#7d53de] text-white font-semibold hover:bg-[#161131] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-center">Message envoyé avec succès ! Nous vous recontacterons rapidement.</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-center">Erreur lors de l&apos;envoi. Veuillez nous contacter par email.</p>
                )}
              </form>
            </div>
          </div>
        ) : (
          /* Calendly Widget */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://calendly.com/ahassen-2/cyber-ssi-introduction?hide_gdpr_banner=1&primary_color=7d53de"
                width="100%"
                height="700"
                frameBorder="0"
                title="Planifier un rendez-vous"
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
