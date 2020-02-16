import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import style from './index.module.scss';

export default class Navbar extends Component {
    render() {
        return (
            <div id={style.Navbar}>
                <p>大连</p>
                <h2>
                <NavLink activeClassName={style.focus} to={'/' + 'Film' + '/' + 'NowPlaying'}>正在热映</NavLink>
                <NavLink activeClassName={style.focus} to={'/' + 'Film' + '/' + 'ComingSoon'}>即将上映</NavLink>
                </h2>
                <span class="iconfont icon-fangdajing"></span>
            </div>
        )
    }
}
