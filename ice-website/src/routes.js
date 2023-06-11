import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Catalog from './pages/catalog';
import Form from './pages/form';

export default (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/form" element={<Form />} />
  </Routes>
);
