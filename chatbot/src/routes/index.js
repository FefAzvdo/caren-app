import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Contatos from '../pages/contatos';
import Conversa from '../pages/conversa';
import Prontuario from '../components/Prontuario';

const Routes = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={Contatos} />
        <Route exact path="/prontuario" component={Prontuario} />
        <Route exact path="/conversa/:nome/:id" component={Conversa} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Routes;
