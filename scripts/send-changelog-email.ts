/**
 * Script d'envoi d'email de changelog hebdomadaire
 * Usage: npx tsx scripts/send-changelog-email.ts
 */

import { config } from 'dotenv';
import { Resend } from 'resend';
import { resolve } from 'path';

// Charger les variables d'environnement depuis .env.local
config({ path: resolve(process.cwd(), '.env.local') });

const resend = new Resend(process.env.RESEND_API_KEY);

interface ChangelogEntry {
  type: 'fix' | 'feature' | 'mobile' | 'optimization';
  icon: string;
  title: string;
  description: string;
  impact: string;
}

const changelog: ChangelogEntry[] = [
  {
    type: 'fix',
    icon: '',
    title: 'Bug Agenda Mobile - Layout cassé',
    description: 'Correction du problème d\'affichage sur mobile où les images résiduelles étaient visibles et le CSS non appliqué en raison de références CSS orphelines.',
    impact: 'Layout mobile propre avec images masquées correctement et media queries actives.'
  },
  {
    type: 'mobile',
    icon: '',
    title: 'UX Événements FAS - Lisibilité améliorée',
    description: 'Augmentation des titres à 3 lignes et amélioration de la visibilité des boutons billetterie pour les événements du Festival d\'Art Sacré.',
    impact: 'Titres complets visibles et CTAs plus cliquables pour les seniors.'
  },
  {
    type: 'optimization',
    icon: '',
    title: 'Grids Responsive - 11 composants optimisés',
    description: 'Correction du pattern CSS minmax() sur 11 composants (Accueil, Maitrise, Support) pour éviter tout overflow horizontal.',
    impact: 'Affichage fluide sur tous les breakpoints (320px → 1920px).'
  },
  {
    type: 'optimization',
    icon: '',
    title: 'Touch Targets - Conformité Apple HIG',
    description: 'Augmentation de tous les boutons tactiles à minimum 44px (Header, Footer, FAS navigation) pour respecter les standards d\'accessibilité.',
    impact: '100% des éléments interactifs conformes aux standards tactiles.'
  }
];

