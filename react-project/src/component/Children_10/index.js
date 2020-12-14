import React from 'react';

class Children_10 extends React.Component{
    constructor(props) {
        super(props);

        this.state = ({
            val:''
        });
    }

    render() {
        return(
            <div>
                <h2>Children_10</h2>
                <input type="text" placeholder="请输入要查询的内容" name ref="sValue"/>
                <button onClick={this.handleSearch}>点击查询</button>
            </div>
        )
    }

    handleSearch = () => {
        // 通过ref拿到input的value值。
        console.log(this.refs.sValue.value);

        // 拿到value值后，将input的值清空；
        this.refs.sValue.value = ''
    }
    // onChange={(e) => this.monitorChange(e)} 
    // monitorChange = (e) => {
    //     this.setState({
    //         val: e.target.value
    //     })
    // }
}

export default Children_10;