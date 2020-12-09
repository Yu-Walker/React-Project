import React,{useEffect, useState} from "react";

import DemoANTD from "../../Common/ANTD/Demo-1";
import Demo from "../../Common/Swiper";
import Counter from '../../Common/Counter';

// import Swiper from '../../Common/Swiper';
import store from '../../Redux/store';


class Third extends React.Component{
    constructor() {
        super()

        this.state = ({
            
        })
    }

    handleClick = (e,data) => {
        console.log(e.target.getAttribute("data-index"),data);
    }

    render() {
        // const counter = <Counter />;

        return (
            <div>
                <h2>Third</h2>
                <ul>
                    <li data-index="1" onClick={(e,data) => { this.handleClick(e,data)}}>首页</li>
                    <li data-index="2" onClick={(e) => { this.handleClick(e)}}>爱车</li>
                    <li data-index="3" onClick={(e) => { this.handleClick(e)}}>活动</li>
                    <li data-index="4" onClick={(e) => { this.handleClick(e)}}>其他</li>
                    <li data-index="5" onClick={(e) => { this.handleClick(e)}}>我的</li>
                </ul>
                <Button />
                <Example />
                <Calculate />
                <Demo />
                <DemoANTD />
                {/* { counter } */}
                <Counter />
            </div>
        )
    }

    // 生命周期；
    componentWillMount() {
        let unsubscribe = store.subscribe(() => {
            // console.log('监听Counter组件');
            // console.log(store.getState().num);
            this.setState({
                num: store.getState().num
            }) 
        })
        // 设置一个监听函数，调用这个函数就能实现解除subscribe的监听；
        // unsubscribe();
    }

    // shouldComponentUpdate() {
    //     return true
    // }
}

// 定义函数式组件，结合hooks；
    function Button () {
        const  [buttonText, setButtonText] =  useState("Click me,please");

        return  <button  onClick={handleClick}>{buttonText}</button>;

        // 定义事件；
        function handleClick()  {
            return setButtonText("Thanks, been clicked!");
        }

    }

    function Example() {
        const [count, setCount] = useState(0);
      
        // Similar to componentDidMount and componentDidUpdate:
        useEffect(() => {
          // Update the document title using the browser API
          document.title = `Tony clicked ${count} times`;
          // 默认情况下，React 在每次渲染后运行 effect，包括第一次渲染.
        });
      
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }

      function Calculate() {
          const [ count , calculate ] = useState(0);

          return (
              <div>
                  <p>{ count }</p>
                  <button onClick={() => calculate(count + 1)}>点击添加</button>
              </div>
          )
      }

      // 关于Hooks；
      // useState 的唯一参数是初始 state(状态),初始状态参数仅在第一次渲染期间使用。

      // TODO: 数组的解构赋值；

      // Hooks的钩子函数：
      // useState、useEffect、use
        // useState：更新状态，修改UI组件。
        // useEffect: useEffect的钩子与类组件中的componentDidMount、componentDidUpdate、componentWillUnmount，


export default Third;

// lian ji dian si 