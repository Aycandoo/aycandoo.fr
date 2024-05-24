<p align="center">
  <a href="https://aycandoo.fr">
    <img alt="AYCANDOO logo" src="./src/images/aycandoo-color-logo.svg" width="300" style="background-color: black;"/>
  </a>
</p>
<h1 align="center">
  AYCANDOO institutional website
</h1>

This repository contains the source code of the [AYCANDOO institutional website](https://aycandoo.fr). The app describes the services provided by the company. It also features a blog page.

- Frontend app made with [Gatsby](https://www.gatsbyjs.com/)
- Backend API made with [ExpressJS](https://expressjs.com/)
- Hosted on [Render](https://render.com/)
- Makes use of [ReCAPTCHA](https://www.google.com/recaptcha/about/) to protect contact form and [Brevo](https://www.brevo.com/) to send emails

## 🚀 Get started

**Prerequisites**

- NodeJS v20 or newer (see [official website](https://nodejs.org/en))
- Gatsby CLI v5 or newer (see [documentation](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#gatsby-cli))

**Command lines**

- Install project dependencies: `npm install`
- Run the frontend app: `npm start`
- Run the backend API: `npm run start-api` (needs environment variables detailed in API readme)

## 🔍 Automatic ESLint and Prettier checks

The project makes use of `lint-staged` to run ESLint and Prettier checks on staged files when commiting.

