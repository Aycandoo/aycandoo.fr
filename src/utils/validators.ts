export type ValidationFn = (value: any, compareValue?: any) => string | null;

export const emailRegex: RegExp =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validateNonEmptyField: ValidationFn = (
  value: string
): string | null => {
  return value.trim() ? null : 'Vous devez rensigner une valeur pour ce champ.';
};

export const validateEmail: ValidationFn = (value: string): string | null => {
  return emailRegex.test(value)
    ? null
    : 'Vous devez rensigner une adresse email valide (ex: mon-adresse@domaine.fr).';
};

export const validateRecaptcha: ValidationFn = (
  value: string
): string | null => {
  return value ? null : 'Vous devez cocher cette case.';
};
