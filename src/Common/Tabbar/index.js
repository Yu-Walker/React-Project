import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import style from './index.module.scss';

export default class Tabbar extends Component {
    render() {
        return (
            <div  id={style.Tabbar}>
               <NavLink to={'/film'}>电影</NavLink>
               <NavLink to={'/cinema'}>影院</NavLink>
               <NavLink to={'/my'}>我的</NavLink>
            </div>
        )
    }
}
