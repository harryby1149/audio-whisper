import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/landing_page/landing';
import Dashboard from './pages/dashboard/dashboard';
import SongTree from './pages/songTree/songTree';

function App() {
    return (
      // <Router basename={window.location.pathname || ''}> Put this in during production
      // The routing is currently done on the front end, will be moved to the server eventually
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/testTrack" component={SongTree}/>
        </Switch>
      </Router>
    );
}

export default App;
