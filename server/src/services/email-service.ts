import { SendSmtpEmail, TransactionalEmailsApi } from '@getbrevo/brevo';
import uniqid from 'uniqid';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const CONFIRMATION_EMAIL_TEMPLATE_ID =
  process.env.CONFIRMATION_EMAIL_TEMPLATE_ID;
const REQUEST_EMAIL_TEMPLATE_ID = process.env.REQUEST_EMAIL_TEMPLATE_ID;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
const CAN_SEND_CONFIRMATION_EMAIL = process.env.CAN_SEND_CONFIRMATION_EMAIL;
const CAN_SEND_REQUEST_EMAIL = process.env.CAN_SEND_REQUEST_EMAIL;

export interface Recipient {
  email: string;
  firstname: string;
  lastname: string;
}

export interface EmailParams {
  name: string;
  templateId: number;
  from: Recipient;
  to: Recipient;
  params?: Record<string, string>;
}

const createEmailAPIInstance = (apiKey: string): TransactionalEmailsApi => {
  const apiInstance = new TransactionalEmailsApi();
  apiInstance.setApiKey(0, apiKey);
  return apiInstance;
};

const createEmailInstance = (emailParams: EmailParams): SendSmtpEmail => {
  const { templateId, params, to } = emailParams;
  const sendSmtpEmail = new SendSmtpEmail();
  sendSmtpEmail.to = [
    {
      email: to.email,
      name: `${to.firstname} ${to.lastname}`,
    },
  ];
  sendSmtpEmail.templateId = templateId;
  sendSmtpEmail.params = params;

  return sendSmtpEmail;
};

export const sendEmail = (params: EmailParams): void => {
  if (!BREVO_API_KEY) {
    console.error(
      `BREVO_API_KEY is undefined: cannot send email '${params.name}'`
    );
    return;
  }

  const apiInstance = createEmailAPIInstance(BREVO_API_KEY);
  const emailInstance = createEmailInstance(params);

  apiInstance.sendTransacEmail(emailInstance).then(
    (data) => {
      console.log(`Email '${params.name}' sent successfully`);
    },
    (error: unknown) => {
      console.error(`Email '${params.name}' error`, error);
    }
  );
};

export const sendConfirmationEmail = (
  from: Recipient,
  data: string,
  emailId: string
): void => {
  if (!CONFIRMATION_EMAIL_TEMPLATE_ID) {
    console.error(
      `CONFIRMATION_EMAIL_TEMPLATE_ID is undefined: cannot send request email for ${emailId}`
    );
    return;
  }

  const { firstname, lastname, email } = from;

  const emailParams: EmailParams = {
    name: `confirmation email for ${emailId}`,
    templateId: +CONFIRMATION_EMAIL_TEMPLATE_ID,
    params: {
      firstname,
      lastname,
      email,
      message: data,
    },
    from,
    to: from,
  };

  sendEmail(emailParams);
};

export const sendRequestEmail = (
  from: Recipient,
  data: string,
  emailId: string
): void => {
  if (!CONTACT_EMAIL) {
    console.error(
      `CONTACT_EMAIL is undefined: cannot send request email for ${emailId}`
    );
    return;
  }
  if (!REQUEST_EMAIL_TEMPLATE_ID) {
    console.error(
      `REQUEST_EMAIL_TEMPLATE_ID is undefined: cannot send request email for ${emailId}`
    );
    return;
  }

  const { firstname, lastname, email } = from;

  const emailParams: EmailParams = {
    name: `request email for ${emailId}`,
    templateId: +REQUEST_EMAIL_TEMPLATE_ID,
    params: {
      firstname,
      lastname,
      email,
      message: data,
    },
    from,
    to: {
      email: CONTACT_EMAIL,
      firstname: '',
      lastname: '',
    },
  };

  sendEmail(emailParams);
};

export const sendAcknowledgementEmails = (
  from: Recipient,
  data: string
): void => {
  const emailId = uniqid();

  if (CAN_SEND_CONFIRMATION_EMAIL === 'true') {
    sendConfirmationEmail(from, data, emailId);
  }

  if (CAN_SEND_REQUEST_EMAIL === 'true') {
    sendRequestEmail(from, data, emailId);
  }
};
