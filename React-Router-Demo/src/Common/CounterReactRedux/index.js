import React from 'react';
import ReactDom from 'react-dom';

// 从redux中创建store；
import { createStore } from 'redux';
// 从react-redux中创建Provider、Connect；
import { Provider, connect } from 'react-redux';

// 创建类组件；
class CounterReactRedux extends React.Component {
    constructor() {
        super();

        this.state = ({ });
    }

    render() {
        console.log(store.getState().num);  // 0

        // 计数，通过store的state传给props，直接通过props就可以将state的数据获取；
        const value = this.props.value;
        // 将修改数据的事件或者是方法传入到props；
        const onAddClick = this.props.onAddClick;

        return (
            <div>
                <h1> 计数的数量：{ value } </h1>
                <button onClick={ onAddClick }>点击+1</button>
            </div>
        )
    }
}

// 声明一个action；
const addAction = {
    type: 'add'
};

// 创建reducer；
function reducer(state = { num:0 },action) {

    switch(action.type) {
        case 'add':
            state.num++ ;
        break;
        default:
        break;
    }
    return {...state};

}

// 将reducer传入到store中；
const store = createStore(reducer);

// 将修改state映射到props函数；
function mapStateToProps( state ) {
    return {
        value: state.num
    }
}
// 将修改state数据的方法，映射到props，默认会传入到store里的dispatch方法；
function mapDispatchToProps(dispatch) {
    return {
        onAddClick:() => {
            dispatch(addAction)
        }
    }
}

//  将上面的这2个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件；
const NewCounterReactRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterReactRedux);

export default NewCounterReactRedux;

// 最后实现页面的渲染；
// ReactDOM.render(
//     <Provider store={store}>
//         <App></App>
//     </Provider>,
//     document.querySelector('#root')
// );