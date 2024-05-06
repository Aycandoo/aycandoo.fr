const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;
const VERIFY_ENDPOINT = process.env.VERIFY_ENDPOINT;

export interface RecaptchaResponse {
  success: boolean;
  challenge_ts: number;
  hostname: string;
  'error-codes': string[];
}

export const verifyToken = async (
  token: string
): Promise<RecaptchaResponse> => {
  const verifyUrl = `${VERIFY_ENDPOINT}?secret=${RECAPTCHA_SECRET}&response=${token}`;
  const response = await fetch(verifyUrl, {
    method: 'POST',
  });
  return (await response.json()) as RecaptchaResponse;
};

export const isRecaptchaSuccess = async (token: string): Promise<boolean> => {
  const recaptchaResponseAsJson = await verifyToken(token);
  return recaptchaResponseAsJson.success;
};
