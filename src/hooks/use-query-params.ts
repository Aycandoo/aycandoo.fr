export const useQueryParams = (key: string, searchParams: string): string[] => {
  const queryParams = new URLSearchParams(searchParams);
  return queryParams.getAll(key);
};
