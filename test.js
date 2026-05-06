import React from "react";

export default function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome 👋</h1>
        <p style={styles.text}>
          This is a simple React design component.
        </p>
        <button style={styles.button}>Get Started</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
  },
  card: {
    padding: "30px",
    borderRadius: "15px",
    background: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "300px",
  },
  title: {
    marginBottom: "10px",
  },
  text: {
    marginBottom: "20px",
    color: "#555",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    background: "#6c63ff",
    color: "#fff",
    cursor: "pointer",
  },
};