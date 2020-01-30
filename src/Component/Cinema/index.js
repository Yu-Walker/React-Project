import React, { Component } from 'react';

import Tittle from '../../Common/Tittle';

export default class Cinema extends Component {

    state = {
        name: "影院",
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
