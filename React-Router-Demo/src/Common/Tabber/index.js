import React from 'react';

import { NavLink } from 'react-router-dom';

// export default function Tabber (props) {
//     return (
//         <div>
//             <li><NavLink to="/First">First</NavLink></li>
//             <li><NavLink to="/Second">Second</NavLink></li>
//             <li><NavLink to="/Third">Third</NavLink></li>
//             <button onClick={() => {
//                 console.log(props);
//             }}>点击前往</button>
//         </div>
//     )
// }

class Tabber extends React.Component{
    constructor() {
        super();

        this.state=({});
    }

    render() {
        return (
            <div>
                <ul>
                    <li><NavLink to="/First">First</NavLink></li>
                    <li><NavLink to="/Second">Second</NavLink></li>
                    <li><NavLink to="/Third">Third</NavLink></li>
                    <button onClick={this.handleClick}>点击前往</button>
                </ul>
            </div>
        )
    }

    handleClick = () => {
        console.log(this.props);
    }
}

export default Tabber;