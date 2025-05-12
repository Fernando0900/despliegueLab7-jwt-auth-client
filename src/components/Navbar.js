import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">🏠 Inicio</Link>
      {!user && (
        <>
          <Link to="/login">Iniciar sesión</Link>
          <Link to="/register">Registrarse</Link>
        </>
      )}
      {user && (
        <>
          <Link to="/profile">Mi perfil</Link>
          <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button>
        </>
      )}
    </nav>
  );
}
