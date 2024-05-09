import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../index/Index"

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* puede haber un componente */}
      <div className="zona-de-trabajo">
        <Routes>
          <Route path="/menuPrincipal" element={<Index />} />
          <Route path="/perfil" element={<Index />} />
          <Route path="/calendario" element={<Index />} />
          <Route path="/config" element={<Index />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard