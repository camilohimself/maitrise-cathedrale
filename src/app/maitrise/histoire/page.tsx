import Link from 'next/link';
import fondationContent from '@/data/fondationContent';

export default function HistoirePage() {
  const { historique } = fondationContent;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      {/* Breadcrumb */}
      <div style={{ 
        backgroundColor: '#fff', 
        padding: '16px 20px',
        borderBottom: '1px solid #e0e0e0',
        fontSize: '14px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href="/maitrise" style={{ color: '#E33241', textDecoration: 'none' }}>
            La Maîtrise
          </Link>
          <span style={{ margin: '0 8px', color: '#999' }}>→</span>
          <span style={{ color: '#666' }}>Histoire</span>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #E33241 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '16px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            {historique.title}
          </h1>
          <p style={{
            fontSize: '1.4rem',
            fontWeight: '300',
            opacity: 0.9,
            margin: 0
          }}>
            {historique.subtitle}
          </p>
        </div>
      </div>

      {/* Hero Image Placeholder */}
      <div style={{
        maxWidth: '1200px',
        margin: '-60px auto 0',
        padding: '0 20px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          width: '100%',
          height: '400px',
          backgroundColor: 'rgba(255,255,255,0.95)',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '3px dashed #e0e0e0'
        }}>
          <div style={{ textAlign: 'center', color: '#666' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🏛️</div>
            <p style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>
              Voûtes historique
            </p>
            <p style={{ margin: '8px 0 4px 0', fontSize: '16px' }}>
              Photo: {historique.heroImage.credit.replace('Photo: ', '')}
            </p>
            <p style={{ margin: 0, fontSize: '14px', opacity: 0.7 }}>
              Image à intégrer - {historique.heroImage.url}
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div style={{ padding: '120px 20px 80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Naissance section */}
          <section style={{ marginBottom: '80px' }}>
            <div style={{
              backgroundColor: '#E33241',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '600',
              display: 'inline-block',
              marginBottom: '24px'
            }}>
              📅 {historique.sections.naissance.date}
            </div>
            
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
              {historique.sections.naissance.title}
            </h2>
            
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: '#444',
              margin: 0
            }}>
              {historique.sections.naissance.content}
            </p>
          </section>

          {/* Mission section */}
          <section style={{ marginBottom: '80px' }}>
            <div style={{
              backgroundColor: '#D2AB5F',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '600',
              display: 'inline-block',
              marginBottom: '24px'
            }}>
              🎯 {historique.sections.mission.focus}
            </div>
            
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
              {historique.sections.mission.title}
            </h2>
            
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: '#444',
              margin: 0
            }}>
              {historique.sections.mission.content}
            </p>
          </section>

          {/* Formation section */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
              {historique.sections.formation.title}
            </h2>
            
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '40px',
              borderRadius: '16px',
              border: '1px solid #e9ecef',
              borderLeft: '6px solid #E33241'
            }}>
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: '#444',
                margin: 0,
                fontStyle: 'italic'
              }}>
                {historique.sections.formation.content}
              </p>
            </div>
          </section>

          {/* Lieu section with image placeholder */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
              {historique.sections.lieu.title}
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'center',
              marginBottom: '40px'
            }} className="grid-responsive">
              <div>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  color: '#444',
                  margin: 0
                }}>
                  {historique.sections.lieu.content}
                </p>
              </div>
              
              <div style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed #ddd'
              }}>
                <div style={{ textAlign: 'center', color: '#666' }}>
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>⛪</div>
                  <p style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>
                    Cathédrale extérieur Sion
                  </p>
                  <p style={{ margin: '4px 0 0 0', fontSize: '14px', opacity: 0.7 }}>
                    Photo: {historique.sections.lieu.image.credit.replace('Photo: ', '')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section style={{ 
            backgroundColor: '#fff', 
            padding: '60px',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              📹 Témoignages vidéo
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              {historique.videos.map((video, index) => (
                <div key={index} style={{
                  border: '2px dashed #E33241',
                  borderRadius: '12px',
                  padding: '40px 20px',
                  textAlign: 'center',
                  backgroundColor: '#fafafa'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>▶️</div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '16px',
                    lineHeight: '1.4'
                  }}>
                    {video.title}
                  </h3>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#666', 
                    margin: '12px 0 0 0',
                    wordBreak: 'break-all'
                  }}>
                    {video.url}
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#999',
                    margin: '8px 0 0 0',
                    fontStyle: 'italic'
                  }}>
                    Player YouTube à intégrer
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Navigation Footer */}
      <div style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>
            Continuez votre découverte
          </h3>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/maitrise/direction-musicale" 
              style={{
                backgroundColor: '#E33241',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600'
              }}
            >
              Organisation →
            </Link>
            <Link 
              href="/maitrise" 
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                border: '2px solid rgba(255,255,255,0.3)'
              }}
            >
              ← Retour à La Maîtrise
            </Link>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </main>
  );
}