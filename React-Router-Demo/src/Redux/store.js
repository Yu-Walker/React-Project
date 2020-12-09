import { createStore } from 'redux';
import reducer from './reducer.js';

// ***
// import thunkMiddleware from 'redux-thunk'
// const createStoreWithMiddleware = (createStore)

const store = createStore(reducer, window.STATE_FROM_SERVER);
console.warn(window.STATE_FROM_SERVER);

// 可以访问reducer中的状态值。
// const state = store.getState();
// console.warn(state);    // {num:0};
// const num = store.getState().num;
// console.log(num);

export default store;


