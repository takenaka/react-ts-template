import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import Index from 'components/pages/Index';
import Count from 'components/pages/Count';
import * as serviceWorker from 'serviceWorker';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import store from 'stores';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <nav>
        <Link style={{ marginRight: '8px' }} to="/">
          index
        </Link>
        <Link to="/count">count</Link>
      </nav>
      <Switch>
        <Route path="/" exact children={<Index />} />
        <Route path="/count" children={<Count />} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
