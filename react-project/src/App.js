import React from 'react';
// import logo from './logo.svg';
import Children_1 from './component/Children_1';
import Children_2 from './component/Children_2';
import Children_3 from './component/Children_3';
import Children_4 from './component/Children_4';
import Children_5 from './component/Children_5';
import Children_6 from './component/Children_6';
import Children_7 from './component/Children_7';
import Children_8 from './component/Children_8';
import Children_9 from './component/Children_9';
import Children_10 from './component/Children_10';
import Children_11 from './component/Children_11';
import './App.css';
import Children_axios from './component/Children_axios';
import Children_12 from './component/Children_12';
import Children_13 from './component/Children_13';
import Children_14 from './component/Children_14';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App(props) {
// 函数内部可以定义变量；
// let word = '变量';
// 函数内部可以添加逻辑；
// let isRain = '不下雨';
//   var isRain = props.weather;
//   var weather = isRain == '下雨' ? '在家待着':'出门嗨皮';

//   console.log(props.weather);

//   return (
//     <div>
//       <h2>这是函数式组件</h2>
//       <p>{word}</p>
//       <p>{weather}</p>
//     </div>
//   ) 
// }

// 类组件；
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      obj: { name: 'Tony', isShow: true },
      Ename: 'Tony'
    }

    this.controlChild = this.controlChild.bind(this);
    this.parent = this.parent.bind(this);
  }

  // 定义事件，从而改变子组件中的状态；
  controlChild(e) {
    this.setState({
      isShow: !this.state.obj.isShow
    })
  }

  // 定义函数，将函数传递给子组件，子组件通过重新调用这个函数进而改变父组件中的值。
  parent(val) {
    // 通过setState来修改状态；
    this.setState({
      Ename: val
    })
  }


  render() {
    // 打印this；
    console.log(this);
    return (
      <div>
        {/* 进行React路由的配置 */}
        {/* <Router></Router> */}
        <h2>这是类组件</h2>
        <p>我的名字{this.state.Ename}</p>
        {/* 类组件通过关键词this查看props。 */}
        <Child name={this.props.weather} />
        <Children_1 name="leizujian" />
        <Children_2 />
        {/* 在父元素中使用state去控制子元素props从而达到父元素数据传递给子元素。 */}
        <button onClick={this.controlChild}>改变</button>
        <Children_3 name={this.state.obj.name} isShow={this.state.obj.isShow} fun={this.parent}/>
        <Children_4 />
        <Children_5 />
        <Children_6 />
        <Children_7 />
        <Children_8 />
        <Children_9 />
        <Children_10 />
        <Children_11 />
        <Children_axios />
        <Children_12 />
        <Children_13>
          <h5 data-posit = "header">插槽内容一</h5>
          <h5 data-posit = "main">插槽内容二</h5>
          <h5 data-posit = "footer">插槽内容三</h5>
        </Children_13>
        <Children_14 />        
      </div>
    )
  }
}

// 函数式组件；
function Child(props) {
  return (
    <div>
      <h2>这是子组件(函数式组件)</h2>
      {/* 函数式组件直接访问其属性。 */}
      <p>今天的天气是{props.name}</p>
    </div>
  )
}

export default App;
