import React, { Component } from 'react';
import Tittle from '../../Common/Tittle';
import Navbar from './Navbar'

export default class My extends Component {

    state = {
        name: "猫眼电影",
        GoBackButton: true
    }

    render() {
        return (
            <div>
                <Tittle {...this.state} />
                <Navbar/>
                {this.props.children}
            </div>
        )
    }
}
