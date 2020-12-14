import React from 'react';

// 引入axios；
import Axios from 'axios';

class Children_axios extends React.Component {
    constructor() {
        super();

        this.state = ({});
    }

    render() {
        return (
            <div>
                <h2>Children_axios</h2>
            </div>
        )
    }

    // React的生命周期；
    componentWillMount() {
        Axios.get("/ajax/movieOnInfoList?token=").then(res => {
            console.log(res.data);
        })
    }
}

export default Children_axios;

// https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=516556104FFC11EA95E4CD778196F3C36C38CF998CC84EC981CF5D343DA109BD&optimus_risk_level=71&optimus_code=10