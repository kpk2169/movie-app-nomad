import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from './routes/home';

function App() {
  return <HashRouter>
    <Route path="/" exact={true} component={Home} />
    <Route path="/About" component={About} />
  </HashRouter>;
}

export default App;