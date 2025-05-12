import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/user.service";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [serverData, setServerData] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);

      // ✅ Llamada al backend protegida
      UserService.getUserBoard()
        .then(res => {
          setServerData(res.data); // Aquí puedes renderizar si backend retorna info
        })
        .catch(err => {
          console.error("Error al obtener datos del backend", err);
        });
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

          {serverData && (
            <div style={{ marginTop: "1rem", color: "#1e40af" }}>
              <strong>📡 Datos del servidor:</strong> {serverData}
            </div>
          )}

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
