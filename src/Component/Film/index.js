import React, { Component } from 'react';

import Axios from 'axios';

import Tittle from '../../Common/Tittle';
import Download from '../../Common/Download';
import Navbar from './Navbar';

export default class Film extends Component {

    state = {
        name: "猫眼电影",
        GoBackButton: false
    }

    componentDidMount() {
        Axios.get('/ajax/movieOnInfoList?token=').then(res=>{
            console.log(res.data);
        })
    }
    

    render() {
        return (
            <div>
                <Tittle {...this.state}/>
                <Download />
                <Navbar />
                {this.props.children}
            </div>
        )
    }
}
