import React, { Component } from 'react';

import style from './index.module.scss';

export default class GoBackButton extends Component {
    render() {
        return (
            <div id={style.GoBackButton} class="iconfont icon-fanhui" onClick={this.handleClick_GoBack}>
            </div>
        )
    }
    handleClick_GoBack() {
        console.log('aaa');
    }
}
