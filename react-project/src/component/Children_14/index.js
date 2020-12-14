import React from 'react';

// 导入redux；
import Redux,{ createStore } from 'redux';

// reducer是一个函数，这个函数有两个参数，一个是初始化时的状态，另一个是“动作”；用于通过动作，创建新的state。
const reducer = function(state={num:0},action) {
    console.log(action);
    switch(action.type) {
        case "add":
            state.num++;
            break
        case 'sub':
            state.num--;
            break
        default:
            break
    }
    return {...state}   // 需要返回一个新的对象；
}

// 创建一个数据仓库；
const store = createStore(reducer);
console.log(store);

const Counter = () => {
    return <div>
        <button onClick={handleClickAdd}>-</button>

        数据的获取：
        <h2>计数数量：{store.getState().num}</h2>

        <button onClick={handleClickSub}>+</button>
    </div>
}

// 事件函数；
let handleClickAdd = () => {
    console.log('-');
    store.dispatch({type:"add"})
}

let handleClickSub = () => {
    console.log('+');
    store.dispatch({type:"sub"})
}

export default Counter;

// store.subscribe(()=>{
//     ReactDom.render(<Counter></Counter>,docunment.querySelector("#root"))
// })