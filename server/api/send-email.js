import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const nodemailer = require('nodemailer');

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

    // Log de waarden om te controleren of ze juist worden opgehaald
    console.log('SendGrid API Key:', config.sendgridApiKey);
    console.log('Gmail User:', config.gmailUser);

    const sendgridApiKey = config.sendgridApiKey;
    const gmailUser = config.gmailUser;

    if (!sendgridApiKey || !gmailUser) {
      throw new Error('Missing SendGrid API key or Gmail user');
    }

    // Configureer Nodemailer met SendGrid
    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey', // Dit is altijd 'apikey' voor SendGrid
        pass: sendgridApiKey, // Haal de API-sleutel op uit de runtime configuratie
      },
    });

    const mailOptions = {
      from: `Formulier Contact <cereuscrtv@gmail.com>`,
      to: gmailUser,
      replyTo: email,
      subject: `Nieuw bericht van ${name}`,
      text: `Bericht: \n\n${message}\n\nE-mailadres afzender: ${email}`,
    };

    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: { message: 'E-mail succesvol verzonden!' },
    };
  } catch (error) {
    console.error('Er is een fout opgetreden:', error);
    return {
      statusCode: 500,
      body: { message: 'Er ging iets mis met het verzenden van de e-mail.' },
    };
  }
});
