import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Contatos from '../pages/contatos';
import Conversa from '../pages/conversa';

const Routes = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={Contatos} />
        <Route exact path="/conversa/:nome/:id" component={Conversa} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Routes;
