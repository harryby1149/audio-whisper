import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/landing_page/landing';

function App() {
    return (
      <Router basename={window.location.pathname || ''}>
        <Switch>
          <Route exact path="/" component={Landing}/>
        </Switch>
      </Router>
    );
}

export default App;
