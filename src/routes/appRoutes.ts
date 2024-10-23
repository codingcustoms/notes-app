export const BASE_URL = '/';
export const APP_PREFIX = '/app';

// if / is omitted in the path then it will act as relative to current path you are on
export const PUBLIC_ROUTES = {
  SIGN_IN: '/signIn',
  SIGN_UP: '/signUp',
};

export const PRIVATE_ROUTES = {
  DASHBOARD: { BASE: '/dashboard', CHILD: {} },
  PROFILE: { BASE: '/profile', CHILD: {} },
};
