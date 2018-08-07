import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './components/App'
import Home from './components/home/home'
import League from './components/league/league'
import NotFound from './components/notfound/notfound'

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" render={() => <Home code="456"/>} />;
      <Route path="/league/:code" component={League} />
      <Route path="*" component={NotFound} />
    </Switch>
  </App>
)

export default Routes
