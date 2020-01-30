import React, { Component } from 'react';

import Tabbar from './Common/Tabbar'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 设置插槽 */}
        {this.props.children}
        <Tabbar/>
      </div>
    )
  }
}

