import React, { Component } from 'react';
import { Route } from 'react-router';


//load components
import LoginComponent from './components/loginComponent';

const App = () => (
  <div>
    <Route path="/" component={LoginComponent} message= 'welcome'/>
  </div>
);

export default App;

    // <Route path="/" component={LoginComponent} message= 'welcome'/>

        // <Route path="/" render={ routeProps => <LoginComponent  color="blue" /> } />
