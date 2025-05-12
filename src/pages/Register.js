import React from 'react';

export default function Register() {
  return (
    <div className="register-page">
      <form className="register-form">
        <h2>📝 Registro</h2>
        <label>Usuario:</label>
        <input type="text" placeholder="Ingrese su nombre de usuario" />
        <label>Correo:</label>
        <input type="email" placeholder="Ingrese su correo" />
        <label>Contraseña:</label>
        <input type="password" placeholder="Cree una contraseña" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
