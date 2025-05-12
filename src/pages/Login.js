import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await AuthService.login(username, password);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/profile");
    } catch (err) {
      setMessage("❌ Error al iniciar sesión.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleLogin} className="form">
        <h2>🔐 Iniciar sesión</h2>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Usuario" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" required />
        <button type="submit">Entrar</button>
        {message && <p className="error">{message}</p>}
      </form>
    </div>
  );
}
