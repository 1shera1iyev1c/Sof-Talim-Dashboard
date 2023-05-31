import React, { useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dashboard } from "./Components";
import { AuthContext } from "./Context/Auth-Context";
import { Main } from "./Pages/Main/Main";

function App() {
  const { token } = useContext(AuthContext);

  if (token?.token) {
    return <Main />;
  } else {
    return <Dashboard />;
  }
}

export default App;
