import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="navbar">
      <div className="navbar-links">
  <Link to="/">Inicio</Link>

  {!user && (
    <>
      <Link to="/login">Iniciar sesión</Link>
      <Link to="/register">Registrarse</Link>
    </>
  )}

  {user && (
    <>
      <Link to="/profile">Perfil</Link>
      {user.roles.includes("ROLE_MODERATOR") && <Link to="/mod">Moderador</Link>}
      {user.roles.includes("ROLE_ADMIN") && <Link to="/admin">Administrador</Link>}
      <a
        href="/"
        onClick={() => {
          localStorage.removeItem("user");
          window.location.reload();
        }}
      >
        Cerrar sesión
      </a>
    </>
  )}
</div>

    </nav>
  );
}
