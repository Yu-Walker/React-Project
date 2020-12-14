import * as ActionTypes from '../ActionTypes/index';

// const addAction = {
//     type: 'add'
// }

// const subAction = {
//     type: 'sub'
// }

// 封装函数，自动返回action；
console.log(ActionTypes.ADDACTION);
console.log(ActionTypes.SUBACTION);

// 封装生成Action的函数；
const addAction = () => {
    return {
        type: ActionTypes.ADDACTION
    }
}
const newAddAction = addAction();   // 调用生成的函数。

// 封装生成Action的函数；
const subAction = () => {
    return {
        type: ActionTypes.SUBACTION
    }
}
const newSubAction = subAction();   // 调用生成的函数。

console.log(newAddAction);

export default {
    newAddAction,
    newSubAction
}