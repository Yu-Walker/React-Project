import react from 'react';

import { NavLink } from 'react-router-dom';

class Tabber extends react.Component{
    constructor () {
        super();

        this.state = ({});
    }

    render () {
        return (
            <div>
                <ul>
                    {/* NavLink是用来定义Tabber的路径用的，注意to的属性有‘/’ */}
                    <li><NavLink to="/HomePage">HomePage</NavLink></li>
                    <li><NavLink to="/ProductPage">ProductPage</NavLink></li>
                    <li><NavLink to="/UserPage">UserPage</NavLink></li>
                </ul>
            </div>
        )
    }


}

export default Tabber;