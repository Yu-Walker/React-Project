import React from 'react';

export default class Children_10  extends React.Component{
    constructor() {
        super();

        this.state = ({
            val:''
        })
    }

    render() {
        return (
            <div>
                <h2>Children_11</h2>
                <input type="text" name placeholder="请输入你要查询的内容" onKeyDown={(e,value) => this.keyDown(e)} onChange={(e) => this.ValueChange(e)}/>
                <button>点击查询</button>
            </div>
        )
    }

    ValueChange = (e) => {
        this.setState({
            val: e.target.value
        })
    }

    // 利用键盘事件实现查询；
    keyDown = (e) => {
        //  判断是否是回车按键。
        
        if(e.keyCode == 13) {
            // console.log('触发回车事件');

            // 回车后拿到input的value值；
            console.log(this.state.val);
        }
    }
}