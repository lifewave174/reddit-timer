import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './Normalize.css';
import './App.css';

import Header from './components/Header';
import Search from './components/Search';
import Home from './components/Home';

function App() {
  return (
    <div>
      App Placeholder
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/search"><Search /></Route>
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
