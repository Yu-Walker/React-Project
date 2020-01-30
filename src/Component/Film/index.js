import React, { Component } from 'react';

import Tittle from '../../Common/Tittle';

export default class Film extends Component {

    state = {
        name: "猫眼电影",
        GoBackButton: false
    }

    render() {
        return (
            <div>
                <Tittle {...this.state}/>
            </div>
        )
    }
}
