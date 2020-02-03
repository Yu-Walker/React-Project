import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import style from './index.module.scss';

export default class Tabbar extends Component {
    render() {
        return (
            <div id={style.Tabbar}>
                    <NavLink activeClassName={style.active} to={'/Film'}>电影</NavLink>
                    <NavLink activeClassName={style.active} to={'/Cinema'}>影院</NavLink>
                    <NavLink activeClassName={style.active} to={'/My'}>我的</NavLink>
            </div>
        )
    }
}
