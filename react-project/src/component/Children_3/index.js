import React from 'react';

class Children_3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.changeParent = this.changeParent.bind(this);
    }

    render() {
        return (
            <div>
                {this.props.name}
                
                {this.props.isShow ? <h2>显示</h2> : <h2>不显示</h2>}

                <button onClick={this.changeParent}>changeParent</button>
            </div>
        )
    }

    // 生命周期；
    componentDidMount() {
        console.log(this);
        console.log(this.props.fun);
    }

    // 事件；
    changeParent() {
        this.props.fun('功民')
    }
}

export default Children_3;