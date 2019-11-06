import React from 'react';
import ReactDOM from 'react-dom';
import Login from './screens/Login/login';
import Dashboard from './screens/Dashboard/dashboard';

import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(<Dashboard />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
