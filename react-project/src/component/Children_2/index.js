import React from 'react';
import './index.css';

class Children_2 extends React.Component {
    constructor() {
        super();

        this.state = {
            c1: 'active',
            c2: ''
        }
        this.clickChange = this.clickChange.bind(this);
    }

    // 定义事件；
    clickChange(e) {
        console.log(e.target.dataset.index);
        if(e.target.dataset.index === '1') {
            console.log('1');
            this.setState({
                c1: 'active',
                c2: ''
            })
        } else {
            console.log('2');
            this.setState({
                c1: '',
                c2: 'active'
            })
        }
    }


    render() {
        return (
            <div>
                <button data-Index="1" onClick={this.clickChange}>第一页</button>
                <button data-Index="2" onClick={this.clickChange}>第一页</button>
                <p className={this.state.c1}>李白</p>
                <p className={this.state.c2}>杜甫</p>
            </div>
        )
    }

    componentDidMount() {

    }
}

export default Children_2;