import {
  // createBrowserRouter,
  Route,
  // RouterProvider,
  Routes,
} from 'react-router-dom';
import { Home } from '../modules/report/home';
import { Form } from '@/modules/report/form';
import { Dashboard } from '@/modules/dashboard';
import { Chat } from '@/modules/chat';

export const GlobalRoutes = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario/" element={<Form />} />
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/chat/" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default GlobalRoutes;
