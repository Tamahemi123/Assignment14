import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import Service from './components/Service';
import Project from './components/Project';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/service" component={Service} />
        <Route path="/project" component={Project} />
        <Route path="/testimonial" component={Testimonial} />
      </Switch>
    </Router>
  );
}

export default App;
