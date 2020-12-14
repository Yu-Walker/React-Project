import React from 'react';

class Children_7 extends React.Component{
    constructor(props) {
        super(props);   // 调用继承Component的构造函数。

        this.state = {
            msg: 'Today is Mon'
        };
    }

    componentWillMount() {
        console.log('组件将要加载');
    }

    componentDidMount() {
        console.log('组件已经加载完毕');
    }

    componentWillReceiveProps() {
        console.log('组件将要接收新的props或者是state');
    }

    componentWillUpdate() {
        console.log('组件将要更新');
    }

    componentDidUpdate() {
        console.log('组件已经更新完毕');
    }

    componentWillUnmount() {
        console.log('移除组件');
    }

    render() {
        console.log('渲染函数');
        return (
            <div>
                <h2>Children_7</h2>
                <h2>{this.state.msg}</h2>
                <button type="button" onClick={this.clickChange}>点击实现愿望</button>
            </div>
        )
    }

    clickChange = () => {
        this.setState({
            msg: 'Today is Fri'
        })
    }
}

export default Children_7;