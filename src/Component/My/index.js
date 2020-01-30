import React, { Component } from 'react';
import Tittle from '../../Common/Tittle';

export default class My extends Component {

    state = {
        name: "猫眼电影",
        GoBackButton: true
    }

    render() {
        return (
            <div>
                <Tittle {...this.state} />
            </div>
        )
    }
}
