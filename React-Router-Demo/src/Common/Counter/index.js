import React from 'react';

import store from '../../Redux/store';


// const reducer = function(state={num:0},action) {

//     console.warn(action.type);
//     console.warn(action.payload);

//     switch (action.type) {
//         case "add":
//             state.num++;
//             break
//         case "sub":
//             state.num--;
//             break
//         default:
//             break
//     }
//     // 需要返回一个新的对象,通过展开运算符；
//     return {...state};
// };

// const store = createStore(reducer);

const Counter = () => {

    return (
        <div>
            <button onClick={handleClickAdd}>-</button>
            <h2>{store.getState().num}</h2>
            <button onClick={handleClickSub}>+</button>
        </div>
    )

};

let handleClickSub = () => {
    store.dispatch({
        type:"add"
    });
    console.log(store.getState().num);
}

let handleClickAdd = () => {
    store.dispatch({
        type:"sub"
    });
    console.log(store.getState().num);
}

export default Counter;

// Action 就是 View 发出的通知;
// View 要发送多少种消息，就会有多少种 Action,这些Action都手写就会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。
// store.dispatch()是View发出Action的唯一方法。
// Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化，这种 State 的计算过程就叫做 Reducer。
// reducer函数收到名为XXX的 Action 以后，就返回一个新的 State，作为加法的计算结果。其他运算的逻辑（比如减法），也可以根据 Action 的不同来实现。
// 实际应用中，Reducer 函数不用像上面这样手动调用，store.dispatch方法会触发 Reducer 的自动执行。为此，Store 需要知道 Reducer 函数实时的state，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法。


// 纯函数：纯函数规定，同样的输入，必须得到同样的输出。

// Store 提供了三个方法。
// store.getState()
// store.dispatch()
// store.subscribe()

// const createStore = (reducer) => {
//     let state;
//     let listeners = [];
  
//     const getState = () => state;
  
//     const dispatch = (action) => {
//       state = reducer(state, action);
//       listeners.forEach(listener => listener());
//     };
  
//     const subscribe = (listener) => {
//       listeners.push(listener);
//       return () => {
//         listeners = listeners.filter(l => l !== listener);
//       }
//     };
  
//     dispatch({});
  
//     return { getState, dispatch, subscribe };
//   };

// 总结：
// 1. 用户发出 Action。
// store.dispatch(action);
// 然后，Store 自动调用 Reducer，并且传入两个参数：当前 State 和收到的 Action。 Reducer 会返回新的 State 。
// let nextState = todoApp(previousState, action);
// State 一旦有变化，Store 就会调用监听函数。
// 设置监听函数
// store.subscribe(listener);
// listener可以通过store.getState()得到当前状态。如果使用的是 React，这时可以触发重新渲染 View。
// function listerner() {
//   let newState = store.getState();
//   component.setState(newState);   
// }