export const toCapitalize = (text: string): string => {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
};
