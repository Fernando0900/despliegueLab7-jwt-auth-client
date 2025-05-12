import React, { useState } from "react";
import AuthService from "../services/auth.service";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.register(form.username, form.email, form.password, ["user"])
      .then(() => setMessage("✅ Registrado con éxito"))
      .catch(() => setMessage("❌ Error al registrar usuario."));
  };

  return (
    <div className="register-form">
      <h2>📝 Registro</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Ingrese su nombre de usuario" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Ingrese su correo" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Cree una contraseña" onChange={handleChange} required />
        <button type="submit">Registrarse</button>
      </form>
      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
}
