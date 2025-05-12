import React from "react";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div style={{ padding: "2rem" }}>
      <h2>👤 Perfil del Usuario</h2>
      {user ? (
        <>
          <p><strong>Usuario:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Roles:</strong> {user.roles?.join(", ")}</p>
        </>
      ) : (
        <p>No hay usuario autenticado.</p>
      )}
    </div>
  );
}
