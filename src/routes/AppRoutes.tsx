import { Route, Routes } from 'react-router';

import { NotFound } from '../pages/NotFound/NotFound';
import { Editor } from '../pages/Editor/Editor';
import { Dashboard } from '../pages/Dashboard/Dashboard';

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/editor' element={<Editor />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
);
