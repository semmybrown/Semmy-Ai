import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <main>
      <h1>Semmy AI</h1>
      <p>Your intelligent executive assistant.</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
