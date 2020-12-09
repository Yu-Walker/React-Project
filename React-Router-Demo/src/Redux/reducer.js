const reducer = function(state={num:8},action) {
    // reducer是一个纯函数。

    switch (action.type) {
        case "add":
            state.num++
            break
        case "sub":
            state.num--
            break
        default:
            break
    }
    // 需要返回一个新的对象。
    // return {...state}
    return state

};

export default reducer;

// Action 就是 View 发出的通知;