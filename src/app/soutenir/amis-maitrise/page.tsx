'use client';

import { useState } from 'react';

export default function AmisMaitrise() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
    codePostal: '',
    ville: '',
    cotisation: 'individuelle'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/movknowj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'Nouvelle demande adhésion Amis de la Maîtrise',
          type: 'adhesion-amis'
        }),
      });

      if (response.ok) {
        setMessage('Merci pour votre demande ! Nous vous contacterons très prochainement.');
        setFormData({
          prenom: '',
          nom: '',
          email: '',
          telephone: '',
          adresse: '',
          codePostal: '',
          ville: '',
          cotisation: 'individuelle'
        });
        setTimeout(() => setMessage(''), 7000);
      } else {
        setMessage('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
      }
    } catch (error) {
      setMessage('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#FAFAF9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '140px 20px 60px 20px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1a1340',
            marginBottom: '24px'
          }}>
            Amis de la Maîtrise
          </h1>
          <div style={{
            width: '80px',
            height: '3px',
            backgroundColor: 'var(--color-gold)',
            margin: '0 auto'
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start'
        }}>

          {/* Content Section */}
          <div>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#1a1340',
              marginBottom: '32px'
            }}>
              L'Association des Amis de la Fondation
            </h2>

            <div style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #f0f0f0',
              marginBottom: '32px'
            }}>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#4a5568',
                marginBottom: '24px'
              }}>
                L'association des Amis de la Maîtrise, constituée le même jour que la Fondation, s'est donné comme objectif de soutenir la Fondation pour l'aider à atteindre ses buts, en lui assurant notamment son aide dans la récolte des fonds nécessaires à son bon fonctionnement. Elle l'aide aussi dans la mise en œuvre des moyens propres à lui assurer son rayonnement.
              </p>

              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#4a5568'
              }}>
                Chaque année les Amis sont invités à une assemblée générale, ils sont informés des activités de la Maîtrise et bénéficient de réductions sur le prix des billets des concerts. Ils sont également invités à un événement culturel en lien avec le Festival d'Art Sacré qui se tient en fin d'année à la cathédrale. Les rencontres se déroulent dans la convivialité autour d'une petite agape.
              </p>
            </div>

            {/* Avantages */}
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #f0f0f0'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1a1340',
                marginBottom: '24px'
              }}>
                Avantages membres
              </h3>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {[
                  'Invitation à l\'assemblée générale annuelle',
                  'Réductions sur les billets de concerts',
                  'Invitation à un événement culturel FAS',
                  'Information privilégiée sur les activités',
                  'Rencontres conviviales'
                ].map((avantage, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px',
                    fontSize: '1.1rem',
                    color: '#4a5568'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: 'var(--color-gold)',
                      borderRadius: '50%',
                      marginRight: '16px',
                      flexShrink: 0
                    }}></span>
                    {avantage}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #f0f0f0'
            }}>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '600',
                color: '#1a1340',
                marginBottom: '24px',
                textAlign: 'center'
              }}>
                Devenir membre
              </h3>

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      color: '#1a1340',
                      marginBottom: '8px'
                    }}>
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      color: '#1a1340',
                      marginBottom: '8px'
                    }}>
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#1a1340',
                    marginBottom: '8px'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#1a1340',
                    marginBottom: '8px'
                  }}>
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#1a1340',
                    marginBottom: '8px'
                  }}>
                    Adresse
                  </label>
                  <input
                    type="text"
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      color: '#1a1340',
                      marginBottom: '8px'
                    }}>
                      Code postal
                    </label>
                    <input
                      type="text"
                      name="codePostal"
                      value={formData.codePostal}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      color: '#1a1340',
                      marginBottom: '8px'
                    }}>
                      Ville
                    </label>
                    <input
                      type="text"
                      name="ville"
                      value={formData.ville}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#1a1340',
                    marginBottom: '8px'
                  }}>
                    Type de cotisation
                  </label>
                  <select
                    name="cotisation"
                    value={formData.cotisation}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      backgroundColor: '#fff',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  >
                    <option value="individuelle">Cotisation individuelle</option>
                    <option value="couple">Cotisation couple</option>
                    <option value="famille">Cotisation famille</option>
                    <option value="etudiant">Cotisation étudiant</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    backgroundColor: isSubmitting ? '#9ca3af' : 'var(--color-gold)',
                    color: '#fff',
                    padding: '16px 32px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#c19660';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>

                {/* Message de confirmation */}
                {message && (
                  <div style={{
                    marginTop: '20px',
                    padding: '16px 20px',
                    backgroundColor: message.includes('Merci') ? '#d4edda' : '#f8d7da',
                    color: message.includes('Merci') ? '#155724' : '#721c24',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}>
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}