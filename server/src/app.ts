import express from 'express';
import contactFormsRouter from './contact-forms-controller';
import cors from 'cors';

const port = process.env.PORT ?? 3001;
const allowedOrigin = process.env.ALLOWED_ORIGIN;

const corsOptions = {
  origin: allowedOrigin,
  optionsSuccessStatus: 200,
};

const app = express();

app.use(express.json());
app.use('/api', cors(corsOptions), contactFormsRouter);

app.listen(port, () => {
  console.log(`Aycandoo API listening on port ${port}!`);
});

// TODO: to refine later
// server.keepAliveTimeout = 120 * 1000;
// server.headersTimeout = 120 * 1000;
