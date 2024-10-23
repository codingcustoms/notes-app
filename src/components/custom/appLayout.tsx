import { Outlet } from 'react-router-dom';
import { SideMenubar } from './sideMenubar';
import { TopMenubar } from './topMenubar';

export const AppLayout = () => {
  return (
    <div className='w-dvw h-dvh overflow-x-hidden bg-muted'>
      <SideMenubar />
      <div className='flex flex-col sm:gap-4 sm:pl-14'>
        <TopMenubar />
        <main className='p-4 sm:px-6 max-w-screen-2xl'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
