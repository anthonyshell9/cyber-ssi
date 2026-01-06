import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Cyber-SSI",
  description: "Politique de confidentialité et protection des données personnelles de Cyber-SSI, conforme au RGPD.",
};

export default function Confidentialite() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0e0c19] via-[#161131] to-[#7d53de]">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Politique de <span className="text-[#7d53de]">Confidentialité</span>
          </h1>
          <p className="text-white/80 text-lg mt-4">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-[#3c3a47]">

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">1. Introduction</h2>
              <p>
                Cyber-SSI s&apos;engage à protéger la vie privée des utilisateurs de son site web
                et de ses services. La présente politique de confidentialité décrit comment nous
                collectons, utilisons, stockons et protégeons vos données personnelles conformément
                au Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679).
              </p>
            </div>

            {/* Responsable du traitement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">2. Responsable du traitement</h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="mb-2"><strong>Raison sociale :</strong> Cyber-SSI</p>
                <p className="mb-2"><strong>Email :</strong> <a href="mailto:contact@cyber-ssi.com" className="text-[#7d53de]">contact@cyber-ssi.com</a></p>
                <p className="mb-0"><strong>Délégué à la Protection des Données (DPO) :</strong> contact@cyber-ssi.com</p>
              </div>
            </div>

            {/* Données collectées */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">3. Données personnelles collectées</h2>
              <p>Nous pouvons collecter les catégories de données suivantes :</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Données d&apos;identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                <li><strong>Données professionnelles :</strong> nom de l&apos;entreprise, fonction</li>
                <li><strong>Données de connexion :</strong> adresse IP, type de navigateur, pages visitées, date et heure de connexion</li>
                <li><strong>Données de communication :</strong> contenu des messages envoyés via notre formulaire de contact</li>
              </ul>
            </div>

            {/* Finalités */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">4. Finalités du traitement</h2>
              <p>Vos données personnelles sont traitées pour les finalités suivantes :</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Répondre à vos demandes de contact et de renseignements</li>
                <li>Fournir nos services de conseil en cybersécurité</li>
                <li>Gérer la relation commerciale et contractuelle</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Respecter nos obligations légales et réglementaires</li>
                <li>Envoyer des communications commerciales (avec votre consentement)</li>
              </ul>
            </div>

            {/* Base légale */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">5. Base légale du traitement</h2>
              <p>Le traitement de vos données repose sur les bases légales suivantes :</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Votre consentement :</strong> pour l&apos;envoi de communications commerciales</li>
                <li><strong>L&apos;exécution d&apos;un contrat :</strong> pour la fourniture de nos services</li>
                <li><strong>Notre intérêt légitime :</strong> pour améliorer nos services et assurer la sécurité de notre site</li>
                <li><strong>Nos obligations légales :</strong> pour respecter la réglementation applicable</li>
              </ul>
            </div>

            {/* Destinataires */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">6. Destinataires des données</h2>
              <p>
                Vos données personnelles peuvent être transmises aux catégories de destinataires suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Notre personnel habilité dans le cadre de leurs fonctions</li>
                <li>Nos sous-traitants techniques (hébergement, maintenance)</li>
                <li>Les autorités compétentes en cas d&apos;obligation légale</li>
              </ul>
              <p className="mt-4">
                Nous ne vendons jamais vos données personnelles à des tiers.
              </p>
            </div>

            {/* Transferts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">7. Transferts hors UE</h2>
              <p>
                Vos données sont principalement traitées au sein de l&apos;Union Européenne.
                En cas de transfert vers un pays tiers, nous nous assurons que des garanties
                appropriées sont mises en place (clauses contractuelles types de la Commission
                européenne, décision d&apos;adéquation, etc.).
              </p>
            </div>

            {/* Conservation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">8. Durée de conservation</h2>
              <p>Vos données sont conservées pendant les durées suivantes :</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Données de contact :</strong> 3 ans à compter du dernier contact</li>
                <li><strong>Données clients :</strong> durée de la relation contractuelle + 5 ans (obligations légales)</li>
                <li><strong>Données de connexion :</strong> 13 mois maximum</li>
                <li><strong>Cookies :</strong> 13 mois maximum</li>
              </ul>
            </div>

            {/* Droits */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">9. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0e0c19]">Droit d&apos;accès</h3>
                  <p className="text-sm">Obtenir la confirmation que vos données sont traitées et en recevoir une copie</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0e0c19]">Droit de rectification</h3>
                  <p className="text-sm">Faire corriger vos données inexactes ou incomplètes</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0e0c19]">Droit à l&apos;effacement</h3>
                  <p className="text-sm">Demander la suppression de vos données dans certains cas</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0e0c19]">Droit à la limitation</h3>
                  <p className="text-sm">Limiter le traitement de vos données dans certaines situations</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0e0c19]">Droit à la portabilité</h3>
                  <p className="text-sm">Recevoir vos données dans un format structuré et lisible</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0e0c19]">Droit d&apos;opposition</h3>
                  <p className="text-sm">Vous opposer au traitement pour des motifs légitimes</p>
                </div>
              </div>
              <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg mt-6">
                <p className="text-[#0e0c19] font-semibold mb-2">Comment exercer vos droits ?</p>
                <p>
                  Envoyez votre demande par email à <a href="mailto:contact@cyber-ssi.com" className="text-[#7d53de] font-semibold">contact@cyber-ssi.com</a> en
                  précisant votre identité et le droit que vous souhaitez exercer. Nous répondrons
                  dans un délai d&apos;un mois.
                </p>
              </div>
            </div>

            {/* Réclamation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">10. Droit de réclamation</h2>
              <p>
                Si vous estimez que le traitement de vos données personnelles constitue une
                violation du RGPD, vous avez le droit d&apos;introduire une réclamation auprès
                de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) :
              </p>
              <div className="bg-gray-50 p-6 rounded-xl mt-4">
                <p className="mb-1"><strong>CNIL</strong></p>
                <p className="mb-1">3 Place de Fontenoy, TSA 80715</p>
                <p className="mb-1">75334 Paris Cedex 07</p>
                <p>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#7d53de]">www.cnil.fr</a></p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">11. Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation.
                Les cookies sont de petits fichiers texte stockés sur votre appareil.
              </p>
              <h3 className="text-xl font-semibold text-[#0e0c19] mt-6 mb-3">Types de cookies utilisés :</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                <li><strong>Cookies analytiques :</strong> pour comprendre comment le site est utilisé (avec votre consentement)</li>
              </ul>
              <p className="mt-4">
                Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
              </p>
            </div>

            {/* Sécurité */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">12. Sécurité des données</h2>
              <p>
                En tant qu&apos;experts en cybersécurité, nous mettons en oeuvre des mesures
                techniques et organisationnelles appropriées pour protéger vos données
                personnelles contre tout accès non autorisé, modification, divulgation ou
                destruction :
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Chiffrement des données en transit (HTTPS/TLS)</li>
                <li>Contrôle d&apos;accès strict aux données</li>
                <li>Surveillance et journalisation des accès</li>
                <li>Sauvegardes régulières et sécurisées</li>
                <li>Formation du personnel à la protection des données</li>
              </ul>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">13. Modifications de la politique</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité
                à tout moment. Toute modification sera publiée sur cette page avec une date
                de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-[#0e0c19] text-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">14. Nous contacter</h2>
              <p className="text-white/80 mb-4">
                Pour toute question concernant cette politique de confidentialité ou
                l&apos;exercice de vos droits, contactez notre DPO :
              </p>
              <a
                href="mailto:contact@cyber-ssi.com"
                className="inline-block rounded-full bg-[#7d53de] px-6 py-3 text-white font-semibold hover:bg-white hover:text-[#0e0c19] transition-colors"
              >
                contact@cyber-ssi.com
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
