import Link from 'next/link';

export default function Soutenir() {
  const sections = [
    { title: 'Amis de la Maîtrise', href: '/soutenir/amis-maitrise', description: 'Rejoignez l\'association des Amis de la Maîtrise' },
    { title: 'Partenaires', href: '/soutenir/partenaires', description: 'Nos partenaires et mécènes' },
    { title: 'Contact', href: '/soutenir/contact', description: 'Contactez-nous pour nous soutenir' }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-cathedral-red mb-8">Nous soutenir</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link key={section.href} href={section.href}>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold text-cathedral-red mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}