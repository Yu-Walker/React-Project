import React, { Component } from 'react';

// import First from './Component/First';
// import Second from './Component/Second';
// import Third from './Component/Third';
import Tabber from './Common/Tabber';

// 函数式组件；
// function App() {
//   return (
//     <div className="App">
//       <h2>这是根组件</h2>
//     </div>
//   );
// }
// export default App;

// 类组件的另一种写法；
export default class App extends Component {

  // React的状态管理state；
  state = {

  }

  // React的生命周期；
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h2>这是根组件</h2>
        <Tabber />
        {this.props.children}
        {/* <First />
        <Second />
        <Third /> */}
      </div>
    )
  }

}


