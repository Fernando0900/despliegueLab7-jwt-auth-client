import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>👤 Perfil del Usuario</h2>
      {user ? (
        <>
          <p><strong>Usuario:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Roles:</strong> {user.roles?.join(", ")}</p>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <p>No hay usuario autenticado.</p>
      )}
    </div>
  );
}
