import React from "react";  
import { HashRouter, Route } from "react-router-dom";
import About from "./routers/About.js";
import Home from './routers/home.js';
import Detail from './routers/Detail.js';
import Navigation from "./components/Navigation.js";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/About" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  
    );

}

export default App;