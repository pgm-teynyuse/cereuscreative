import { defineEventHandler, readBody } from 'h3';
import sgMail from '@sendgrid/mail';
import { useRuntimeConfig } from '#imports';

export default defineEventHandler(async (event) => {
  if (getMethod(event) !== 'POST') {
    return {
      statusCode: 405,
      body: { message: 'Method Not Allowed' },
    };
  }

  const { name, email, message } = await readBody(event);

  try {
    // Haal de runtime-configuratie op
    const config = useRuntimeConfig();

    // Stel de SendGrid API-sleutel in
    sgMail.setApiKey(config.sendgridApiKey);

    const msg = {
      to: config.gmailUser, // Het adres waar de e-mail naartoe wordt gestuurd
      from: 'cereuscrtv@gmail.com', // Je eigen (geverifieerde) adres in SendGrid
      replyTo: email, // Het adres van de persoon die het formulier heeft ingevuld
      subject: `Nieuw bericht van ${name}`,
      text: `Bericht: \n\n${message}\n\nE-mailadres afzender: ${email}`,
    };

    // Verstuur de e-mail
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: { message: 'E-mail succesvol verzonden!' },
    };
  } catch (error) {
    console.error(
      'Er is een fout opgetreden:',
      error.response?.body || error.message
    );
    return {
      statusCode: 500,
      body: { message: 'Er ging iets mis met het verzenden van de e-mail.' },
    };
  }
});
