import React from 'react';

export default function Login() {
  return (
    <div className="login-page">
      <form className="login-form">
        <h2>🔐 Iniciar sesión</h2>
        <label>Correo:</label>
        <input type="email" placeholder="Ingrese su correo" />
        <label>Contraseña:</label>
        <input type="password" placeholder="Ingrese su contraseña" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
