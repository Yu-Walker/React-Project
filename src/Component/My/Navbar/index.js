import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import style from './index.module.scss';

export default class index extends Component {
    render() {
        return (
            <div id={style.Navbar}>
                    <NavLink activeClassName={style.focus} to={'/' + 'My' + '/' + 'Login_one'}>美团账号登录</NavLink>
                    <NavLink activeClassName={style.focus} to={'/' + 'My' + '/' + 'Login_twe'}>手机验证登录</NavLink>
            </div>
        )
    }
}