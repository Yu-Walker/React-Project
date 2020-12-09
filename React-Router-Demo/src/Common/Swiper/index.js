import React from 'react';
// import css from './index.scss';

import Swiper from "swiper";
// import "swiper/css/swiper.css";

class Demo extends React.Component{
    constructor() {
        super();

        this.state = ({});
    }

    render () {
        return (
            <div className="swiper">
                <h2>Swiper</h2>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={require('../../SAT/wall.jpg')} alt=""></img>
                        </div>
                        <div className="swiper-slide">
                            <img src={require('../../SAT/wall.jpg')} alt=""></img>
                        </div>
                        <div className="swiper-slide">
                            <img src={require('../../SAT/wall.jpg')} alt=""></img>
                        </div>
                    </div>
                    {/* <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-scrollbar"></div> */}
                </div>
                <ul>
                    <li>
                       <h1>一级标题</h1> 
                    </li><li>
                       <h2>二级标题</h2> 
                    </li>
                    <li>
                       <h3>三级标题</h3> 
                    </li>
                </ul>
            </div>
        )
    }

    componentDidMount(){
          new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
        
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
           
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
           
           // 如果需要滚动条
           scrollbar: {
             el: '.swiper-scrollbar',
           },
         })              
       }    
}

export default Demo;