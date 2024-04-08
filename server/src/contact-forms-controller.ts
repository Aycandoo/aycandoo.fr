import express from 'express';
import { body, validationResult } from 'express-validator';
import { sendAcknowledgementEmails } from './services/email-service';
import { isRecaptchaSuccess } from './services/recaptcha-service';

const contactFormsRouter = express.Router();

interface ContactForm {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  recaptchaToken: string;
}

contactFormsRouter.post(
  '/contact-forms',
  body('firstname').trim().notEmpty(),
  body('lastname').trim().notEmpty(),
  body('email').trim().isEmail(),
  body('message').trim().notEmpty(),
  body('recaptchaToken').trim().notEmpty(),
  (req, res) => {
    const result = validationResult(req);

    if (result.isEmpty()) {
      const { recaptchaToken }: ContactForm = req.body;

      isRecaptchaSuccess(recaptchaToken)
        .then((isValid) => {
          if (isValid) {
            console.log('Recaptcha token is valid!');

            const { firstname, lastname, email, message }: ContactForm =
              req.body;
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
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send('Internal server error');
        });
    } else {
      // TODO: to handle better later
      res.status(400).send('Invalid form fields');
      // res.status(400).send({ errors: result.array() }); // <-- kept as example
    }
  }
);

export default contactFormsRouter;
