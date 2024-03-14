import express from 'express';
import contactFormsRouter from './contact-forms-controller';

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use('/api', contactFormsRouter);

const server = app.listen(port, () =>
  console.log(`Aycandoo API listening on port ${port}!`)
);

// TODO: to refine later
// server.keepAliveTimeout = 120 * 1000;
// server.headersTimeout = 120 * 1000;
