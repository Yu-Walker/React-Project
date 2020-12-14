import React from 'react';

class Children_9 extends React.Component{
    constructor(props) {
        super(props);

        this.state=({
            val: ''
        })
    }

    render() {

        // 结构赋值。
        const {val} = this.state;

        return (
            <div>
                <h2>Children_9</h2>
                <input type='text' placeholder="请输入搜索关键字" name="" onChange={(e) => {this.monitorChange(e)}} value={val}></input>
                <button type="submit" onClick={this.handleSearch}>点击查询</button>
            </div>
        )
    }

    // 定义事件；
    handleSearch = () => {
        console.log(this.state.val);
        // 点击之后，清空input的value值；
        this.setState({
            val: ''
        })
    }
    monitorChange = (e) => {
        // 通过setState来修改状态；
        this.setState({
            val: e.target.value
        })
        // console.log(this.state.val);
    }
}

export default Children_9;