import axios, { AxiosError } from 'axios';
import { ContactForm } from '../models/contact-form';

const handleError = (error: AxiosError) => {
  console.error(error);
  return { data: null };
};

export const sendContactForm = async (
  formState: ContactForm
): Promise<string | null> => {
  const { data } = await axios
    .post<string>(`${process.env.AYCANDOO_API_URL}/contact-forms`, formState, {
      timeout: 5000,
    })
    .catch(handleError);
  return data;
};
