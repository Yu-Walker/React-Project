import React, { Component } from 'react';
import style from './index.module.scss';

import Login_last from '../Login_last';

export default class login_one extends Component {
    render() {
        return (
            <div id={style.login_one}>
                <ul>
                    <li><input type="text" placeholder="账户名/手机号/Email" /></li>
                    <li><input type="password" placeholder="请输入您的密码" /></li>
                </ul>
                <div>
                    <button>登录</button>
                </div>
                <Login_last />
            </div>
        )
    }
}
