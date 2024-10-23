import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Toaster, TooltipProvider } from './components/ui';
import { PrivateRoutes } from './routes/privateRoutes';
import { PublicRoutes } from './routes/publicRoutes';

const router = createBrowserRouter([...PublicRoutes, ...PrivateRoutes]);

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RouterProvider router={router} />
        <Toaster richColors />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
