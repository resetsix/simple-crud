import React from "react";
import "./App.css";
import { AuthenticatedApp } from "./auth/AuthenticatedApp";
import { UnAuthenticatedApp } from "./auth/UnAuthenticatedApp";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <div>{user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}</div>
    </div>
  );
}

export default App;
