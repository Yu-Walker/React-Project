import React from 'react';
// import Children_1 from '../Children_1';

// 类组件；
class Children_4 extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isWhich: false
        }
    }

    render() {
        return (
            <div>
                <h2>Children_4</h2>
                {/* 通过三木运算符进行条件渲染 */}
                {this.state.isWhich?<Children_4_child_1 />:<Children_4_child_2 />}
            </div>
        )
    }

    // 生命周期函数；
}

// 纯函数式组件；
function Children_4_child_1 () {
    return (
        <div>Children_4_child_1</div>
    )
}
function Children_4_child_2 () {
    return (
        <div>Children_4_child_2</div>
    )
}

export default Children_4;