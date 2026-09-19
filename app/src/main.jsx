import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="app">
      <section className="welcome">
        <div className="logo">S</div>

        <p className="eyebrow">SEMMy AI</p>

        <h1>
          Your intelligent
          <span> executive assistant.</span>
        </h1>

        <p className="description">
          Manage tasks, information, communication and workflows
          with one intelligent assistant.
        </p>

        <button className="start-button">
          Start with Semmy AI
        </button>
      </section>
    </main>
  ););
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
