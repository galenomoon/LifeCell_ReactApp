import React from 'react'

//deeps
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages

import LandingPage from '../pages/public/LandingPage';
import { AdminRoutes, StudentRoutes } from './AuthenticatedRoutes';

export default function ApplicationRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/admin/*' element={<AdminRoutes />} />
        <Route path='/student/*' element={<StudentRoutes />} />
      </Routes>
    </Router>
  )
}