import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <h1
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "20px",
          margin: 0,
        }}
      >
        TEST - VEZI ASTA?
      </h1>
      <div
        style={{
          backgroundColor: "#fff3cd",
          borderBottom: "2px solid #ffc107",
          padding: "12px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#856404",
            fontSize: "14px",
          }}
        >
          Acest website nu este pagina oficiala Atomy. Este pur informativ.
          Produsele pot fi cumparate doar de pe pagina oficiala Atomy.
        </p>
      </div>
      <Navbar />
      <Routes>{/* ...existing routes and components... */}</Routes>
    </Router>
  );
}

export default App;
