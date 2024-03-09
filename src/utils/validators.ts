export type ValidationFn = (value: any, compareValue?: any) => string | null;

export const validateNonEmptyField: ValidationFn = (
  value: string
): string | null => {
  return value.trim() ? null : 'Vous devez rensigner une valeur pour ce champ.';
};
