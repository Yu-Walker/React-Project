import  React from 'react';

import App from '../App.js';

import First from '../Component/First';
import Second from '../Component/Second';
import Third from '../Component/Third';

import Now from '../Component/First/Now';
import Fut from '../Component/First/Fut';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const router = (
    <Router>
        <App>
            <Switch>
                <Route path="/First" render={()=>{
                    return ( <First>
                        <Switch>
                            {/* 注意二级路由的path路径需要完整的绝对路径 */}
                            <Route path="/First/Now" component={Now}></Route>
                            <Route path="/First/Fut" component={Fut}></Route>
                            <Redirect from="/First" to="/First/Fut"></Redirect>
                        </Switch>
                    </First>
                )}}></Route>
                <Route path="/Second" component={Second}></Route>
                <Route path="/Third" component={Third}></Route>
                <Redirect from="/" to="/Third"></Redirect>
            </Switch>
        </App>
    </Router>
)

export default router;