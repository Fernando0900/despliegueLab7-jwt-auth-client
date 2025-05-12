import React from "react";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h2>👤 Perfil del usuario</h2>
      {user ? (
        <div>
          <p><strong>Usuario:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Roles:</strong> {user.roles.join(", ")}</p>
          <p><strong>Token:</strong> {user.accessToken.substring(0, 25)}...</p>
        </div>
      ) : (
        <p>⚠️ No hay usuario autenticado.</p>
      )}
    </div>
  );
}
