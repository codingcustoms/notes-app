import React from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className='w-dvw h-dvh flex items-center justify-center bg-muted'>
      <Outlet />
    </div>
  );
};
