import React from "react";
import "./App.css";
import { AuthenticatedApp } from "./auth/AuthenticatedApp";
import { UnAuthenticatedApp } from "./auth/UnAuthenticatedApp";
import ErrorBoundary from "./components/error-boundary";
import { FullPageBackError } from "./components/lib";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageBackError}>
        <div>{user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}</div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
