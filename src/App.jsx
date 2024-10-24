import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './Auth/Login';
import ProtectedRoute from './Auth/ProtectedRoute';

import Dashboard from './Dashboard/Dashboard';
import LandingPage from './Landing/Landing'
import Register from './Register/Register'
import PageNotFound from './PageNotFound'


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          /** PAGINA 404 **/
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


