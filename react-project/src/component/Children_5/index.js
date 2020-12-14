import React from 'react';
import Children_1 from '../Children_1';

class Children_5 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
        // this.clickEvt_3 = this.clickEvt_3.bind(this);
    }

    clickEvt_1(e) {
        console.log('普通函数式写法');
        console.log(e);
    }

    clickEvt_2(e) {
        console.log('尖头函数式写法');
        console.log(e);
    }

    clickEvt_3 (e) {
        console.log('在函数中直接bind的方法');
        console.log(e);
    }

    render () {
        return (
            <div>
                <h2>Children_5 事件的写法</h2>
                <button onClick={this.clickEvt_1}>点击（普通函数式写法）</button>

                <button onClick={(e) => {this.clickEvt_2(e)}}>点击（尖头函数式写法）</button>
                
                {/* 注意bind是在整个函数之后.bind(this) */}
                <button onClick={function (e) { this.clickEvt_3(e)}.bind(this)}>点击（在函数中直接bind）</button>
            </div>
        )
    }
}

export default Children_5;