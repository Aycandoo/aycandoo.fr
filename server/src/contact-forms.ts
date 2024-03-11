import express from 'express';
import { body, validationResult } from 'express-validator';

const contactFormsRouter = express.Router();

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
      console.log(req.body);
      res.sendStatus(200);
      return;
    }

    res.status(400).send({ errors: result.array() });
  }
);

export default contactFormsRouter;

