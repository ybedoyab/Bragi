import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../views/login/Login';
import Dashboard from '../views/dashboard/Dashboard';
import NotFound from '../views/notfound/NotFound';
import Index from '../views/index/Index';

const Server = () => {
  return (
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} /> {/* Ruta para el formulario de inicio de sesión */}
        <Route path="/*" element={<Dashboard />} /> {/* Ruta para el resto de la aplicación */}
    </Routes>
  </BrowserRouter>
  );
}

export default Server