import {
  // createBrowserRouter,
  Route,
  // RouterProvider,
  Routes,
} from 'react-router-dom';
import { Home } from '../modules/report/home';
import { Form } from '@/modules/report/form';

export const GlobalRoutes = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario/" element={<Form />} />
      </Routes>
    </div>
  );
};

export default GlobalRoutes;
