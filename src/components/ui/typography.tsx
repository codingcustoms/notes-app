import { cn } from '@/lib/utils';
import React, { ComponentPropsWithoutRef } from 'react';

export const H1: React.FC<ComponentPropsWithoutRef<'h1'>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};

export const H2: React.FC<ComponentPropsWithoutRef<'h2'>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
};

export const H3: React.FC<ComponentPropsWithoutRef<'h3'>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
      {...rest}
    >
      {children}
    </h3>
  );
};

export const H4: React.FC<ComponentPropsWithoutRef<'h4'>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...rest}
    >
      {children}
    </h4>
  );
};

export const H5: React.FC<ComponentPropsWithoutRef<'h5'>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <h5
      className={cn(
        'scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...rest}
    >
      {children}
    </h5>
  );
};

export const H6: React.FC<ComponentPropsWithoutRef<'h6'>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <h6
      className={cn(
        'scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...rest}
    >
      {children}
    </h6>
  );
};

export const Paragraph: React.FC<ComponentPropsWithoutRef<'p'>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <p className={cn(className)} {...rest}>
      {children}
    </p>
  );
};

export const Body: React.FC<ComponentPropsWithoutRef<'p'>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <p
      className={cn('leading-7 text-sm [&:not(:first-child)]:mt-6', className)}
      {...rest}
    >
      {children}
    </p>
  );
};

export const Caption: React.FC<ComponentPropsWithoutRef<'p'>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <p
      className={cn('leading-7 text-xs [&:not(:first-child)]:mt-6', className)}
      {...rest}
    >
      {children}
    </p>
  );
};
