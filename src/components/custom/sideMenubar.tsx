import { Home, Package2, Settings } from '@/assets/icons';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui';

export const SideMenubar = () => {
  return (
    <aside className='fixed inset-y-0 left-0 z-10 w-14 border-r bg-background hidden sm:flex flex-col'>
      <nav className='flex flex-col items-center gap-4 px-2 py-4'>
        <Link
          to='#'
          className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
        >
          <Package2 className='h-4 w-4 transition-all group-hover:scale-110' />
          <span className='sr-only'>Acme Inc</span>
        </Link>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to='#'
              className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
            >
              <Home className='h-5 w-5' />
              <span className='sr-only'>Dashboard</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side='right'>Dashboard</TooltipContent>
        </Tooltip>
      </nav>

      <nav className='mt-auto flex flex-col items-center gap-4 px-2 py-4'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to='#'
              className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
            >
              <Settings className='h-5 w-5' />
              <span className='sr-only'>Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side='right'>Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};
