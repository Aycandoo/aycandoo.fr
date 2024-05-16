export const useQueryParams = (key: string): string[] => {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.getAll(key);
};
