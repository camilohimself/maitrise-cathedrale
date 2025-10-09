import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prenom, nom, email, telephone, sujet, message, montant, typeDon, communicationIban } = body;

    // Validation basique
    if (!prenom || !nom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Construction du contenu email avec informations de don si présentes
    let donInfo = '';
    if (montant || typeDon || communicationIban) {
      donInfo = `

        === INFORMATIONS DE DON ===
        ${montant ? `Montant: ${montant} CHF` : ''}
        ${typeDon ? `Type de don: ${typeDon}` : ''}
        ${communicationIban ? `Communication IBAN: ${communicationIban}` : ''}
      `;
    }

    const emailContent = `
Nouveau message depuis le formulaire de contact

EXPÉDITEUR:
Nom: ${prenom} ${nom}
Email: ${email}
${telephone ? `Téléphone: ${telephone}` : ''}

SUJET: ${sujet}

MESSAGE:
${message}
${donInfo}

---
Envoyé depuis www.maitrise-cathedrale.ch
    `;

    // Envoi de l'email via Resend
    const data = await resend.emails.send({
      from: 'Maîtrise Cathédrale <noreply@maitrise-cathedrale.ch>',
      to: ['info@maitrise-cathedrale.ch'],
      replyTo: email,
      subject: `[Contact] ${sujet} - ${prenom} ${nom}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
