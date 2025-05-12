import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    AuthService.register(form.username, form.email, form.password, ["user"])
      .then(() => {
        setMessage("✅ Registro exitoso. Redirigiendo al inicio de sesión...");
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch(() => {
        setMessage("❌ Error al registrar. Intenta de nuevo.");
      });
  };

  return (
    <div className="register-form">
      <h2>📝 Registro</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Usuario" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Correo" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit">Registrarse</button>
      </form>
      {message && <p style={{ color: message.includes("✅") ? "green" : "red" }}>{message}</p>}
    </div>
  );
}
