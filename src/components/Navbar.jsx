import '../assets/css/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Logotype from '../assets/img/Kodigologo.png';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    const verifyToken = async () => {
  
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/auth/dashboard', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error en la verificación del token:', error);
        setIsAuthenticated(false);
      }
    };

    verifyToken();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/'); 
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">

        {/* Logotipo */}
        <Link className="navbar-brand" to="/">
          <img src={Logotype} alt="Kodigo" className="d-inline-block align-text-top" />
        </Link>

        {/* Botón para colapsar el menú */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        {/* Elementos del menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!isAuthenticated ? (
              <>
                <li className="nav-item mx-4">
                  <Link className="nav-link text-white fs-4" to="/login">Login</Link>
                </li>
                <li className="nav-item mx-4">
                  <Link className="nav-link text-white fs-4" to="/register">Register</Link>
                </li>
              </>
            ) : (
              <li className="nav-item mx-4">
                <button className="nav-link text-white fs-4 btn" onClick={handleLogout}>Logout</button>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item mx-4">
                <Link className="nav-link text-white fs-4" to="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
