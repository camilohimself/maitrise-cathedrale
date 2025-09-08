import Link from 'next/link';
import fondationContent from '@/data/fondationContent';

export default function MaitrisePage() {
  const sections = [
    { 
      title: 'Histoire', 
      href: '/maitrise/histoire', 
      description: 'Des origines à aujourd\'hui, découvrez l\'histoire de notre Fondation',
      highlight: 'Fondée le 1er juin 2004'
    },
    { 
      title: 'Organisation', 
      href: '/maitrise/direction-musicale', 
      description: 'Conseil de Fondation et Bureau, notre structure de gouvernance',
      highlight: 'Direction & Fonctionnement'
    },
    { 
      title: 'Buts & Objectifs', 
      href: '/maitrise/prof-chant', 
      description: 'Mission et vision de la Fondation pour la musique sacrée',
      highlight: 'Pôle d\'excellence'
    },
    { 
      title: 'Membres Fondateurs', 
      href: '/maitrise/organiste', 
      description: 'Les institutions qui ont donné naissance à la Fondation',
      highlight: '6 membres fondateurs'
    },
    { 
      title: 'Association des Amis', 
      href: '/maitrise/ensemble-vocal', 
      description: 'Rejoignez notre communauté de soutien',
      highlight: 'Réduction concerts'
    },
    { 
      title: 'École Maîtrisienne', 
      href: '/maitrise/ecole-maitrisienne', 
      description: 'Formation musicale et spirituelle multiséculaire',
      highlight: 'Enseignement de qualité'
    }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #E33241 0%, #D2AB5F 50%, #2c3e50 100%)',
        color: 'white',
        padding: '80px 20px 60px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '24px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            La Maîtrise
          </h1>
          
          <div style={{
            width: '100%',
            height: '300px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '32px',
            border: '2px dashed rgba(255,255,255,0.3)'
          }}>
            <div style={{ textAlign: 'center', opacity: 0.7 }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🖼️</div>
              <p style={{ margin: 0, fontSize: '18px' }}>Voûtes historique - Photo: Robert Hofer</p>
              <p style={{ margin: '4px 0 0 0', fontSize: '14px', opacity: 0.8 }}>Image à intégrer</p>
            </div>
          </div>
          
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: 0.95,
            fontWeight: '300'
          }}>
            {fondationContent.introduction.shortDescription}
          </p>
        </div>
      </div>

      {/* Tagline Section */}
      <div style={{
        backgroundColor: '#fff',
        padding: '60px 20px',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: '600',
            color: '#E33241',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            lineHeight: '1.4',
            margin: 0
          }}>
            {fondationContent.introduction.tagline}
          </h2>
        </div>
      </div>

      {/* Navigation Cards */}
      <div style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: '700',
            color: '#2c3e50',
            textAlign: 'center',
            marginBottom: '24px'
          }}>
            Découvrir la Fondation
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px auto'
          }}>
            Explorez les différents aspects de notre Fondation et de la Maîtrise de la Cathédrale
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            {sections.map((section, index) => (
              <Link 
                key={section.href} 
                href={section.href}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #f0f0f0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: '#E33241',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    alignSelf: 'flex-start',
                    marginBottom: '20px'
                  }}>
                    {section.highlight}
                  </div>

                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#2c3e50',
                    marginBottom: '16px',
                    margin: '0 0 16px 0'
                  }}>
                    {section.title}
                  </h3>
                  
                  <p style={{
                    color: '#666',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    margin: 0,
                    flexGrow: 1
                  }}>
                    {section.description}
                  </p>

                  <div style={{
                    marginTop: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#E33241',
                    fontWeight: '600',
                    fontSize: '14px'
                  }}>
                    <span>En savoir plus</span>
                    <span style={{ 
                      marginLeft: '8px', 
                      transition: 'transform 0.3s ease',
                      display: 'inline-block'
                    }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Anniversary Highlight */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '60px 20px',
        borderTop: '1px solid #e0e0e0'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
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
            ✨ {fondationContent.anniversaire.title}
          </div>
          
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#2c3e50',
            marginBottom: '16px'
          }}>
            {fondationContent.anniversaire.date}
          </h3>
          
          <p style={{
            color: '#666',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            margin: 0
          }}>
            {fondationContent.anniversaire.description}
          </p>
        </div>
      </div>
    </main>
  );
}