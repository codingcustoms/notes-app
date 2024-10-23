import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Search,
  ShoppingCart,
  Users2,
} from '@/assets/icons';
import { useAppNavigate } from '@/hooks';
import { PUBLIC_ROUTES } from '@/routes/appRoutes';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Sheet,
  SheetContent,
  SheetTrigger,
} from '../ui';

export const TopMenubar = () => {
  const { navigateTo } = useAppNavigate();
  const handleOnClickLogout = () => navigateTo(PUBLIC_ROUTES.SIGN_IN);

  return (
    <header className='sticky top-0 inset-x-0 flex items-center gap-4 h-14 border-b bg-background px-4 sm:px-6'>
      <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' variant='outline' className='sm:hidden'>
            <PanelLeft className='h-5 w-5' />
            <span className='sr-only'>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='sm:max-w-xs'>
          <nav className='grid gap-6 text-lg font-medium'>
            <Link
              to='#'
              className='group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'
            >
              <Package2 className='h-5 w-5 transition-all group-hover:scale-110' />
              <span className='sr-only'>Acme Inc</span>
            </Link>
            <Link
              to='#'
              className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
            >
              <Home className='h-5 w-5' />
              Dashboard
            </Link>
            <Link
              to='#'
              className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
            >
              <ShoppingCart className='h-5 w-5' />
              Orders
            </Link>
            <Link
              to='#'
              className='flex items-center gap-4 px-2.5 text-foreground'
            >
              <Package className='h-5 w-5' />
              Products
            </Link>
            <Link
              to='#'
              className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
            >
              <Users2 className='h-5 w-5' />
              Customers
            </Link>
            <Link
              to='#'
              className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
            >
              <LineChart className='h-5 w-5' />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Breadcrumb className='hidden md:flex'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to='#'>Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to='#'>Products</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>All Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='relative ml-auto flex-1 md:grow-0'>
        <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
        <Input
          type='search'
          placeholder='Search...'
          className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]'
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className='overflow-hidden rounded-full'
          >
            <img
              src='https://github.com/shadcn.png'
              width={36}
              height={36}
              alt='Avatar'
              className='overflow-hidden rounded-full'
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleOnClickLogout}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
