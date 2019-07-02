import React, { Component } from 'react';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
// import { List } from './component/List';   
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { DetailItem } from "./pages/DetailItem";

export class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h2>Star Wars</h2>
      
        
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/list/:id" component={DetailItem} />
          </Switch>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Router>
        </div>
    );
  }
}
