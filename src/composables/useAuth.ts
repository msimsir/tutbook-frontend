export const useAuth = (key: string) => {
  return localStorage.getItem(key);
};
