import { SendSmtpEmail, TransactionalEmailsApi } from '@getbrevo/brevo';
import uniqid from 'uniqid';

const BREVO_API_KEY = process.env.BREVO_API_KEY!.trim();
const CONFIRMATION_EMAIL_TEMPLATE_ID =
  +process.env.CONFIRMATION_EMAIL_TEMPLATE_ID!;
const REQUEST_EMAIL_TEMPLATE_ID = +process.env.REQUEST_EMAIL_TEMPLATE_ID!;

export interface RecipientData {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

export interface EmailParams {
  name: string;
  templateId: number;
  to: RecipientData;
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
  const apiInstance = createEmailAPIInstance(BREVO_API_KEY);
  const emailInstance = createEmailInstance(params);

  apiInstance.sendTransacEmail(emailInstance).then(
    (data) => {
      console.log(
        `Email '${params.name}' sent successfully. Returned data: ` + data
      );
    },
    (error: unknown) => {
      console.error(`Email '${params.name}' error`, error);
    }
  );
};

export const sendConfirmationEmails = (data: RecipientData): void => {
  const { firstname, lastname, email, message } = data;

  const emailId = uniqid();

  const partialEmailParams: EmailParams = {
    name: '',
    templateId: 0,
    params: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      message: message,
    },
    to: data,
  };

  sendEmail({
    ...partialEmailParams,
    templateId: REQUEST_EMAIL_TEMPLATE_ID,
    name: `request email for ${emailId}`,
  });
  sendEmail({
    ...partialEmailParams,
    templateId: CONFIRMATION_EMAIL_TEMPLATE_ID,
    name: `confirmation email for ${emailId}`,
  });
};
