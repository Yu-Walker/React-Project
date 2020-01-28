import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import React from 'react';
import App from '../App.js';

import Film from '../Component/Film';
import Cinema from '../Component/Cinema';
import My from '../Component/My';


const router = (
    <Router>
        <App>
            <Switch>
                <route path="/film" component={Film} />
                <route path="/cinema" component={Cinema} />
                <route path="/my" component={My} />
            </Switch>
        </App>
    </Router>
);

export default router;