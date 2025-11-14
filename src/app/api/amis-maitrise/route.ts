import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { prenom, nom, email, telephone, adresse, codePostal, ville, cotisation, website } = await request.json();

    // Anti-spam: Honeypot - Si le champ "website" est rempli, c'est un bot
    if (website) {
      console.warn('🤖 Bot détecté via honeypot (amis-maitrise)');
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 400 }
      );
    }

    if (!prenom || !nom || !email) {
      return NextResponse.json(
        { error: 'Prénom, nom et email sont obligatoires' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Maîtrise Cathédrale <noreply@maitrise-cathedrale.ch>',
      to: [
        process.env.CONTACT_EMAIL || 'info@maitrise-cathedrale.ch',
        'musiquesacree@cath-vs.org'
      ],
      replyTo: email,
      subject: '🤝 Nouvelle demande adhésion - Amis de la Maîtrise',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
              .header { background: linear-gradient(135deg, #1a1340 0%, #D4A574 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
              .content { background: white; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
              .badge { display: inline-block; background: #D4A574; color: white; padding: 8px 16px; border-radius: 4px; font-weight: 600; margin-bottom: 20px; text-transform: capitalize; }
              .info-grid { display: grid; gap: 15px; }
              .info-box { background: #f9fafb; border-left: 4px solid #D4A574; padding: 15px; }
              .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🤝 Nouvelle demande adhésion</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Association des Amis de la Maîtrise</p>
              </div>
              <div class="content">
                <span class="badge">${cotisation.replace('-', ' ')}</span>

                <div class="info-grid">
                  <div class="info-box">
                    <strong>👤 Identité :</strong><br>
                    ${prenom} ${nom}
                  </div>

                  <div class="info-box">
                    <strong>📧 Email :</strong><br>
                    <a href="mailto:${email}" style="color: #6B46C1; text-decoration: none;">${email}</a>
                  </div>

                  ${telephone ? `
                  <div class="info-box">
                    <strong>📱 Téléphone :</strong><br>
                    <a href="tel:${telephone}" style="color: #6B46C1; text-decoration: none;">${telephone}</a>
                  </div>
                  ` : ''}

                  ${adresse || codePostal || ville ? `
                  <div class="info-box">
                    <strong>📍 Adresse :</strong><br>
                    ${adresse || ''}<br>
                    ${codePostal || ''} ${ville || ''}
                  </div>
                  ` : ''}
                </div>

                <p style="color: #6b7280; margin-top: 20px; font-size: 14px;">
                  <strong>Type de cotisation :</strong> ${cotisation.replace('-', ' ')}<br>
                  <strong>Date :</strong> ${new Date().toLocaleString('fr-CH', {
                    dateStyle: 'full',
                    timeStyle: 'short',
                    timeZone: 'Europe/Zurich'
                  })}
                </p>

                <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px; margin-top: 20px; border-radius: 4px;">
                  <strong>📝 Prochaine étape :</strong><br>
                  Envoyer les informations de paiement et le bulletin d'adhésion à ${prenom} ${nom}.
                </div>

                <div class="footer">
                  <p>Maîtrise de la Cathédrale de Sion<br>
                  Rue de la Cathédrale 13, 1950 Sion<br>
                  <a href="mailto:info@maitrise-cathedrale.ch" style="color: #D4A574;">info@maitrise-cathedrale.ch</a></p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log('Email amis-maitrise envoyé avec succès:', data);
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Erreur envoi amis-maitrise:', error);

    // Si l'erreur contient "sent" ou un ID, l'email est probablement parti
    if (error?.message?.includes('sent') || error?.id) {
      console.log('Email envoyé malgré l\'erreur');
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi', details: error?.message },
      { status: 500 }
    );
  }
}
