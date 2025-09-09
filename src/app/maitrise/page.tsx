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

      {/* Section Direction Musicale - Style magazine premium */}
      <div style={{ padding: '100px 20px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Titre section avec ornement doré */}
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
              Direction Musicale
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: '#E33241',
              fontStyle: 'italic',
              maxWidth: '600px',
              margin: '0 auto',
              fontWeight: '500'
            }}>
              Jean-David Waeber • Printemps 2022
            </p>
          </div>

          {/* Layout magazine - Portrait + Bio asymétrique */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(300px, 1fr, 400px) 2fr',
            gap: 'clamp(30px, 6vw, 60px)',
            alignItems: 'start',
            marginBottom: '60px'
          }}>
            
            {/* Photo portrait - Colonne gauche */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div style={{
                width: '100%',
                height: '500px',
                background: 'linear-gradient(135deg, #040A23 0%, #1a1a2e 50%, #D2AB5F 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid rgba(210,171,95,0.3)',
                marginBottom: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Pattern overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at 30% 70%, rgba(210,171,95,0.2) 0%, transparent 50%)',
                  zIndex: 1
                }} />
                
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                  <div style={{ 
                    fontSize: '80px', 
                    marginBottom: '20px',
                    background: 'linear-gradient(45deg, #D2AB5F, #ffffff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>🎼</div>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '20px', 
                    fontWeight: '700', 
                    color: '#ffffff',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    Jean-David Waeber
                  </p>
                  <p style={{ 
                    margin: '8px 0 0 0', 
                    fontSize: '14px', 
                    color: '#D2AB5F',
                    fontWeight: '500'
                  }}>
                    Photo portrait à intégrer
                  </p>
                </div>
              </div>

              {/* Badge directeur */}
              <div style={{
                background: 'linear-gradient(135deg, #E33241, #c0392b)',
                color: '#ffffff',
                padding: '15px 20px',
                borderRadius: '15px',
                textAlign: 'center',
                transform: 'rotate(-2deg)',
                boxShadow: '0 10px 30px rgba(227,50,65,0.3)'
              }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '5px'
                }}>
                  Directeur Musical
                </div>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '800'
                }}>
                  Maîtrise de la Cathédrale
                </div>
              </div>
            </div>

            {/* Bio complète - Colonne droite */}
            <div>
              
              {/* Introduction en exergue */}
              <div style={{
                background: 'linear-gradient(135deg, #f8f9fa, #ffffff)',
                border: '2px solid #D2AB5F',
                borderRadius: '15px',
                padding: '30px',
                marginBottom: '40px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '30px',
                  background: '#D2AB5F',
                  color: '#040A23',
                  padding: '8px 15px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Nouveau Directeur
                </div>
                
                <p style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  color: '#E33241',
                  lineHeight: '1.6',
                  margin: '20px 0 0 0',
                  fontStyle: 'italic'
                }}>
                  Jean-David Waeber a repris la direction musicale de la Maîtrise de la Cathédrale de Sion au printemps 2022.
                </p>
              </div>

              {/* Formation musicale */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  color: '#040A23',
                  marginBottom: '20px',
                  borderLeft: '4px solid #E33241',
                  paddingLeft: '15px'
                }}>
                  Formation & Perfectionnements
                </h3>
                
                <div style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#2c3e50',
                  marginBottom: '25px'
                }}>
                  <p style={{ marginBottom: '20px' }}>
                    Études d'orgue avec <strong>Jean-François Vaucher</strong> au Conservatoire de Lausanne, puis avec 
                    <strong> Maurizio Croci</strong> à la Haute École de Musique de Lausanne, parallèlement à des études 
                    de Lettres à l'Université de Fribourg.
                  </p>
                  
                  <p style={{ marginBottom: '20px' }}>
                    Perfectionnement en musique ancienne à la <strong>Civica Scuola di Musica de Milan</strong> avec 
                    <strong>Lorenzo Ghielmi</strong>. Formation complémentaire en direction chorale auprès de 
                    <strong> Markus Utz</strong> à la Haute École d'Arts de Zürich (CAS).
                  </p>
                </div>
              </div>

              {/* Masterclasses - Style encadré */}
              <div style={{
                background: '#040A23',
                color: '#ffffff',
                padding: '30px',
                borderRadius: '15px',
                marginBottom: '40px'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#D2AB5F',
                  marginBottom: '15px'
                }}>
                  Masterclasses avec les maîtres
                </h4>
                <div style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  opacity: '0.9',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '10px'
                }}>
                  <span>• Luigi Ferdinando Tagliavini</span>
                  <span>• Michael Radulescu</span>
                  <span>• Pieter van Dijk</span>
                  <span>• José Luis Gonzalez Uriol</span>
                  <span>• Maurizio Salerno</span>
                  <span>• Matthias Spaeter</span>
                  <span>• Hans Davidson</span>
                </div>
              </div>

              {/* Expérience professionnelle */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  color: '#040A23',
                  marginBottom: '20px',
                  borderLeft: '4px solid #D2AB5F',
                  paddingLeft: '15px'
                }}>
                  Parcours Professionnel
                </h3>
                
                <div style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#2c3e50'
                }}>
                  <p style={{ marginBottom: '20px' }}>
                    Organiste dans les cantons de Vaud et Fribourg depuis l'adolescence, avant de devenir 
                    <strong> organiste adjoint de la Cathédrale de Sion</strong>. Pratique régulière de la musique 
                    de chambre au clavecin et à l'orgue.
                  </p>
                  
                  <p style={{ marginBottom: '20px' }}>
                    Collaboration avec des orchestres prestigieux : <strong>Orchestre de Chambre de Lausanne</strong>, 
                    Orchestre de Chambre de Fribourg, Ensemble Valéik, Orchestre della Civica Scuola di Musica Claudio Abbado.
                  </p>
                </div>
              </div>

              {/* Activités actuelles - Grid moderne */}
              <div style={{
                background: 'linear-gradient(135deg, #E33241, #c0392b)',
                color: '#ffffff',
                padding: '40px',
                borderRadius: '20px',
                marginBottom: '40px'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '25px',
                  textAlign: 'center'
                }}>
                  Activités Actuelles
                </h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '25px'
                }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '20px',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>
                      Maître de Chapelle
                    </div>
                    <div style={{ fontSize: '0.95rem', opacity: '0.9', lineHeight: '1.5' }}>
                      Direction mensuelle d'un vaste répertoire : chant grégorien, cantates de Bach, 
                      messes classiques, compositions originales
                    </div>
                  </div>
                  
                  <div style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '20px',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>
                      École Maîtrisienne
                    </div>
                    <div style={{ fontSize: '0.95rem', opacity: '0.9', lineHeight: '1.5' }}>
                      Formation de 30 jeunes chanteuses, chanteurs et instrumentistes
                    </div>
                  </div>
                  
                  <div style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '20px',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>
                      Enseignement
                    </div>
                    <div style={{ fontSize: '0.95rem', opacity: '0.9', lineHeight: '1.5' }}>
                      Lycée-Collège des Creusets de Sion
                    </div>
                  </div>
                </div>
              </div>

              {/* Projets musicaux récents */}
              <div style={{
                background: 'linear-gradient(135deg, #f8f9fa, #ffffff)',
                border: '2px solid #D2AB5F',
                borderRadius: '15px',
                padding: '30px'
              }}>
                <h4 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: '#040A23',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Projets & Ensembles
                </h4>
                
                <div style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: '#2c3e50',
                  textAlign: 'center'
                }}>
                  <p style={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#E33241' }}>2023 :</strong> Fondation de l'ensemble 
                    <strong> Ad Astra</strong> (musique baroque et Renaissance en voix féminines)
                  </p>
                  <p style={{ marginBottom: '15px' }}>
                    Direction du <strong>Chœur Ardito de Lausanne</strong>
                  </p>
                  <p style={{ margin: 0 }}>
                    Approche jazz avec le pianiste <strong>Moncef Genoud</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Organistes - Layout Magazine Créatif */}
      <div style={{ padding: '100px 20px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Titre section avec ornement orgue */}
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
              Les Organistes
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: '#666',
              fontStyle: 'italic',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Gardiens de la tradition musicale sacrée
            </p>
          </div>

          {/* Organiste Titulaire - Edmond Voeffray */}
          <div style={{
            background: '#ffffff',
            borderRadius: '25px',
            padding: '60px',
            marginBottom: '60px',
            boxShadow: '0 25px 70px rgba(0,0,0,0.08)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            
            {/* Pattern décoratif */}
            <div style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(210,171,95,0.1) 0%, transparent 70%)',
              borderRadius: '50%'
            }} />

            {/* Badge Titulaire */}
            <div style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              background: 'linear-gradient(135deg, #D2AB5F, #E6C068)',
              color: '#040A23',
              padding: '12px 20px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 8px 25px rgba(210,171,95,0.3)'
            }}>
              Organiste Titulaire
            </div>

            {/* Layout asymétrique créatif */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: 'clamp(40px, 8vw, 80px)',
              alignItems: 'start'
            }}>
              
              {/* Bio Edmond - Colonne principale */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                
                <h3 style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '800',
                  color: '#E33241',
                  marginBottom: '15px',
                  lineHeight: '1.1'
                }}>
                  Edmond Voeffray
                </h3>

                {/* Formation en highlight */}
                <div style={{
                  background: 'linear-gradient(135deg, #040A23, #1a1a2e)',
                  color: '#ffffff',
                  padding: '25px',
                  borderRadius: '15px',
                  marginBottom: '30px',
                  borderLeft: '5px solid #D2AB5F'
                }}>
                  <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.6',
                    margin: 0,
                    opacity: '0.95'
                  }}>
                    <strong style={{ color: '#D2AB5F' }}>Formation :</strong> Diplôme supérieur d'orgue 
                    (Conservatoire Lausanne, 1996) • Études en Allemagne du Nord avec 
                    <strong> Harald Vogel</strong> • Diplôme de concert (2008, Prof. Kei Koito)
                  </p>
                </div>

                {/* Activités & Publications */}
                <div style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#2c3e50',
                  marginBottom: '30px'
                }}>
                  <p style={{ marginBottom: '20px' }}>
                    <strong>Expert reconnu</strong> : Collaborateur régulier à la « Tribune de l'orgue » 
                    et auteur d'articles spécialisés, notamment sur la restauration de l'orgue de Valère 
                    (le plus ancien orgue jouable au monde) et les orgues du Guatemala.
                  </p>
                  
                  <p style={{ marginBottom: '20px' }}>
                    <strong>Parcours professionnel</strong> : Ancien organiste de Martigny-Ville, 
                    choisi sur concours comme organiste titulaire de la Cathédrale de Sion. 
                    Licencié ès sciences mathématiques (Université de Lausanne).
                  </p>
                </div>

                {/* Engagements - Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '20px',
                  marginBottom: '25px'
                }}>
                  <div style={{
                    background: 'rgba(210,171,95,0.1)',
                    padding: '20px',
                    borderRadius: '12px',
                    border: '1px solid rgba(210,171,95,0.2)'
                  }}>
                    <div style={{ fontSize: '1rem', fontWeight: '600', color: '#E33241', marginBottom: '8px' }}>
                      Présidences & Comités
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.5' }}>
                      • Président AOR Valais-Romand<br/>
                      • Comité Festival international orgue ancien Valère<br/>
                      • Ex-président JM Martigny (jusqu'en 2005)
                    </div>
                  </div>
                  
                  <div style={{
                    background: 'rgba(227,50,65,0.1)',
                    padding: '20px',
                    borderRadius: '12px',
                    border: '1px solid rgba(227,50,65,0.2)'
                  }}>
                    <div style={{ fontSize: '1rem', fontWeight: '600', color: '#D2AB5F', marginBottom: '8px' }}>
                      Recherche & Enregistrements
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.5' }}>
                      • Recherches historiques orgues Valais<br/>
                      • Enregistrements Radio Suisse-Alémanique<br/>
                      • Orgues anciens St-Séverin & Martigny
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo + Orgue placeholder - Colonne droite */}
              <div>
                {/* Photo portrait Edmond */}
                <div style={{
                  width: '100%',
                  height: '350px',
                  background: 'linear-gradient(135deg, #E33241 0%, #c0392b 50%, #040A23 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '25px',
                  border: '3px solid rgba(227,50,65,0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.1) 0%, transparent 60%)'
                  }} />
                  
                  <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    <div style={{ 
                      fontSize: '70px', 
                      marginBottom: '15px',
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
                    }}>🎹</div>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '18px', 
                      fontWeight: '700', 
                      color: '#ffffff',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      Edmond Voeffray
                    </p>
                    <p style={{ 
                      margin: '5px 0 0 0', 
                      fontSize: '13px', 
                      color: 'rgba(255,255,255,0.8)'
                    }}>
                      Photo portrait à intégrer
                    </p>
                  </div>
                </div>

                {/* Mini showcase orgue cathédrale */}
                <div style={{
                  background: 'linear-gradient(135deg, #f8f9fa, #ffffff)',
                  border: '2px dashed #D2AB5F',
                  borderRadius: '15px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '10px' }}>🏰</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#040A23', marginBottom: '5px' }}>
                    Grand Orgue Cathédrale
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    Photo instrument historique
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Organiste Adjointe - Catherine Gremaud-Babel */}
          <div style={{
            background: '#ffffff',
            borderRadius: '25px',
            padding: '50px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            
            {/* Pattern décoratif inversé */}
            <div style={{
              position: 'absolute',
              top: '-80px',
              left: '-80px',
              width: '250px',
              height: '250px',
              background: 'radial-gradient(circle, rgba(227,50,65,0.08) 0%, transparent 70%)',
              borderRadius: '50%'
            }} />

            {/* Badge Adjointe */}
            <div style={{
              position: 'absolute',
              top: '25px',
              left: '25px',
              background: 'linear-gradient(135deg, #E33241, #c0392b)',
              color: '#ffffff',
              padding: '10px 18px',
              borderRadius: '18px',
              fontSize: '13px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Organiste Adjointe
            </div>

            {/* Layout inversé créatif */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: 'clamp(40px, 8vw, 70px)',
              alignItems: 'start',
              marginTop: '30px'
            }}>
              
              {/* Photo + Vidéo Facebook - Colonne gauche */}
              <div>
                {/* Photo Catherine */}
                <div style={{
                  width: '100%',
                  height: '280px',
                  background: 'linear-gradient(135deg, #040A23 0%, #D2AB5F 100%)',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  border: '2px solid rgba(210,171,95,0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)'
                  }} />
                  
                  <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    <div style={{ fontSize: '60px', marginBottom: '12px' }}>🎼</div>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '16px', 
                      fontWeight: '600', 
                      color: '#ffffff',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.4)'
                    }}>
                      Catherine Gremaud-Babel
                    </p>
                    <p style={{ 
                      margin: '4px 0 0 0', 
                      fontSize: '11px', 
                      color: '#D2AB5F'
                    }}>
                      Photo portrait à intégrer
                    </p>
                  </div>
                </div>

                {/* Lien vidéo Facebook Terra Sancta Organ */}
                <div style={{
                  background: 'linear-gradient(135deg, #1877f2, #42a5f5)',
                  borderRadius: '12px',
                  padding: '15px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  boxShadow: '0 8px 20px rgba(24,119,242,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onClick={() => window.open('https://www.facebook.com/TerraSanctaOrgan/videos/1181084715695034/', '_blank')}>
                  
                  <div style={{ fontSize: '28px', marginBottom: '8px' }}>📺</div>
                  <div style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', marginBottom: '4px' }}>
                    Terra Sancta Organ
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '11px' }}>
                    Vidéo Facebook • Cliquer pour voir
                  </div>
                </div>
              </div>

              {/* Bio Catherine - Colonne principale */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                
                <h3 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  fontWeight: '700',
                  color: '#040A23',
                  marginBottom: '20px',
                  lineHeight: '1.2'
                }}>
                  Catherine Gremaud-Babel
                </h3>

                {/* Enseignement & Formation */}
                <div style={{
                  background: 'rgba(4,10,35,0.05)',
                  padding: '20px',
                  borderRadius: '12px',
                  borderLeft: '4px solid #E33241',
                  marginBottom: '25px'
                }}>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    color: '#2c3e50',
                    margin: 0
                  }}>
                    <strong style={{ color: '#E33241' }}>Pédagogue experte :</strong> Enseigne l'orgue 
                    et la théorie musicale, notamment lors de stages d'été. Ancienne professeure 
                    d'harmonie pratique au Conservatoire populaire de Genève.
                  </p>
                </div>

                {/* Recherche & Publications */}
                <div style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: '#2c3e50',
                  marginBottom: '25px'
                }}>
                  <p style={{ marginBottom: '18px' }}>
                    <strong>Recherche historique :</strong> Participation active à la restauration 
                    de l'orgue de l'église catholique de Carouge par ses recherches et la publication 
                    d'un livre spécialisé, dont elle fut titulaire.
                  </p>
                  
                  <p style={{ marginBottom: '18px' }}>
                    <strong>Expérience paroissiale :</strong> Travail dans plusieurs paroisses 
                    du canton de Vaud, accompagnement de solistes, chœurs et orchestres.
                  </p>
                </div>

                {/* Activité spéciale carillon */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(210,171,95,0.1), rgba(210,171,95,0.05))',
                  border: '2px solid rgba(210,171,95,0.3)',
                  borderRadius: '15px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '10px' }}>🔔</div>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#040A23',
                    marginBottom: '8px'
                  }}>
                    Carillonneuse
                  </div>
                  <div style={{
                    fontSize: '0.95rem',
                    color: '#666',
                    lineHeight: '1.5'
                  }}>
                    Fait résonner chaque année le carillon de la cathédrale St-Pierre de Genève 
                    lors des concerts estivaux
                  </div>
                </div>
              </div>
            </div>
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