import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";
import Router from './pages';

function App() {
  return (
    <div className="container">
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
