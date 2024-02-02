import { Route, Routes } from 'react-router-dom';

import { Identification } from './identification';

export const FormRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/relato" element={<Identification />} />
      </Routes>
    </>
  );
};
