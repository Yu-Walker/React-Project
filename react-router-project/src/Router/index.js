// Router

// 使用了JSX语法，我们需要引入React对象；
import React from 'react';

// 引入React相关；
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// 引入App跟组件，跟组件包括其他的路由组件；
import App from '../App.js';

import HomePage from '../Views/HomePage';
import ProductPage from '../Views/ProductPage';
import UserPage from '../Views/UserPage';

// 引入二级路由；

import Now from '../Views/HomePage/Now';
import Future from '../Views/HomePage/Future';

const router = (
    <Router>
        <App>
            {/* Switch的加入是为了路由更准确的匹配，修复之前react版本的bug */}
            <Switch>
                {/* <Route path='/HomePage' component={HomePage}></Route> */}
                {/* 回调函数函数后面的内容并不需要+{}来进行渲染，这反而会让渲染出错 */}
                <Route path='/HomePage' render={() => (
                    <HomePage>
                        <Switch>
                            <Route path="/HomePage/Now" component={Now} />
                            <Route path="/HomePage/Future" component={Future} />
                            <Redirect from="/" to="/HomePage/Future" />
                        </Switch>
                    </HomePage>
                )}></Route>
                <Route path='/ProductPage' component={ProductPage}></Route>
                <Route path='/UserPage' component={UserPage}></Route>
                {/* 路由重定向 */}
                <Redirect from="/" to="/HomePage" />
            </Switch>
        </App>
    </Router>
)

export default router;

// 路由分为以一级路由、二级路由，最经典的案例无非是猫眼的“正在热映”、“即将上映”，属于二级路由，也属于路由之间的嵌套，植入二级路由时我们需要将“component”换成render，render的参数为一个回调函数，我可以通过这个回调函数去植入二级路由。