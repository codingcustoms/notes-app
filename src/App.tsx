import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { PrivateRoutes } from './routes/privateRoutes';
import { PublicRoutes } from './routes/publicRoutes';

const router = createBrowserRouter([...PublicRoutes, ...PrivateRoutes]);

function App() {
  return (
    <div className='w-dvw h-dvh flex items-center justify-center'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
