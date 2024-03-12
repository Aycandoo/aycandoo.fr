const RECAPTCHA_SECRET: string = process.env.RECAPTCHA_SECRET!;
const VERIFY_ENDPOINT: string = process.env.VERIFY_ENDPOINT!;

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
    `${VERIFY_ENDPOINT}?` +
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
