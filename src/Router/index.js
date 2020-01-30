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
                <Route path="/Film" render={(props)=>{
                    return <Film {...props}/>
                }} />
                <Route path="/Cinema" render={(props)=>{
                    return <Cinema {...props}/>
                }} />
                <Route path="/My" render={(props)=>{
                    return <My {...props}/>
                }} />
                {/* 进行重定向的设置 */}
                <Redirect from="/" to="/Film" />
            </Switch>
        </App>
    </Router>
)

export default router;