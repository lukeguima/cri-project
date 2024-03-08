import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './screens/login';
import Home from './screens/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
