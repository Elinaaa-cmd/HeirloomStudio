
import React from "react";
import "./styles.css";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const message = document.getElementById("form-message");

    message.textContent = `¡Bienvenido a Heirloom Studio, ${name}!`;
  };

  return (
    <main className="page">
      <div className="page-label">Inicio</div>

      <section
        className="welcome-art"
        aria-label="Inicio de Heirloom Studio"
      >
        <div className="login-card">
          <h1>HEIRLOOM STUDIO</h1>
          <p className="subtitle">Usuario</p>

          <form id="welcome-form" onSubmit={handleSubmit}>
            <label className="visually-hidden" htmlFor="name">
              Nombre
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Nombre"
              autoComplete="name"
              required
            />

            <label className="visually-hidden" htmlFor="email">
              Correo
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Correo"
              autoComplete="email"
              required
            />

            <button type="submit">
              Iniciar sesión
            </button>

            <p className="form-message" id="form-message" aria-live="polite">
              Inicia sesión con calma y estilo.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;
