import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    AuthService.login(form.username, form.password)
      .then(() => {
        navigate("/profile");
        window.location.reload(); // 🔄 recarga para asegurar lectura del usuario
      })
      .catch((error) => {
        let errMsg = "Error al iniciar sesión.";
        if (error.response && error.response.data && error.response.data.message) {
          errMsg = error.response.data.message;
        }
        setMessage(`❌ ${errMsg}`);
        setLoading(false);
      });
  };

  return (
    <div className="login-form">
      <h2>🔐 Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Usuario"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Entrar"}
        </button>
      </form>
      {message && (
        <p style={{ marginTop: "1rem", color: "red", fontWeight: "bold" }}>{message}</p>
      )}
    </div>
  );
}
