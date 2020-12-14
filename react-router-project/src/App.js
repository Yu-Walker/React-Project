// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react';

// 引入Tabber；
import Tabber from './Common/Tabber';

// import router from './Router';

// ⚠️ 函数式组件，使用插槽的时候与父传子一样，需要我们传props。
// function App(props) {
//   return (
//     <div className="App">
//       <h2>App组件</h2>
//       {props.children}
//     </div>
//   );
// }

 class App extends React.Component {
   constructor () {
    super();

    this.state = ({});
   }

   render() {
     return (<div>
       <h2>App组件</h2>
       <Tabber/>
       { this.props.children}
     </div>)
   }

 }

export default App;
