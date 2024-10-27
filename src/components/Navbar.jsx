import '../assets/css/Navbar.css';
import { Link } from 'react-router-dom'; 
import Logotype from '../assets/img/Kodigologo.png';

export const Navbar = () => {
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
            <li className="nav-item mx-4">
              <Link className="nav-link text-white fs-4" to="/login">Login</Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link text-white fs-4" to="/register">Register</Link>
            </li>
            <li className="nav-itemcmx-4">
              <Link className="nav-link text-white fs-4" to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
