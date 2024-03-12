const RECAPTCHA_SECRET = 'TO-BE-DEFINED';

export interface RecaptchaResponse {
  success: boolean;
  challenge_ts: number;
  hostname: string;
  'error-codes': string[];
}

export const verifyToken = async (
  token: string
): Promise<RecaptchaResponse> => {
  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify?' +
      new URLSearchParams({
        secret: RECAPTCHA_SECRET,
        response: token,
      }),
    {
      method: 'POST',
    }
  );
  return response.json() as Promise<RecaptchaResponse>;
};

export const isRecaptchaSuccess = async (token: string): Promise<boolean> => {
  const recaptchaResponseAsJson = await verifyToken(token);
  return recaptchaResponseAsJson.success;
};
