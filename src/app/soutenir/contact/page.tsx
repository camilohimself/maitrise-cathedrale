'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
    montant: '',
    typeDon: 'ponctuel',
    communicationIban: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Formulaire soumis:', formData);
    // TODO: Implement actual form submission

    setIsSubmitting(false);
    // Reset form or show success message
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
            Nous contacter
          </h1>
          <div style={{
            width: '80px',
            height: '3px',
            backgroundColor: 'var(--color-gold)',
            margin: '0 auto'
          }}></div>
          <p style={{
            fontSize: '1.2rem',
            color: '#4a5568',
            marginTop: '24px',
            maxWidth: '600px',
            margin: '24px auto 0'
          }}>
            Une question ? Un projet ? N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start'
        }}>

          {/* Contact Info */}
          <div>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#1a1340',
              marginBottom: '32px'
            }}>
              Informations de contact
            </h2>

            <div style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #f0f0f0',
              marginBottom: '32px'
            }}>
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1a1340',
                  marginBottom: '16px'
                }}>
                  Maîtrise de la Cathédrale
                </h3>
                <div style={{ lineHeight: '1.8', color: '#4a5568' }}>
                  <p>Rue de la Cathédrale 13</p>
                  <p>1950 Sion, Valais</p>
                  <p>Suisse</p>
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1a1340',
                  marginBottom: '12px'
                }}>
                  Téléphone
                </h4>
                <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>+41 79 616 90 94</p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1a1340',
                  marginBottom: '12px'
                }}>
                  Email
                </h4>
                <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>info@maitrise-cathedrale.ch</p>
              </div>

              <div>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1a1340',
                  marginBottom: '12px'
                }}>
                  IBAN
                </h4>
                <p style={{ color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  Fondation Musique Sacrée et Maitrise de la Cathédrale de Sion
                  <br />
                  CH90 8080 8004 7602 6591 8
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
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
                Envoyer un message
              </h3>

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
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

                {/* Section Don */}
                <div style={{
                  marginBottom: '30px',
                  padding: '24px',
                  backgroundColor: 'rgba(212, 165, 116, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(212, 165, 116, 0.2)'
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: 'var(--color-gold)',
                    marginBottom: '20px'
                  }}>
                    💝 Informations de don (optionnel)
                  </h3>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      color: '#1a1340',
                      marginBottom: '8px'
                    }}>
                      Type de don
                    </label>
                    <select
                      name="typeDon"
                      value={formData.typeDon}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        backgroundColor: 'white',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    >
                      <option value="ponctuel">Don ponctuel</option>
                      <option value="mensuel">Don mensuel</option>
                      <option value="annuel">Don annuel</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      color: '#1a1340',
                      marginBottom: '8px'
                    }}>
                      Montant souhaité (CHF)
                    </label>
                    <input
                      type="number"
                      name="montant"
                      value={formData.montant}
                      onChange={handleChange}
                      placeholder="ex: 50"
                      min="1"
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

                  {/* IBAN Info Box */}
                  <div style={{
                    padding: '16px',
                    backgroundColor: 'rgba(26, 19, 64, 0.05)',
                    borderRadius: '8px',
                    border: '1px solid rgba(26, 19, 64, 0.1)',
                    marginBottom: '20px'
                  }}>
                    <h4 style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: 'var(--color-navy)',
                      marginBottom: '8px'
                    }}>
                      🏦 Coordonnées bancaires
                    </h4>
                    <p style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-navy)',
                      marginBottom: '12px',
                      lineHeight: 1.5
                    }}>
                      <strong>IBAN :</strong> CH94 0900 0000 1234 5678 9<br/>
                      <strong>Bénéficiaire :</strong> Fondation Maîtrise Cathédrale Sion<br/>
                      <strong>Banque :</strong> PostFinance SA
                    </p>

                    <div style={{ marginTop: '12px' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        color: '#1a1340',
                        marginBottom: '6px'
                      }}>
                        Communication IBAN (optionnel)
                      </label>
                      <input
                        type="text"
                        name="communicationIban"
                        value={formData.communicationIban}
                        onChange={handleChange}
                        placeholder="Don pour cantates Bach 2025"
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: '2px solid #e2e8f0',
                          borderRadius: '6px',
                          fontSize: '0.9rem',
                          transition: 'border-color 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>
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
                    Sujet *
                  </label>
                  <select
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
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
                    <option value="">Sélectionnez un sujet</option>
                    <option value="information">Demande d'information</option>
                    <option value="soutien">Soutien et partenariat</option>
                    <option value="concert">Concerts et événements</option>
                    <option value="adhesion">Adhésion Amis de la Maîtrise</option>
                    <option value="media">Médias et presse</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#1a1340',
                    marginBottom: '8px'
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    placeholder="Votre message..."
                  />
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
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}