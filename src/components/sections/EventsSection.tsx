'use client'

import Link from 'next/link'

export default function EventsSection() {
  const events = [
    {
      id: 1,
      title: 'LA PROCHAINE CANTATE DE BACH',
      date: 'JEUDI 15 AOÛT',
      time: '19H30',
      location: 'Cathédrale de Sion',
      description: 'Nobilitum usque aurium observentur inminuto nuptias artuum manibus inglorie ubi vel vel cavatis sunt inminuto artuum haec tamen ad instituta.',
      image: '/images/bach-cantata.jpg',
      category: 'concert'
    },
    {
      id: 2,
      title: 'Ensemble vocal et instrumental',
      date: 'DIMANCHE 30 NOVEMBRE',
      time: '',
      location: 'Cathédrale de Sion',
      description: '',
      image: '/images/ensemble-vocal.jpg',
      category: 'concert'
    },
    {
      id: 3,
      title: 'Festival d\'Art Sacré',
      date: 'DIMANCHE 30 NOVEMBRE',
      time: '',
      location: 'Cathédrale de Sion',
      description: '',
      image: '/images/festival-art-sacre.jpg',
      category: 'festival'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-secondary-400 mb-4">
            Événements
          </h2>
          <Link
            href="/agenda"
            className="inline-block btn-outline"
          >
            Découvrir
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Event */}
          <div className="lg:col-span-2 relative bg-white rounded-2xl overflow-hidden shadow-lg">
            <div 
              className="h-96 bg-cover bg-center relative"
              style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/bach-cantata.jpg")'
              }}
            >
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="mb-4">
                  <span className="text-secondary-400 font-medium text-sm">
                    {events[0].date} • {events[0].time}
                  </span>
                </div>
                <h3 className="text-3xl font-serif font-medium mb-4">
                  {events[0].title}
                </h3>
                <p className="text-gray-200 mb-6 max-w-lg">
                  {events[0].description}
                </p>
                <Link
                  href={`/agenda/${events[0].id}`}
                  className="inline-block bg-secondary-400 hover:bg-secondary-500 text-dark-900 px-6 py-3 rounded-full font-medium transition-colors duration-200 w-fit"
                >
                  Réserver
                </Link>
              </div>
            </div>
          </div>

          {/* Side Events */}
          <div className="space-y-6">
            {events.slice(1).map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div 
                  className="h-32 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("${event.image}")`
                  }}
                />
                <div className="p-6">
                  <div className="text-secondary-400 font-medium text-sm mb-2">
                    {event.date}
                  </div>
                  <h4 className="text-lg font-serif font-medium text-dark-900 mb-4">
                    {event.title}
                  </h4>
                  <Link
                    href={`/agenda/${event.id}`}
                    className="inline-block bg-secondary-400 hover:bg-secondary-500 text-dark-900 px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200"
                  >
                    Billet
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}