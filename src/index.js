import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import UsersList from './components/users/UsersList';
import UserDetail from './components/users/UserDetail';

import reportWebVitals from './reportWebVitals';

const Routing = () => {
  return(
    <Router>
      <App />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/users/:id" component={UserDetail} />
        <Route path="/users" component={UsersList} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <Routing />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
