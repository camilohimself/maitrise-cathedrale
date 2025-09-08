export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.9)',
        padding: '1rem 2rem',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            backgroundColor: '#f59e0b',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '1.25rem'
          }}>
            M
          </div>
          <span style={{ color: 'white', fontWeight: '300' }}>Maîtrise Cathédrale</span>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#agenda" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem' }}>Agenda</a>
          <a href="#maitrise" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem' }}>La Maîtrise</a>
          <a href="#media" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem' }}>Écouter & voir</a>
          <a href="#soutenir" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem' }}>Nous soutenir</a>
          <button style={{
            backgroundColor: '#f59e0b',
            color: 'black',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            fontWeight: '500',
            cursor: 'pointer'
          }}>
            Festival d&apos;Art Sacré
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #b45309 0%, #78716c 50%, #000000 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)'
        }}></div>
        
        <div style={{
          position: 'relative',
          zIndex: 20,
          textAlign: 'center',
          maxWidth: '1024px',
          padding: '0 1.5rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontFamily: 'Georgia, serif',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            color: 'white'
          }}>
            Voix d&apos;exception
            <br />
            <span style={{ color: '#f59e0b' }}>au cœur de la</span>
            <br />
            Cathédrale
          </h1>
          
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '768px',
            margin: '0 auto 2.5rem auto',
            lineHeight: '1.7'
          }}>
            La Maîtrise de la Cathédrale de Sion, c&apos;est bien plus qu&apos;un chœur : 
            c&apos;est une aventure humaine, artistique et spirituelle. 
            De jeunes chanteurs passionnés, formés dès le plus jeune âge, 
            unissent leurs voix pour faire vibrer la cathédrale au rythme du 
            chant sacré.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'transparent',
              border: '1px solid #f59e0b',
              color: '#f59e0b',
              borderRadius: '9999px',
              fontWeight: '500',
              cursor: 'pointer',
              gap: '0.5rem'
            }}>
              En savoir plus
              <span>→</span>
            </button>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#f59e0b',
              color: 'black',
              border: 'none',
              borderRadius: '9999px',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Voir l&apos;agenda
            </button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="agenda" style={{ padding: '5rem 1.5rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '3rem',
            fontFamily: 'Georgia, serif',
            color: '#f59e0b',
            marginBottom: '2rem'
          }}>
            Événements
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '3rem' }}>
            Découvrez nos prochains concerts et célébrations
          </p>
          <button style={{
            backgroundColor: 'transparent',
            border: '1px solid #000',
            color: '#000',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            fontWeight: '500',
            cursor: 'pointer'
          }}>
            Découvrir tous les événements
          </button>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" style={{ padding: '5rem 1.5rem', backgroundColor: '#1e3a8a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '3rem',
            fontFamily: 'Georgia, serif',
            color: '#fbbf24',
            marginBottom: '2rem'
          }}>
            Écouter & Voir
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '3rem' }}>
            Découvrez notre répertoire et nos performances
          </p>
          <button style={{
            backgroundColor: 'transparent',
            border: '1px solid #fbbf24',
            color: '#fbbf24',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            fontWeight: '500',
            cursor: 'pointer'
          }}>
            Découvrir notre médiathèque
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2.5rem 1.5rem', backgroundColor: '#000', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.6)' }}>
          © 2025 Maîtrise de la Cathédrale de Sion. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}