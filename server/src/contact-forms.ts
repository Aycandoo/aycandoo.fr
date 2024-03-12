import express from 'express';
import { body, validationResult } from 'express-validator';
import { isRecaptchaSuccess } from './recaptcha-service';

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
      const { firstname, lastname, email, message, recaptchaToken } = req.body;

      if (await isRecaptchaSuccess(recaptchaToken)) {
        // TODO: handle success -> send emails
        console.log('Recaptcha token is valid!');

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
