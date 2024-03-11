import { HeadFC } from 'gatsby';
import React, { FormEvent, useRef, useState } from 'react';
import useUniqueIds from '../hooks/use-unique-ids';
import useValidation from '../hooks/use-validation';
import ErrorContainer from '../shared/error-container';
import Layout from '../structure/layout';
import Section from '../structure/section';
import Seo from '../structure/seo';
import { validateEmail, validateNonEmptyField } from '../utils/validators';

const Contact = () => {
  const [
    firstNameId,
    firstNameErrorId,
    lastNameId,
    lastNameErrorId,
    emailId,
    emailErrorId,
    messageId,
    messageErrorId,
  ] = useUniqueIds(8);
  const [hasFormBeingSubmitted, setHasFormBeingSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

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

  const firstnameRef = useRef(null as HTMLElement | null);
  const lastnameRef = useRef(null as HTMLElement | null);
  const emailRef = useRef(null as HTMLElement | null);
  const messageRef = useRef(null as HTMLElement | null);

  const onFormValueChange = (event: any) => {
    if (!formState) {
      return;
    }
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    setHasFormBeingSubmitted(true);

    if (firstNameError || lastNameError || emailError || messageError) {
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
    }

    // Handle form submit
    console.log('submitting form: ', formState);
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
        <form className="w-full" onSubmit={submitForm} noValidate>
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
                htmlFor={firstNameId}
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
          <div className="flex justify-center">
            <button
              className="mt-4 w-full rounded-md  bg-[#ffdd57] py-2 font-semibold drop-shadow-md md:w-52 "
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>
      </Section>
    </Layout>
  );
};

export default Contact;

export const Head: HeadFC = () => <Seo title="Contact"></Seo>;