const emailHTML = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Changelog Maîtrise Cathédrale - Patch v1.2</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">

  <!-- Container principal -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">

        <!-- Email content -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header avec logo OSOM -->
          <tr>
            <td style="background: #000000; padding: 40px 40px 32px 40px; text-align: center;">
              <div style="color: #ff6b35; font-size: 32px; font-weight: 900; letter-spacing: 4px; margin-bottom: 8px;">
                OSOM
              </div>
              <div style="color: #999999; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">
                Orchestré avec soin
              </div>
            </td>
          </tr>

          <!-- Badge Patch -->
          <tr>
            <td style="padding: 32px 40px 24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <div style="display: inline-block; background: #ff6b35; color: #ffffff; padding: 8px 20px; border-radius: 20px; font-size: 13px; font-weight: 600; letter-spacing: 0.5px;">
                      PATCH v1.2
                    </div>
                  </td>
                  <td align="right" style="color: #666; font-size: 13px;">
                    4 juin 2025
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Titre -->
          <tr>
            <td style="padding: 0 40px 32px 40px;">
              <h1 style="margin: 0; color: #000000; font-size: 28px; font-weight: 700; line-height: 1.3;">
                Maîtrise Cathédrale de Sion
              </h1>
              <p style="margin: 8px 0 0 0; color: #666; font-size: 16px; line-height: 1.6;">
                Optimisations Mobile & Corrections UX
              </p>
            </td>
          </tr>

          <!-- Séparateur -->
          <tr>
            <td style="padding: 0 40px;">
              <div style="height: 2px; background: #ff6b35;"></div>
            </td>
          </tr>

          <!-- Section Corrections -->
          <tr>
            <td style="padding: 32px 40px 16px 40px;">
              <h2 style="margin: 0 0 24px 0; color: #000000; font-size: 20px; font-weight: 600;">
                Corrections & Améliorations
              </h2>

              ${changelog.map((entry, index) => `
                <div style="margin-bottom: ${index < changelog.length - 1 ? '24px' : '0'}; padding: 20px; background: #fafafa; border-radius: 12px; border-left: 4px solid #ff6b35;">
                  <div style="display: flex; align-items: flex-start;">
                    <div style="flex: 1;">
                      <h3 style="margin: 0 0 8px 0; color: #000000; font-size: 16px; font-weight: 600;">
                        ${entry.title}
                      </h3>
                      <p style="margin: 0 0 12px 0; color: #555; font-size: 14px; line-height: 1.6;">
                        ${entry.description}
                      </p>
                      <div style="padding: 8px 12px; background: rgba(255, 107, 53, 0.1); border-radius: 6px; display: inline-block;">
                        <span style="color: #ff6b35; font-size: 13px; font-weight: 500;">
                          Impact: ${entry.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </td>
          </tr>

          <!-- Séparateur -->
          <tr>
            <td style="padding: 24px 40px;">
              <div style="height: 1px; background: #e0e0e0;"></div>
            </td>
          </tr>

          <!-- Métriques -->
          <tr>
            <td style="padding: 0 40px 32px 40px;">
              <h2 style="margin: 0 0 20px 0; color: #000000; font-size: 18px; font-weight: 600;">
                Métriques Techniques
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="50%" style="padding: 16px; background: #f9f9f9; border-radius: 8px;">
                    <div style="color: #ff6b35; font-size: 28px; font-weight: 700; margin-bottom: 4px;">
                      0
                    </div>
                    <div style="color: #666; font-size: 13px;">
                      Erreurs TypeScript
                    </div>
                  </td>
                  <td width="16"></td>
                  <td width="50%" style="padding: 16px; background: #f9f9f9; border-radius: 8px;">
                    <div style="color: #ff6b35; font-size: 28px; font-weight: 700; margin-bottom: 4px;">
                      30
                    </div>
                    <div style="color: #666; font-size: 13px;">
                      Pages générées
                    </div>
                  </td>
                </tr>
                <tr><td height="12"></td></tr>
                <tr>
                  <td width="50%" style="padding: 16px; background: #f9f9f9; border-radius: 8px;">
                    <div style="color: #ff6b35; font-size: 28px; font-weight: 700; margin-bottom: 4px;">
                      100%
                    </div>
                    <div style="color: #666; font-size: 13px;">
                      Touch Targets conformes
                    </div>
                  </td>
                  <td width="16"></td>
                  <td width="50%" style="padding: 16px; background: #f9f9f9; border-radius: 8px;">
                    <div style="color: #ff6b35; font-size: 28px; font-weight: 700; margin-bottom: 4px;">
                      4
                    </div>
                    <div style="color: #666; font-size: 13px;">
                      Déploiements réussis
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Séparateur -->
          <tr>
            <td style="padding: 0 40px 24px 40px;">
              <div style="height: 1px; background: #e0e0e0;"></div>
            </td>
          </tr>

          <!-- Liens utiles -->
          <tr>
            <td style="padding: 0 40px 32px 40px;">
              <h2 style="margin: 0 0 16px 0; color: #000000; font-size: 18px; font-weight: 600;">
                Liens Utiles
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding: 12px 0;">
                    <a href="https://www.maitrise-cathedrale.ch" style="color: #ff6b35; text-decoration: none; font-size: 14px; font-weight: 500;">
                      → Site en production
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <a href="https://www.maitrise-cathedrale.ch/agenda-billetterie" style="color: #ff6b35; text-decoration: none; font-size: 14px; font-weight: 500;">
                      → Page Agenda & Billetterie
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <a href="https://github.com/camilohimself/maitrise-cathedrale" style="color: #ff6b35; text-decoration: none; font-size: 14px; font-weight: 500;">
                      → Repository GitHub
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding: 0 40px 40px 40px; text-align: center;">
              <a href="mailto:hello@osom.ch" style="display: inline-block; padding: 14px 32px; background: #ff6b35; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 15px; font-weight: 600; transition: all 0.3s ease;">
                Nous contacter
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background: #000000; padding: 32px 40px; text-align: center;">
              <div style="color: rgba(255,255,255,0.7); font-size: 13px; line-height: 1.8; margin-bottom: 16px;">
                Questions ou suggestions ?<br>
                Répondez directement à cet email ou contactez-nous à
                <a href="mailto:hello@osom.ch" style="color: #ff6b35; text-decoration: none;">hello@osom.ch</a>
              </div>

              <div style="color: rgba(255,255,255,0.5); font-size: 11px; margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                Orchestré avec soin par OSOM<br>
                Ce rapport est généré automatiquement pour vous tenir informé des améliorations continues.
              </div>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

async function sendChangelogEmail() {
  try {
    console.log('Envoi de l\'email changelog...\n');

    const result = await resend.emails.send({
      from: 'OSOM Updates <updates@osom.ch>',
      to: ['osomcreativemarketing@gmail.com'],
      replyTo: 'hello@osom.ch',
      subject: 'Maîtrise Cathédrale - Patch v1.2 : Optimisations Mobile',
      html: emailHTML,
    });

    console.log('Email envoyé avec succès!');
    console.log('ID:', result.data?.id);
    console.log('To:', 'osomcreativemarketing@gmail.com');
    console.log('From:', 'OSOM Updates <updates@osom.ch>');
    console.log('\nVérifie ta boîte mail dans quelques secondes!\n');

  } catch (error: any) {
    console.error('Erreur lors de l\'envoi:', error.message);

    if (error.message.includes('domain')) {
      console.log('\nLe domaine osom.ch doit être vérifié dans Resend.');
      console.log('   → Aller sur: https://resend.com/domains');
      console.log('   → Ajouter le domaine osom.ch');
      console.log('   → Configurer les DNS records\n');
    }

    process.exit(1);
  }
}

// Exécuter
sendChangelogEmail();
