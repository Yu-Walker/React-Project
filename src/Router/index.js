import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import React from 'react';
import App from '../App.js';

import Film from '../Component/Film';
import Cinema from '../Component/Cinema';
import My from '../Component/My';

import Login_one from '../Component/My/Login_one';
import Login_twe from '../Component/My/Login_twe';

import NowPlaying from '../Component/Film/NowPlaying';
import ComingSoon from '../Component/Film/ComingSoon';

const router = (
    <Router>
        <App>
            <Switch>
                <Route path="/Film" render={(props)=>{
                    return <Film {...props}>
                            <Switch>
                                <Route path="/Film/NowPlaying" component={NowPlaying}/>
                                <Route path="/Film/ComingSoon" component={ComingSoon}/>
                            </Switch>
                        </Film>
                }} />
                <Route path="/Cinema" render={(props)=>{
                    return <Cinema {...props}/>
                }} />
                <Route path="/My" render={(props)=>{
                    return <My {...props}>
                        <Switch>
                            <Route path="/My/Login_one" component={Login_one}/>
                            <Route path="/My/Login_twe" component={Login_twe}/>
                            <Redirect from="/My" to="/My/Login_one"/>
                        </Switch>
                    </My>
                }}/>
                {/* 进行重定向的设置 */}
                <Redirect from="/" to="/Film" />
            </Switch>
        </App>
    </Router>
)

export default router;