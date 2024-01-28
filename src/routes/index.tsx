import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../modules/relato/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/formulario',
    element: <h1> ola mundo</h1>,
  },
]);

export const GlobalRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
