import {
  // createBrowserRouter,
  Route,
  // RouterProvider,
  Routes,
} from 'react-router-dom';
import { Home } from '../modules/report/home';
import { FormRoutes } from '../modules/report/form/form.routes';

export const GlobalRoutes = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario/*" element={<FormRoutes />} />
      </Routes>
    </div>
  );
};

export default GlobalRoutes;
