import { APP_PREFIX } from '@/routes/appRoutes';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const buildAppRoutes = (
  basePath: string,
  childPath = '',
  useAppPrefix = true
) => {
  const path = `${basePath}${childPath && '/' + childPath}`;

  if (useAppPrefix) return `${APP_PREFIX}${path}`;

  return path;
};

export const getErrorResponseMessage = (error: TUnknownOrAny) => {
  return (
    error.data || error.message || error.data.message || 'Something went wrong!'
  );
};
