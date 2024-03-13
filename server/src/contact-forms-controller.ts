import express from 'express';
import { body, validationResult } from 'express-validator';
import { sendAcknowledgementEmails } from './services/email-service';
import { isRecaptchaSuccess } from './services/recaptcha-service';

const contactFormsRouter = express.Router();

contactFormsRouter.post(
  '/contact-forms',
  body('firstname').trim().notEmpty(),
  body('lastname').trim().notEmpty(),
  body('email').trim().isEmail(),
  body('message').trim().notEmpty(),
  body('recaptchaToken').trim().notEmpty(),
  async (req, res) => {
    const result = validationResult(req);

    if (result.isEmpty()) {
      const { recaptchaToken } = req.body;

      if (await isRecaptchaSuccess(recaptchaToken)) {
        console.log('Recaptcha token is valid!');

        const { firstname, lastname, email, message } = req.body;
        sendAcknowledgementEmails(
          {
            firstname,
            lastname,
            email,
          },
          message
        );

        res.sendStatus(200);
      } else {
        res.status(400).send('Invalid ReCAPTCHA token');
      }
      return;
    }

    // TODO: to handle better later
    res.status(400).send('Invalid form fields');
    // res.status(400).send({ errors: result.array() }); // <-- kept as example
  }
);

export default contactFormsRouter;
