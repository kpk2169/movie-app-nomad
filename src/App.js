import React from "react";  
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from './routes/home';
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/About" component={About} />
    </HashRouter>
  
    );

}

export default App;