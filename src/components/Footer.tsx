import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const partners = [
    { name: 'Canton du Valais', logo: '/logos/valais.png' },
    { name: 'Ville de Sion', logo: '/logos/sion.png' },
    { name: 'Loterie Romande', logo: '/logos/loterie.png' },
    { name: 'Fondation Culturelle', logo: '/logos/fondation.png' },
  ];

  const quickLinks = [
    { href: '#agenda', label: 'Agenda' },
    { href: '#maitrise', label: 'La Maîtrise' },
    { href: '#ecole', label: 'École de chant' },
    { href: '#soutenir', label: 'Nous soutenir' },
  ];

  const contact = {
    address: 'Rue de la Cathédrale 13',
    city: '1950 Sion',
    phone: '+41 27 322 80 66',
    email: 'info@maitrise-cathedrale.ch'
  };

  return (
    <footer className="bg-black pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Partners Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif text-[var(--primary-gold)] text-center mb-10">
            Nos partenaires
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner) => (
              <div key={partner.name} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="bg-white/10 rounded p-4 h-full flex items-center justify-center">
                    <span className="text-white/60 text-sm">{partner.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[var(--primary-gold)] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">M</span>
                </div>
                <span className="text-white font-light">Maîtrise Cathédrale</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Une tradition séculaire au service de la musique sacrée et de la formation des jeunes chanteurs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/60 hover:text-[var(--primary-gold)] transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="text-white/60">{contact.address}</p>
                <p className="text-white/60">{contact.city}</p>
                <p className="text-white/60">{contact.phone}</p>
                <a href={`mailto:${contact.email}`} className="text-[var(--primary-gold)] hover:text-white transition-colors block">
                  {contact.email}
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-medium mb-4">Newsletter</h4>
              <p className="text-white/60 text-sm mb-4">
                Recevez nos actualités et prochains événements
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--primary-gold)] transition-colors"
                />
                <button type="submit" className="btn-secondary w-full text-sm">
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm mb-4 md:mb-0">
              © 2025 Maîtrise de la Cathédrale de Sion. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/40 hover:text-[var(--primary-gold)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-white/40 hover:text-[var(--primary-gold)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
              <a href="#" className="text-white/40 hover:text-[var(--primary-gold)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-white/40 hover:text-[var(--primary-gold)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}