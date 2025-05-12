import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await AuthService.register(username, email, password, ["user"]);
      setMessage("✅ Registro exitoso. Redirigiendo...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage("❌ Error al registrar usuario.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleRegister} className="form">
        <h2>📝 Registro</h2>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Usuario" required />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}
