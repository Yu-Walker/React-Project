import React from 'react';

class ProductPage extends React.Component {
    constructor() {
        super();

        this.state = ({});
    }

    render () {
       return (
            <div>
               <h2>ProductPage</h2>
               {/* 测试事件中隐藏的路由方法 */}
               <button onClick={this.handleClick}>点击前往</button>
            </div>
       ) 
    }

    // 定义事件；
    handleClick = () => {
        console.log(this.props);
        // this.props.history.push('/');
    }
}

export default ProductPage;