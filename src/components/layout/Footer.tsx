import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const partnerLogos = [
    'Loterie Romande',
    'SION',
    'Bourgeoisie de Sion',
    'Évêché de Sion',
    'Fondation Léonard Gianadda'
  ]

  return (
    <footer className="bg-dark-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-dark-800">
        <div className="container-custom py-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-serif text-secondary-400 mb-4">
              Recevez nos actualités<br />
              et ne manquez aucun concert
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Adresse email"
                className="flex-1 px-6 py-3 rounded-full bg-white text-dark-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-400"
              />
              <button className="btn-secondary whitespace-nowrap">
                S'inscrire
              </button>
            </div>
          </div>
          
          <div className="flex justify-end space-x-4 mt-8">
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/presse"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Presse
            </Link>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-8">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h4 className="text-dark-900 text-lg font-medium mb-2">
              REJOIGNEZ L'AVENTURE
            </h4>
            <p className="text-gray-600 mb-4">
              Atque, ut Tullius ait, ut etiam ferae ferre montae plerumque ad eum locum ubi aliquando pastae sunt revertuntur, 
              ita homines instar turbinis degressi montibus impeditis et arduis loca petivere
            </p>
            <Link
              href="/nous-soutenir"
              className="btn-outline"
            >
              Nous soutenir
            </Link>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partnerLogos.map((partner) => (
              <div key={partner} className="text-dark-900 text-sm font-medium">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container-custom py-6 border-t border-dark-700">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="/mentions-legales"
              className="hover:text-white transition-colors duration-200"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="hover:text-white transition-colors duration-200"
            >
              Politiques de Confidentialités
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <span>© 2025 par OSOM</span>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-secondary-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-secondary-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2.5c2.444 0 2.75.01 3.71.054.9.04 1.387.19 1.712.317.43.167.74.367 1.063.69.323.323.523.633.69 1.063.127.325.277.812.317 1.712.044.96.054 1.266.054 3.71s-.01 2.75-.054 3.71c-.04.9-.19 1.387-.317 1.712-.167.43-.367.74-.69 1.063-.323.323-.633.523-1.063.69-.325.127-.812.277-1.712.317-.96.044-1.266.054-3.71.054s-2.75-.01-3.71-.054c-.9-.04-1.387-.19-1.712-.317-.43-.167-.74-.367-1.063-.69-.323-.323-.523-.633-.69-1.063-.127-.325-.277-.812-.317-1.712C2.51 12.75 2.5 12.444 2.5 10s.01-2.75.054-3.71c.04-.9.19-1.387.317-1.712.167-.43.367-.74.69-1.063.323-.323.633-.523 1.063-.69.325-.127.812-.277 1.712-.317C7.25 2.51 7.556 2.5 10 2.5zm0 1.125c-2.4 0-2.683.009-3.625.052-.875.04-1.35.187-1.667.31-.418.163-.717.358-1.03.671-.313.313-.508.612-.671 1.03-.123.317-.27.792-.31 1.667C3.634 7.317 3.625 7.6 3.625 10s.009 2.683.052 3.625c.04.875.187 1.35.31 1.667.163.418.358.717.671 1.03.313.313.612.508 1.03.671.317.123.792.27 1.667.31.942.043 1.225.052 3.625.052s2.683-.009 3.625-.052c.875-.04 1.35-.187 1.667-.31.418-.163.717-.358 1.03-.671.313-.313.508-.612.671-1.03.123-.317.27-.792.31-1.667.043-.942.052-1.225.052-3.625s-.009-2.683-.052-3.625c-.04-.875-.187-1.35-.31-1.667-.163-.418-.358-.717-.671-1.03-.313-.313-.612-.508-1.03-.671-.317-.123-.792-.27-1.667-.31C12.683 3.634 12.4 3.625 10 3.625zm0 2.5a3.875 3.875 0 100 7.75 3.875 3.875 0 000-7.75zm0 1.125a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm4.938-1.313a.906.906 0 11-1.812 0 .906.906 0 011.812 0z" clipRule="evenodd"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-secondary-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}