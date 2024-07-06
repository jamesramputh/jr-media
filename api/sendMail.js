import SibApiV3Sdk from 'sib-api-v3-sdk';

let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

export default async function(req, res) {
  const { firstName, lastName, email, packageOption, location, message } = req.body;

  // Create text and HTML content for the email
  let textContent = `${firstName} ${lastName} has inquired for some media. Package Option: ${packageOption}. Their email: ${email}. Property Location: ${location} Message: ${message}.`;
  let htmlContent = `<p>${firstName} ${lastName} has inquired for some media.</p><p>Package Option: ${packageOption}</p><p>Their email: ${email}</p><p>Property Location: ${location}</p><p>Message: ${message}</p>`;

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail = {
    to: [{
      email: 'james.ramputh@gmail.com',
    }],
    sender: {
      email: email,
    },
    subject: `Real estate media inquiry from: ${firstName} ${lastName}`,
    htmlContent: htmlContent,
    textContent: textContent
  };

  apiInstance.sendTransacEmail(sendSmtpEmail).then(() => {
    res.status(200).send('Message sent successfully.');
  }, (error) => {
    console.error('ERROR', error);
    res.status(400).send('Message not sent.');
  });

}

// import pkg from '@sendinblue/client';
// const { ApiClient, TransactionalEmailsApi, SendSmtpEmail } = pkg;

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }

// const defaultClient = pkg.ApiClient.instance;
// const apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

// const apiInstance = new pkg.TransactionalEmailsApi();

// export default async (req, res) => {
//   if (req.method === 'POST') {
//     const { firstName, lastName, email, packageOption, message } = req.body;

//     // Create text and HTML content for the email
//     let textContent = `${firstName} ${lastName} has inquired about a video. Package Option: ${packageOption}. Their email: ${email}. Message: ${message}.`;
//     let htmlContent = `<p>${firstName} ${lastName} has inquired about a video</p><p>Package Option: ${packageOption}</p><p>Their email: ${email}</p><p>Message: ${message}</p>`;

//     let sendSmtpEmail = new pkg.SendSmtpEmail();
//     sendSmtpEmail = {
//       to: [{
//         email: 'james.ramputh@gmail.com',
//       }],
//       sender: {
//         email: email,
//       },
//       subject: `Real estate video/photo Inquiry ${firstName} ${lastName}`,
//       htmlContent: htmlContent,
//       textContent: textContent
//     };

//     try {
//       await apiInstance.sendTransacEmail(sendSmtpEmail);
//       res.status(200).send('Message sent successfully.');
//     } catch (error) {
//       console.error('ERROR', error);
//       res.status(400).send('Message not sent.');
//     }
//   } else {
//     res.status(405).send('Method Not Allowed');
//   }
// };

