import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Catalog from './pages/catalog';
import Form from './pages/form';
import Home from './pages/home';

export default (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/services" element={<Catalog />} />
  </Routes>
);
