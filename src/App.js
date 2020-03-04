import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Dashboard from './components/layouts/Dashboard';
import {HashRouter as Router, Route,Switch} from 'react-router-dom';
import Pokemon from './components/pokemon/Pokemon';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
