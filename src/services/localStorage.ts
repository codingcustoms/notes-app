export const LocalStorageService = {
  getItem: (key: string) => {
    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : '';
  },
  setItem: (key: string, value: TUnknownOrAny) =>
    localStorage.setItem(key, JSON.stringify(value)),
  removeItem: (key: string) => localStorage.removeItem(key),
};
