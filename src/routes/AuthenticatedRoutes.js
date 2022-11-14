import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminHome from '../pages/admin/Home';
import StudentHome from '../pages/student/Home';

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route exact path='/home' element={<AdminHome/>} />
    </Routes>
  )

}
export const StudentRoutes = () => {
  return (
    <Routes>
      <Route exact path='/home' element={<StudentHome/>} />
    </Routes>
  )

}
