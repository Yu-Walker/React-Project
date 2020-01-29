import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import style from './index.module.scss';

export default class Tabbar extends Component {
    render() {
        return (
            <div id={style.Tabbar}>
                <ul>
                    <li><NavLink activeClassName={style.focus} to={'/film'}>电影</NavLink></li>
                    <li><NavLink activeClassName={style.focus} to={'/cinema'}>影院</NavLink></li>
                    <li><NavLink activeClassName={style.focus} to={'/my'}>我的</NavLink></li>
                </ul>
            </div>
        )
    }
}
