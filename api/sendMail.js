import { ApiClient, TransactionalEmailsApi, SendSmtpEmail } from '@sendinblue/client';

let defaultClient = ApiClient.instance;
let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

let apiInstance = new TransactionalEmailsApi();

export default async function(req, res) {
  const { firstName, lastName, email, packageOption, message } = req.body;

  // Create text and HTML content for the email
  let textContent = `${firstName} ${lastName} has inquired about a video. Package Option: ${packageOption}. Their email: ${email}. Message: ${message}.`;
  let htmlContent = `<p>${firstName} ${lastName} has inquired about a video</p><p>Package Option: ${packageOption}</p><p>Their email: ${email}</p><p>Message: ${message}</p>`;

  let sendSmtpEmail = new SendSmtpEmail();
  sendSmtpEmail = {
    to: [{
      email: 'james.ramputh@gmail.com',
    }],
    sender: {
      email: email,
    },
    subject: `Real estate video/photo Inquiry ${firstName} ${lastName}`,
    htmlContent: htmlContent,
    textContent: textContent
  };

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.error('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
