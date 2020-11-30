import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Dashboard from '../pages/Dashboard';
import Form from '../pages/Form';

import Update from '../pages/Update';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/signup" component={Cadastro} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/newPerson" component={Form} isPrivate />
    <Route path="/updatePerson/:id" component={Update} isPrivate />
  </Switch>
);

export default Routes;
