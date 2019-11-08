import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Inicial from './pages/Inicial';
import Consulta from './pages/Consulta';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Inicial} />
        <Route path="/consulta" component={Consulta} />
      </Switch>
    </BrowserRouter>
  )
}