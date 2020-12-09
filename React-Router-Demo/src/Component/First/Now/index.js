import React from 'react';

class Now extends React.Component {
    constructor () {
        super();

        this.state = ({});
    }

    render() {
        return (
            <div>
                <h2>Now</h2>
                <button onClick={this.handleClick}>点击前往</button>
            </div>
        )
    }

    // 事件；
    handleClick = () => {
        console.log(this.props);
    }

}

export default Now;