import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

const GreetingHome = () => {
  return <div>Hey There!</div>
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
);