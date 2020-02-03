import React, { Component } from 'react';

import style from './index.module.scss';

export default class index extends Component {
    render() {
        return (
            <div id={style.Login_last}>
                <ol>
                    <li><a href="#">立即注册</a></li>
                    <li><a href="#">找回密码</a></li>
                </ol>
                <p>猫眼电影 客服电话:
                    <span>400-670-5335</span>
                </p>
            </div>
        )
    }
}
