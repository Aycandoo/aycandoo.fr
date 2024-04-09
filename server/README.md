# Aycandoo API

This project represents the backend API made for [Aycandoo institutional website](https://aycandoo.fr). **The main purpose of this API is to handle the contact form sent by frontend app**.

- Built with [ExpressJS](https://expressjs.com/)
- Packaged with [ESBuild](https://esbuild.github.io/)
- Hosted on [Render](https://render.com/)

## 🚀 Get started

**Prerequisites**

- NodeJS v20 or newer (see [official website](https://nodejs.org/en))

**Command lines**

- Install project dependencies: `npm install`
- Run locally: `npm start` (needs environment variables, see below)
- Build: `npm run build`

## Environment variables

### Mandatory

These environment variables are mandatory for the api to start. For simplification purposes they all have a default value but you should add a valid `RECAPTCHA_SECRET` if you want the api to work properly.

**CORS configuration**

| Name             | Default value | Type   | Description       |
| ---------------- | ------------- | ------ | ----------------- |
| `ALLOWED_ORIGIN` | `*`           | string | authorized origin |

**ReCAPTCHA configuration**

| Name               | Default value                                   | Type   | Description                                         |
| ------------------ | ----------------------------------------------- | ------ | --------------------------------------------------- |
| `RECAPTCHA_SECRET` | `none`                                          | string | reCAPTCHA secret key                                |
| `VERIFY_ENDPOINT`  | https://www.google.com/recaptcha/api/siteverify | string | endpoint to verify reCAPTCHA token sent by frontend |

**Enable emails exchanges**

| Name            | Default value | Type    | Description                         |
| --------------- | ------------- | ------- | ----------------------------------- |
| `ENABLE_EMAILS` | `false`       | boolean | enable emails exchanges using BREVO |

### Optional

These environment variables are mandatory for the email service to work. No default value is provided for them.

You can create a free account on [Brevo](https://www.brevo.com/) if you want to fill them. 

**BREVO configuration**

| Name                             | Default value | Type    | Description                             |
| -------------------------------- | ------------- | ------- | --------------------------------------- |
| `BREVO_API_KEY`                  | `undefined`   | string  | secret key to be connected on BREVO API |
| `CONFIRMATION_EMAIL_TEMPLATE_ID` | `undefined`   | number  |                                         |
| `REQUEST_EMAIL_TEMPLATE_ID`      | `undefined`   | number  |                                         |
| `CONTACT_EMAIL`                  | `undefined`   | string  |                                         |
| `CAN_SEND_CONFIRMATION_EMAIL`    | `undefined`   | boolean |                                         |
| `CAN_SEND_REQUEST_EMAIL`         | `undefined`   | boolean |                                         |
