import React from 'react';

import NewCounterReactRedux from '../../Common/CounterReactRedux';

import store from '../../ReactRedux/store';

import { Provider } from 'react-redux';


class First extends React.Component{
    constructor() {
        super();

        this.state=({
            val:''
        })
    }

    render() {

        const {val} = this.state;
        return (
            <div>
                <h2>First</h2>
                <input type="text" name="" onChange={(e) => this.monitorChange(e)} value={val}/>
                <button onClick={() => {this.handleSearch()}}>点击搜索</button>
                {this.props.children}
                <Provider store={store}>
                    <NewCounterReactRedux />
                </Provider>
            </div>
        )
    }

    // 定义事件；
    handleSearch = () => {
        console.log(this.state.val);
        // 点击搜索按钮后清空input框内的value；
        this.setState({
            val:''
        })
        // this.state.val = '';
    }
    monitorChange = (e) => {
        // 通过setState实现值的跟踪改变；
        this.setState({
            val: e.target.value
        })
    }

    // React的生命周期；
    componentDidMount() {
           
    }
}

export default First;

// React获取input value值的ref方法；

/* <input ref='username' onChange={()=>this.inputChange()}/>
<button onClick={()=>this.getInputValue()} >获取input的值</button>

inputChange(){
	//获取dom节点元素
	//1.添加ref属性
	//2.使用this.refs.username获取dom节点
	let val=this.refs.username.value;
	this.setState({
		username:val
	})
}
getInputValue(){
	console.log(this.state.username)
} */