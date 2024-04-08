import axios, { type AxiosError } from 'axios';
import { type ContactForm } from '../models/contact-form';

const handleError = (error: AxiosError): { data: null } => {
  console.error(error);
  return { data: null };
};

export const sendContactForm = async (
  formState: ContactForm
): Promise<string | null> => {
  const { data } = await axios
    .post<string>(`${process.env.AYCANDOO_API_URL}/contact-forms`, formState, {
      timeout: process.env.HTTP_REQUESTS_TIMEOUT
        ? +process.env.HTTP_REQUESTS_TIMEOUT
        : 20000,
    })
    .catch(handleError);
  return data;
};
