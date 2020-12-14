import React from 'react';

class Children_6 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            obj: [
                {
                    name: 'Tony',
                    age: '27'
                },
                {
                    name: 'Ella',
                    age: '30'
                },
                {
                    name: 'Evo',
                    age: '27'
                }
            ]
        }
    }

    render() {
        // let arrList = this.state.obj.map((item, index) => {
        //     return (
        //         <li>
        //             <h3>{index}:{item.name}</h3>
        //             <p>{index}:{item.age}</p>
        //         </li>
        //     )
        // })

        // 打印JSX对象；
        // console.log(arrList);

        return (
            <div>
                <h2>Children_6</h2>
                {/* {
                    arrList
                } */}
                <ListItem data={this.state.obj} />
            </div>
        )
    }

    // componentDidMount() {

    // }
}

// 将渲染的li单独拿出来做一个函数式组件（组件的第一个字母要大写）；
// function ListItem(props) {
//     console.log(props.data);
//     let listarr = props.data.map((item)=>{
//         return (
//             <div>
//                 <h2>{item.name}</h2>
//                 <p>{item.age}</p>
//             </div>
//         )
//     })
//     return (
//     <div>
//         {listarr}
//     </div>
//     )
// }

// 将函数式组件改为类组件，可以进行数据的交互。
class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    // 设置点击事件；
    clickAlert(item1, item2) {
        alert(item1 + item2);
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.data.map((item) => {
                            return (
                                <li onClick={()=>{this.clickAlert(item.name, item.age)}}>
                                    <h3>{item.name}</h3>
                                    <h3>{item.age}</h3>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default Children_6;