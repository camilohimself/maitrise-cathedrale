'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  customBreadcrumbs?: BreadcrumbItem[];
  showBackButton?: boolean;
  pageTitle?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  customBreadcrumbs, 
  showBackButton = true, 
  pageTitle 
}) => {
  const pathname = usePathname();
  const router = useRouter();

  // Configuration des sections avec leurs titres
  const sectionConfig = {
    '/maitrise': {
      title: 'La Maîtrise',
      icon: '🎵',
      children: {
        '/maitrise/histoire': { title: 'Histoire', subtitle: 'Des origines à aujourd\'hui' },
        '/maitrise/direction-musicale': { title: 'Direction musicale', subtitle: 'Leadership artistique' },
        '/maitrise/ecole-maitrisienne': { title: 'École Maîtrisienne', subtitle: 'Formation d\'excellence' },
        '/maitrise/ensemble-vocal': { title: 'Ensemble vocal', subtitle: 'Voix d\'exception' },
        '/maitrise/choeur-gregorien': { title: 'Chœur Grégorien', subtitle: 'Tradition millénaire' },
        '/maitrise/chapelle-musicale': { title: 'Chapelle Musicale', subtitle: 'Instruments sacrés' },
        '/maitrise/organiste': { title: 'L\'Organiste', subtitle: 'Maître des claviers' },
        '/maitrise/prof-chant': { title: 'Professeur de chant', subtitle: 'Pédagogie vocale' }
      }
    },
    '/media': {
      title: 'Écouter & Voir',
      icon: '🎧',
      children: {
        '/media/ecouter-voir': { title: 'Écouter & voir', subtitle: 'Médiathèque' },
        '/media/cantates-bach': { title: 'Cantates de Bach', subtitle: 'Œuvres immortelles' },
        '/media/presse': { title: 'Presse', subtitle: 'Actualités & témoignages' }
      }
    },
    '/soutenir': {
      title: 'Nous soutenir',
      icon: '❤️',
      children: {
        '/soutenir/amis-maitrise': { title: 'Devenir Ami', subtitle: 'Rejoignez notre communauté' },
        '/soutenir/partenaires': { title: 'Partenaires', subtitle: 'Nos soutiens' },
        '/soutenir/contact': { title: 'Contact', subtitle: 'Nous écrire' }
      }
    },
    '/fas': {
      title: 'Festival d\'Art Sacré',
      icon: '⚡',
      children: {
        '/fas/programmation': { title: 'Programmation', subtitle: 'Événements à venir' },
        '/fas/artistes': { title: 'Artistes', subtitle: 'Talents internationaux' }
      }
    }
  };

  // Génération automatique des breadcrumbs basée sur le pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customBreadcrumbs) return customBreadcrumbs;
    
    const segments = pathname?.split('/').filter(segment => segment !== '') || [];
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Accueil', href: '/', isActive: pathname === '/' }
    ];

    let currentPath = '';
    
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;
      
      // Trouver la configuration pour ce chemin
      let label = segment;
      let found = false;

      // Chercher dans la configuration des sections
      Object.entries(sectionConfig).forEach(([sectionPath, sectionData]) => {
        if (currentPath === sectionPath) {
          label = sectionData.title;
          found = true;
        } else if (sectionData.children && sectionData.children[currentPath]) {
          label = sectionData.children[currentPath].title;
          found = true;
        }
      });

      if (!found) {
        // Fallback: capitaliser et remplacer les tirets
        label = segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }

      breadcrumbs.push({
        label,
        href: currentPath,
        isActive: isLast
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Gestion du bouton retour intelligent
  const handleBackClick = () => {
    if (breadcrumbs.length > 1) {
      const parentBreadcrumb = breadcrumbs[breadcrumbs.length - 2];
      router.push(parentBreadcrumb.href);
    } else {
      router.back();
    }
  };

  // Obtenir les informations contextuelles de la page actuelle
  const getCurrentPageInfo = () => {
    const currentPath = pathname || '';
    
    // Chercher dans la configuration
    for (const [sectionPath, sectionData] of Object.entries(sectionConfig)) {
      if (currentPath === sectionPath) {
        return {
          title: sectionData.title,
          icon: sectionData.icon,
          subtitle: `Section principale`
        };
      } else if (sectionData.children && sectionData.children[currentPath]) {
        return {
          title: sectionData.children[currentPath].title,
          icon: sectionData.icon,
          subtitle: sectionData.children[currentPath].subtitle,
          parentTitle: sectionData.title
        };
      }
    }

    return null;
  };

  const currentPageInfo = getCurrentPageInfo();

  if (pathname === '/') return null; // Pas de breadcrumbs sur la page d'accueil

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #e9ecef',
      padding: '16px 0',
      marginTop: '80px' // Compenser la hauteur du header fixe
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          {/* Breadcrumbs Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            {breadcrumbs.map((item, index) => (
              <div key={item.href} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                {index > 0 && (
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#6c757d" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="9,18 15,12 9,6"/>
                  </svg>
                )}
                
                {item.isActive ? (
                  <span style={{
                    color: '#E33241',
                    fontSize: '14px',
                    fontWeight: '600',
                    fontFamily: 'var(--font-family)'
                  }}>
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href}
                    style={{
                      color: '#6c757d',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      fontFamily: 'var(--font-family)',
                      transition: 'color 0.3s ease',
                      padding: '4px 8px',
                      borderRadius: '4px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#E33241';
                      e.currentTarget.style.backgroundColor = 'rgba(227, 50, 65, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#6c757d';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Bouton retour et informations de page */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            {/* Informations contextuelles */}
            {currentPageInfo && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#495057',
                fontSize: '13px'
              }}>
                <span style={{ fontSize: '16px' }}>{currentPageInfo.icon}</span>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px'
                }}>
                  <span style={{ fontWeight: '600', color: '#E33241' }}>
                    {currentPageInfo.title}
                  </span>
                  {currentPageInfo.subtitle && (
                    <span style={{ 
                      fontSize: '12px', 
                      color: '#6c757d',
                      fontStyle: 'italic' 
                    }}>
                      {currentPageInfo.subtitle}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Bouton retour */}
            {showBackButton && (
              <button
                onClick={handleBackClick}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  border: '1px solid #dee2e6',
                  borderRadius: '6px',
                  color: '#495057',
                  fontSize: '14px',
                  fontWeight: '500',
                  fontFamily: 'var(--font-family)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E33241';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#E33241';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(227, 50, 65, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#495057';
                  e.currentTarget.style.borderColor = '#dee2e6';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                title="Retour à la page précédente"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M19 12H6m6-7l-7 7 7 7"/>
                </svg>
                Retour
              </button>
            )}
          </div>
        </div>

        {/* Page Title Section */}
        {(pageTitle || currentPageInfo?.title) && (
          <div style={{
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '1px solid #e9ecef'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '8px'
            }}>
              {currentPageInfo?.icon && (
                <span style={{ fontSize: '24px' }}>{currentPageInfo.icon}</span>
              )}
              <h1 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '700',
                color: '#E33241',
                margin: 0,
                fontFamily: 'var(--font-family)'
              }}>
                {pageTitle || currentPageInfo?.title}
              </h1>
            </div>
            
            {currentPageInfo?.subtitle && !pageTitle && (
              <p style={{
                color: '#6c757d',
                fontSize: '16px',
                margin: '0 0 0 36px', // Aligné avec le titre (24px icon + 12px gap)
                fontStyle: 'italic'
              }}>
                {currentPageInfo.subtitle}
              </p>
            )}
            
            {currentPageInfo?.parentTitle && (
              <div style={{
                margin: '8px 0 0 36px',
                display: 'inline-block'
              }}>
                <Link
                  href={breadcrumbs[breadcrumbs.length - 2]?.href || '/'}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 8px',
                    backgroundColor: '#D2AB5F',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(210, 171, 95, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  ← {currentPageInfo.parentTitle}
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            order: 2;
            width: 100%;
          }
          
          .breadcrumb-actions {
            order: 1;
            width: 100%;
            justify-content: space-between;
          }
          
          .page-info {
            display: none !important;
          }
          
          .back-button {
            font-size: 13px !important;
            padding: 6px 12px !important;
          }
        }
        
        @media (max-width: 480px) {
          .breadcrumb-item {
            font-size: 13px !important;
          }
          
          .breadcrumb-separator {
            width: 10px !important;
            height: 10px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Breadcrumbs;