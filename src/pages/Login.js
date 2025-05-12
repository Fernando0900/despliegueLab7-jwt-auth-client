import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import "./Login.css"; // Importamos el CSS

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!form.username || !form.password) {
      setMessage("⚠️ Todos los campos son obligatorios.");
      return;
    }

    try {
      const res = await AuthService.login(form.username, form.password);
      localStorage.setItem("user", JSON.stringify(res.data));
      setMessage("");
      navigate("/profile");
    } catch (err) {
      setMessage("❌ Credenciales incorrectas.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>🔐 Iniciar Sesión</h2>

        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Ingrese su usuario"
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Ingrese su contraseña"
        />

        <button type="submit">Ingresar</button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}
