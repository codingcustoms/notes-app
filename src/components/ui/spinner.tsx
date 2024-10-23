import { cn } from '@/lib/utils';
import { Loader2, LucideProps } from 'lucide-react';
import React from 'react';

export const Spinner: React.FC<LucideProps> = ({ className, ...rest }) => {
  return (
    <Loader2 className={cn('mx-2 h-4 w-4 animate-spin', className)} {...rest} />
  );
};
