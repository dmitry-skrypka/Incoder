import React  from 'react';
import {
    Router, Route, Switch, Redirect,
} from 'react-router-dom';

import Menu from '../features/menu'
import history from './history';
import App from "../App";







function GameRouter(props) {

    return <Router history={history}>
        <Switch>
          <Route exact path="/Incoder/" component={Menu} />

          <Route path="/game" render={() => <App/>} />
        </Switch>
      </Router>;
}

export default GameRouter;


