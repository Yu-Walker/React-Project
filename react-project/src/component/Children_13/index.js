import React from 'react';

class Children_13 extends React.Component {
    constructor() {
        super();

        this.state = ({});
    };

    render() {

        let slot_1, slot_2, slot_3;

        this.props.children.forEach((item, index) => {
            console.log(item.props['data-posit']);
            if (item.props['data-posit'] == 'footer') {
                slot_3 = item;
                console.log('匹配成功'+ item.props.children);
            } else if (item.props['data-posit'] == 'main') {
                slot_2 = item;
            } else {
                slot_1 = item;
            }
        })

        // for(let item in this.props.children) {
        //     console.log(this.props.children[0]);
        //     if(item == '插槽内容三') {
        //         item = slot_3
        //     };
        //     if(item == '插槽内容二') {
        //         item = slot_2
        //     };
        //     if(item == '插槽内容一') {
        //         item = slot_1
        //     };
        // };

        // console.log(this.props.children)
        return <div>
            <h2>Children_13</h2>
            <h3>组件的插槽</h3>
            <div>{slot_3}</div>
            <div>{slot_2}</div>
            <div>{slot_1}</div>
        </div>
    }
}

export default Children_13;