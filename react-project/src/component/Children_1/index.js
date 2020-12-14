import React from 'react';

class Children_1 extends React.Component {
    constructor(props) {
        super(props);
        // 状态（数据）--> view
        // 构造函数初始化数据，将需要改变的数据初始化到state中；
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    render() {
        // state不能直接修改，通过setState() ;
        // 通过this.setState()修改完数据后，并不会立即修改DOM里面的内容，React会在这个函数内容所有设置状态改变后，统一对比虚拟DOM对象，然后在统一修改，进一步提升性能。
        // this.state.time = new Date().toLocaleTimeString();

        return (
            <div>
                <h2>具有state的类组件</h2>
                {/* 利用React的差值语法直接对state中的数据进行渲染 */}
                <p>{this.state.time}</p>
                <p>父组件传递：{this.props.name}</p>
            </div>
        )
    }

    // React的生命周期；
    componentDidMount() {
        setInterval(()=>{
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        },1000)
    }
}

export default Children_1;