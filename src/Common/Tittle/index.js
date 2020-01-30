import React, { Component } from 'react';

import style from './index.module.scss';
import GoBackButton from '../GoBackButton';

export default class Tittle extends Component {
    render() {
        return (
            <div id={style.Tittle}>
                {
                    this.props.GoBackButton?
                    <GoBackButton/>:
                    null
                }
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}
