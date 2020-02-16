import React, { Component } from 'react';

import style from './index.module.scss'

export default class Download extends Component {
    render() {
        return (
            <div id={style.Download}>
                <img src="./picture/logo.png" />
                <div>
                    <h2>猫眼</h2>
                    <p>在线选座，热门影讯，爱上看电影</p>
                </div>
                <button>立即打开</button>
            </div>
        )
    }
}
