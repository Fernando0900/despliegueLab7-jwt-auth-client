import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import "./Login.css"; // Usamos el mismo estilo de login

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      setMessage("⚠️ Todos los campos son obligatorios.");
      return;
    }

    try {
      await AuthService.register(form.username, form.email, form.password);
      setMessage("✅ Usuario registrado correctamente.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage("❌ Error al registrar usuario.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>📝 Registro</h2>

        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Ingrese su nombre de usuario"
        />

        <label htmlFor="email">Correo:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Ingrese su correo"
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Cree una contraseña"
        />

        <button type="submit">Registrarse</button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}
