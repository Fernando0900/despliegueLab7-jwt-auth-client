import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.login(form.username, form.password)
      .then(() => navigate("/profile"))
      .catch(() => setMessage("❌ Credenciales inválidas"));
  };

  return (
    <div className="login-form">
      <h2>🔐 Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Usuario" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit">Entrar</button>
      </form>
      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
}
