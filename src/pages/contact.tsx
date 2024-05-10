import type { HeadFC } from 'gatsby';
import React, {
  type FC,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { sendContactForm } from '../data/contact-data';
import useUniqueIds from '../hooks/use-unique-ids';
import useValidation from '../hooks/use-validation';
import { type ContactForm } from '../models/contact-form';
import ErrorContainer from '../shared/error-container';
import Layout from '../structure/layout';
import Section from '../structure/section';
import Seo from '../structure/seo';
import {
  validateEmail,
  validateNonEmptyField,
  validateRecaptcha,
} from '../utils/validators';

const EMPTY_FORM_STATE: ContactForm = {
  firstname: '',
  lastname: '',
  email: '',
  message: '',
  recaptchaToken: '',
};

const Contact: FC = () => {
  const [
    firstNameId,
    firstNameErrorId,
    lastNameId,
    lastNameErrorId,
    emailId,
    emailErrorId,
    messageId,
    messageErrorId,
    recaptchaErrorId,
  ] = useUniqueIds(9);
  const [hasFormBeingSubmitted, setHasFormBeingSubmitted] = useState(false);
  const [isFormBeingProcessed, setIsFormBeingProcessed] = useState(false);
  const [isFormSuccess, setIsFormSuccess] = useState(false);
  const [isFormError, setIsFormError] = useState(false);
  const [isMessageDisplayed, setIsMessageDisplayed] = useState(false);
  const [formState, setFormState] = useState(EMPTY_FORM_STATE);

  useEffect(() => {
    if (isFormSuccess || isFormError) {
      setIsMessageDisplayed(true);

      setTimeout(() => {
        setIsMessageDisplayed(false);
        setIsFormSuccess(false);
        setIsFormError(false);
      }, 6000);
    }
  }, [isFormSuccess, isFormError]);

  const [firstNameError, firstNameErrorProps] = useValidation({
    isRequired: true,
    errorId: firstNameErrorId,
    validateFn: validateNonEmptyField,
    value: formState.firstname,
    showError: hasFormBeingSubmitted,
  });

  const [lastNameError, lastNameErrorProps] = useValidation({
    isRequired: true,
    errorId: lastNameErrorId,
    validateFn: validateNonEmptyField,
    value: formState.lastname,
    showError: hasFormBeingSubmitted,
  });

  const [emailError, emailErrorProps] = useValidation({
    isRequired: true,
    errorId: emailErrorId,
    validateFn: validateEmail,
    value: formState.email,
    showError: hasFormBeingSubmitted,
  });

  const [messageError, messageErrorProps] = useValidation({
    isRequired: true,
    errorId: messageErrorId,
    validateFn: validateNonEmptyField,
    value: formState.message,
    showError: hasFormBeingSubmitted,
  });

  const [recaptchaError] = useValidation({
    isRequired: true,
    errorId: recaptchaErrorId,
    validateFn: validateRecaptcha,
    value: formState.recaptchaToken,
    showError: hasFormBeingSubmitted,
  });

  const firstnameRef = useRef(null as HTMLElement | null);
  const lastnameRef = useRef(null as HTMLElement | null);
  const emailRef = useRef(null as HTMLElement | null);
  const messageRef = useRef(null as HTMLElement | null);
  const recaptchaRef = useRef(null as ReCAPTCHA | null);

  const onFormValueChange = (event: any): void => {
    if (!formState) {
      return;
    }
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const onRecaptchaValueChange = (token: string | null): void => {
    if (!formState) {
      return;
    }
    setFormState({
      ...formState,
      recaptchaToken: token ?? '',
    });
  };

  const submitForm = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    setHasFormBeingSubmitted(true);
    setIsFormBeingProcessed(true);

    if (
      firstNameError ??
      lastNameError ??
      emailError ??
      messageError ??
      recaptchaError
    ) {
      setIsFormBeingProcessed(false);

      if (firstNameError) {
        firstnameRef.current?.focus();
        return;
      }

      if (lastNameError) {
        lastnameRef.current?.focus();
        return;
      }

      if (emailError) {
        emailRef.current?.focus();
        return;
      }

      if (messageError) {
        messageRef.current?.focus();
        return;
      }
      return;
    }

    const isSuccess = await sendContactForm(formState);
    setIsFormBeingProcessed(false);

    if (isSuccess) {
      setIsFormSuccess(true);
      resetForm();
    } else {
      setIsFormError(true);
    }
  };

  const resetForm = (): void => {
    setFormState(EMPTY_FORM_STATE);
    recaptchaRef.current?.reset();
    setHasFormBeingSubmitted(false);
  };

  return (
    <Layout>
      <Section title="Contact" id="contact" headingLevel={1}>
        <p className="text-justify">
          Nous sommes là pour répondre à vos questions et discuter de vos
          projets. Contactez-nous dès maintenant.
        </p>
        <p className="text-justify text-xs italic">
          Tous les champs sont obligatoires
        </p>
        <form className="w-full max-w-2xl" onSubmit={submitForm} noValidate>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                className="block pb-2 text-sm font-medium leading-6 text-gray-900"
                htmlFor={firstNameId}
              >
                Prénom :
              </label>
              <ErrorContainer
                errorMessage={firstNameError}
                showError={hasFormBeingSubmitted}
                errorId={firstNameErrorId}
              >
                <input
                  ref={firstnameRef}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#ffdd57] sm:text-sm sm:leading-6"
                  type="text"
                  id={firstNameId}
                  name="firstname"
                  value={formState.firstname}
                  onChange={onFormValueChange}
                  {...(firstNameErrorProps as any)}
                ></input>
              </ErrorContainer>
            </div>
            <div>
              <label
                className="block pb-2 text-sm font-medium leading-6 text-gray-900"
                htmlFor={lastNameId}
              >
                Nom :
              </label>
              <ErrorContainer
                errorMessage={lastNameError}
                showError={hasFormBeingSubmitted}
                errorId={lastNameErrorId}
              >
                <input
                  ref={lastnameRef}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#ffdd57] sm:text-sm sm:leading-6"
                  type="text"
                  id={lastNameId}
                  name="lastname"
                  value={formState.lastname}
                  onChange={onFormValueChange}
                  {...(lastNameErrorProps as any)}
                ></input>
              </ErrorContainer>
            </div>
            <div className="sm:col-span-2">
              <label
                className="block pb-2 text-sm font-medium leading-6 text-gray-900"
                htmlFor={emailId}
              >
                Email :
              </label>
              <ErrorContainer
                errorMessage={emailError}
                showError={hasFormBeingSubmitted}
                errorId={emailErrorId}
              >
                <input
                  ref={emailRef}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#ffdd57] sm:text-sm sm:leading-6"
                  type="email"
                  id={emailId}
                  name="email"
                  value={formState.email}
                  onChange={onFormValueChange}
                  {...(emailErrorProps as any)}
                ></input>
              </ErrorContainer>
            </div>
            <div className="sm:col-span-2">
              <label
                className="block pb-2 text-sm font-medium leading-6 text-gray-900"
                htmlFor={messageId}
              >
                Message :
              </label>
              <ErrorContainer
                errorMessage={messageError}
                showError={hasFormBeingSubmitted}
                errorId={messageErrorId}
              >
                <textarea
                  ref={messageRef}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#ffdd57] sm:text-sm sm:leading-6"
                  id={messageId}
                  name="message"
                  rows={3}
                  value={formState.message}
                  onChange={onFormValueChange}
                  {...(messageErrorProps as any)}
                ></textarea>
              </ErrorContainer>
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col items-end">
            <ErrorContainer
              errorMessage={recaptchaError}
              showError={hasFormBeingSubmitted}
              errorId={recaptchaErrorId}
            >
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.RECAPTCHA_PUBLIC_KEY ?? ''}
                onChange={onRecaptchaValueChange}
              />
            </ErrorContainer>
            <button
              className="mt-2 flex w-48 justify-center gap-4 rounded-md bg-[#ffdd57] py-2 font-semibold drop-shadow-md hover:ring-2 hover:ring-black disabled:opacity-50 disabled:ring-0"
              type="submit"
              disabled={isFormBeingProcessed}
            >
              {isFormBeingProcessed && (
                <>
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-t-2 border-black border-t-white"></div>
                  <p aria-atomic="true" aria-live="assertive">
                    Envoi en cours
                  </p>
                </>
              )}
              {!isFormBeingProcessed && <p>Envoyer</p>}
            </button>
          </div>
        </form>
        {isMessageDisplayed && isFormSuccess && (
          <p
            aria-atomic="true"
            aria-live="assertive"
            className="mt-4 flex w-full max-w-2xl items-center justify-center rounded-md bg-green-200 p-4 font-medium ring-1 ring-green-500 "
          >
            Merci pour votre message, votre demande a bien été envoyée.
          </p>
        )}
        {isMessageDisplayed && isFormError && (
          <p
            aria-atomic="true"
            aria-live="assertive"
            className="mt-4 flex w-full max-w-4xl items-center justify-center rounded-md bg-red-200 p-4 font-medium ring-1 ring-red-500 "
          >
            Une erreur inattendue s&apos;est produite, nos équipes analysent le
            problème. Merci de réessayer plus tard.
          </p>
        )}
      </Section>
    </Layout>
  );
};

export default Contact;

export const Head: HeadFC = () => (
  <Seo
    title="Contact"
    description="Besoin d'un renseignement ? Nous sommes là pour répondre à vos questions et discuter de vos projets. Contacter nous via notre formulaire de contact ou via notre adresse email contact@aycandoo.fr."
  ></Seo>
);
