import React from "react";
import "./App.css";
import { UnAuthenticatedApp } from "./auth/UnAuthenticatedApp";
import ErrorBoundary from "./components/error-boundary";
import { FullPageBackError } from "./components/lib";
import { useAuth } from "./hooks/useAuth";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticatedApp } from "./auth/AuthenticatedApp";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <Router>
        <ErrorBoundary fallbackRender={FullPageBackError}>
          <div>{user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}</div>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
