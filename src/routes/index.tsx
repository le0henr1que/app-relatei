import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../modules/relato/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export const GlobalRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
