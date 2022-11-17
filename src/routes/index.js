import React from 'react'

//deeps
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import LandingPage from '../pages/public/LandingPage';
import Login from '../pages/public/Login';
import { AdminRoutes, StudentRoutes } from './AuthenticatedRoutes';

export default function ApplicationRouter() {

  return (
    <Router>
      <div className='bg-default bg-cover w-full h-full text-[#fff] font-poppins'>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/login' element={<Login />} />
          <Route path='/admin/*' element={<AdminRoutes />} />
          <Route path='/student/*' element={<StudentRoutes />} />
        </Routes>
      </div>
    </Router>
  )
}