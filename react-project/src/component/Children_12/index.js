import React from 'react';

import './index.css';

class Children_12 extends React.Component{
    constructor() {
        super();

        this.state = ({
            
        });
    }

    render() {
        return (
            <div className="Children_12">
                <h2>children_12</h2>
                <ul>
                    <li data="1" onClick={(e) => {this.handleClick(e)}}>首页</li>
                    <li data="2" onClick={(e) => {this.handleClick(e)}}>列表</li>
                    <li data="3" onClick={(e) => {this.handleClick(e)}}>我的</li>
                    <li data="4" onClick={(e) => {this.handleClick(e)}}>活动</li>
                    <li data="5" onClick={(e) => {this.handleClick(e)}}>其他</li>
                </ul>
            </div>
        )
    }

    handleClick = (e) => {
        console.log(e.target.getAttribute('data'))
    }

    //React 生命周期；
}

export default Children_12;