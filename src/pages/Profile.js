import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    const confirmLogout = window.confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (confirmLogout) {
      localStorage.removeItem("user");
      setMessage("Has cerrado sesión correctamente.");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>👤 Perfil del Usuario</h2>

      {message && (
        <div
          style={{
            backgroundColor: "#dcfce7",
            color: "#166534",
            padding: "0.8rem",
            borderRadius: "8px",
            marginBottom: "1rem",
            fontWeight: "bold"
          }}
        >
          ✅ {message}
        </div>
      )}

      {user ? (
        <>
          <p><strong>Usuario:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Roles:</strong> {user.roles?.join(", ")}</p>

          <button
            onClick={handleLogout}
            style={{
              marginTop: "1.5rem",
              padding: "0.6rem 1rem",
              backgroundColor: "#dc2626",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Cerrar sesión
          </button>
        </>
      ) : (
        <p>No hay usuario autenticado.</p>
      )}
    </div>
  );
}
