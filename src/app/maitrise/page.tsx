import fondationContent from '@/data/fondationContent';

export default function MaitrisePage() {
  // Données Conseil de Fondation du PDF
  const conseilFondation = [
    { poste: "Président", nom: "M. Pierre-Christian von Roten" },
    { poste: "Vice-président", nom: "M. Johan Beltramini" },
    { poste: "Directeur artistique", nom: "M. Jean-David Waeber" },
    { poste: "Représentant de l'évêché", nom: "Mgr Pierre-Yves Maillard" },
    { poste: "Représentant du Chapitre cathédral", nom: "Mgr Pierre-Yves Maillard" },
    { poste: "Représentant de la Paroisse de la Cathédrale", nom: "Abbé François Roten" },
    { poste: "Représentant de la municipalité de Sion", nom: "Mme Carole Schmid" },
    { poste: "Représentante de la Bourgeoisie de Sion", nom: "Mme Elisabeth Bourban Carthobiaz" },
    { poste: "Représentant du Conservatoire cantonal", nom: "M. Thierry Debons" },
    { poste: "Représentante de l'Association des Amis", nom: "Pierre-Alain Héritier" }
  ];

  return (
    <div style={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
      {/* Hero Section - Magazine Style */}
      <div style={{
        background: 'linear-gradient(135deg, #040A23 0%, #1a1a2e 30%, #2c3e50 70%, #34495e 100%)',
        color: '#ffffff',
        padding: '80px 20px 100px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'url(/images/cathedral-pattern.jpg) center/cover',
          opacity: '0.1',
          zIndex: '1'
        }} />
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: '2' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(45deg, #D2AB5F, #E6C068)',
              padding: '8px 24px',
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: '700',
              color: '#040A23',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Fondée le 1er juin 2004
            </div>
            
            <h1 style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: '900',
              marginBottom: '30px',
              textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
              background: 'linear-gradient(135deg, #ffffff, #D2AB5F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.1'
            }}>
              La Maîtrise
            </h1>
            
            <p style={{
              fontSize: 'clamp(1.3rem, 3vw, 2rem)',
              lineHeight: '1.4',
              maxWidth: '900px',
              margin: '0 auto',
              opacity: '0.95',
              fontWeight: '300',
              color: '#D2AB5F'
            }}>
              Voix d'exception au cœur de la Cathédrale
            </p>
          </div>
          
          {/* Hero Image Placeholder - Grande taille magazine */}
          <div style={{
            width: '100%',
            height: '500px',
            background: 'linear-gradient(135deg, rgba(210,171,95,0.2), rgba(4,10,35,0.3))',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px dashed rgba(210,171,95,0.4)',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ textAlign: 'center', opacity: 0.8 }}>
              <div style={{ fontSize: '72px', marginBottom: '20px' }}>🏰</div>
              <p style={{ margin: 0, fontSize: '24px', fontWeight: '600' }}>Cathédrale de Sion - Vue majestueuse</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '16px', opacity: 0.7 }}>Photo principale à intégrer - Format paysage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Histoire - Design Magazine Asymétrique */}
      <div style={{ padding: '100px 20px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Titre Section avec ornement */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              display: 'inline-block',
              background: '#E33241',
              width: '60px',
              height: '4px',
              borderRadius: '2px',
              marginBottom: '20px'
            }} />
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              color: '#2c3e50',
              marginBottom: '15px',
              letterSpacing: '-1px'
            }}>
              Des origines à aujourd'hui
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: '#666',
              fontStyle: 'italic',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              L'histoire d'une fondation au service de la musique sacrée
            </p>
          </div>

          {/* Layout Magazine - 2 colonnes asymétriques */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '60px',
            alignItems: 'start',
            marginBottom: '80px'
          }}>
            {/* Colonne principale - Texte */}
            <div>
              <div style={{
                fontSize: '1.4rem',
                lineHeight: '1.8',
                color: '#2c3e50'
              }}>
                <p style={{
                  fontSize: '1.6rem',
                  fontWeight: '500',
                  marginBottom: '30px',
                  color: '#E33241',
                  borderLeft: '4px solid #D2AB5F',
                  paddingLeft: '20px'
                }}>
                  La Fondation a vu le jour le 1er juin 2004 lors d'une cérémonie à l'évêché de Sion.
                </p>
                
                <p style={{ marginBottom: '25px' }}>
                  On citera, au nombre des fondateurs, le Vénérable Chapitre de la Cathédrale de Sion, 
                  la Paroisse de la Cathédrale, l'évêque de Sion, mais aussi des organismes laïcs tels 
                  la Municipalité de Sion, la Bourgeoisie de Sion et le Conservatoire cantonal de Musique.
                </p>
                
                <p style={{ marginBottom: '25px' }}>
                  La participation de ceux-ci montre l'intérêt de la collectivité pour l'émergence, à Sion, 
                  d'une structure destinée à promouvoir la musique sacrée et à se spécialiser dans ce 
                  registre si particulier.
                </p>
              </div>
            </div>
            
            {/* Colonne droite - Image portrait */}
            <div>
              <div style={{
                width: '100%',
                height: '400px',
                background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed #D2AB5F',
                marginBottom: '20px'
              }}>
                <div style={{ textAlign: 'center', opacity: 0.7 }}>
                  <div style={{ fontSize: '48px', marginBottom: '15px' }}>📜</div>
                  <p style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Cérémonie de fondation</p>
                  <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>1er juin 2004</p>
                </div>
              </div>
            </div>
          </div>

          {/* Citation en exergue - Style magazine */}
          <div style={{
            background: 'linear-gradient(135deg, #040A23, #1a1a2e)',
            color: '#ffffff',
            padding: '50px 40px',
            borderRadius: '20px',
            textAlign: 'center',
            marginBottom: '80px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '40px',
              fontSize: '120px',
              color: '#D2AB5F',
              opacity: '0.3',
              fontFamily: 'serif'
            }}>
              "
            </div>
            
            <p style={{
              fontSize: '1.8rem',
              fontWeight: '400',
              lineHeight: '1.6',
              margin: '0 0 20px 0',
              fontStyle: 'italic',
              position: 'relative',
              zIndex: '2'
            }}>
              La première tâche de la Fondation a été de bâtir formellement la Maîtrise de la Cathédrale.
            </p>
            
            <div style={{
              fontSize: '1rem',
              color: '#D2AB5F',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              — Bernard Héritier, la Maîtrise de la cathédrale
            </div>
          </div>

          {/* Continuation du texte - Layout inversé */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '60px',
            alignItems: 'start',
            marginBottom: '80px'
          }}>
            {/* Image panoramique gauche */}
            <div>
              <div style={{
                width: '100%',
                height: '300px',
                background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed #E33241',
                marginBottom: '20px'
              }}>
                <div style={{ textAlign: 'center', opacity: 0.7 }}>
                  <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎼</div>
                  <p style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>École maîtrisienne</p>
                  <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>Formation musicale</p>
                </div>
              </div>
            </div>
            
            {/* Texte suite */}
            <div>
              <div style={{
                fontSize: '1.4rem',
                lineHeight: '1.8',
                color: '#2c3e50'
              }}>
                <p style={{ marginBottom: '25px' }}>
                  Cette Maîtrise est conçue comme une structure permettant de réunir les différentes 
                  forces musicales et religieuses qui se partagent l'animation musicale des offices 
                  célébrés à la Cathédrale de Sion.
                </p>
                
                <p style={{ marginBottom: '25px' }}>
                  La Fondation entend surtout poursuivre l'œuvre de formation musicale et spirituelle, 
                  qui est l'intuition originelle et multiséculaire des Maîtrises cathédrales, par la 
                  création, le soutien et le développement d'une de ses composantes principales : 
                  l'École maîtrisienne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Organisation - Background alternatif */}
      <div style={{ padding: '100px 20px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              display: 'inline-block',
              background: '#D2AB5F',
              width: '60px',
              height: '4px',
              borderRadius: '2px',
              marginBottom: '20px'
            }} />
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              color: '#2c3e50',
              marginBottom: '15px',
              letterSpacing: '-1px'
            }}>
              Organisation & Fonctionnement
            </h2>
          </div>

          {/* Conseil de Fondation - Grille élégante */}
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '50px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            marginBottom: '60px'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#040A23',
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              Conseil de Fondation
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '25px'
            }}>
              {conseilFondation.map((membre, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px',
                  background: index % 2 === 0 ? '#f8f9fa' : '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#E33241',
                    flex: '1'
                  }}>
                    {membre.poste}
                  </div>
                  <div style={{
                    fontSize: '1.1rem',
                    color: '#2c3e50',
                    fontWeight: '500',
                    textAlign: 'right',
                    flex: '1'
                  }}>
                    {membre.nom}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Description Bureau */}
          <div style={{
            background: 'linear-gradient(135deg, #E33241, #c0392b)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '50px',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              marginBottom: '25px',
              color: '#ffffff'
            }}>
              Bureau de la Fondation
            </h3>
            <p style={{
              fontSize: '1.3rem',
              lineHeight: '1.7',
              opacity: '0.95',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              La gestion courante, l'administration et le secrétariat, de même que l'organisation 
              du Festival d'art sacré, de l'École cathédrale et des concerts est assumée par le 
              Bureau de la Fondation en réunions mensuelles.
            </p>
          </div>
        </div>
      </div>

      {/* Section 20 ans - Highlight final */}
      <div style={{
        background: 'linear-gradient(135deg, #040A23 0%, #1a1a2e 100%)',
        color: '#ffffff',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(45deg, #D2AB5F, #E6C068)',
            color: '#040A23',
            padding: '12px 30px',
            borderRadius: '30px',
            fontSize: '16px',
            fontWeight: '700',
            display: 'inline-block',
            marginBottom: '30px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            ✨ 20 ans de la Fondation
          </div>
          
          <h3 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            marginBottom: '20px',
            color: '#D2AB5F'
          }}>
            2 juin 2024
          </h3>
          
          <p style={{
            fontSize: '1.4rem',
            lineHeight: '1.7',
            opacity: '0.95',
            margin: 0
          }}>
            La Fondation Musique Sacrée et Maîtrise de la Cathédrale de Sion a fêté ses 20 ans 
            avec un concert anniversaire extraordinaire et un partage festif et chaleureux dans 
            les jardins de l'Evêché.
          </p>
        </div>
      </div>
    </div>
  );
}