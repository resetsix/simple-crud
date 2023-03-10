import React from "react";
import { LoginScreen } from "./auth/login";
import "./App.css";
import { ProjectList } from "./page";

function App() {
  return (
    <div className="App">
      {/* <LoginScreen /> */}
      <ProjectList />
    </div>
  );
}

export default App;
