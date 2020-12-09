// import React, {
//     Component
// } from 'react'
// let Swiper = window.Swiper
// class About extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             myName: "这里是about页面",
//         }
//     }
//     // componentWillUnmount() {
//     //     if (this.swiper) { // 销毁swiper
//     //         this.swiper.destroy()
//     //     }
//     // }
//     componentDidUpdate() {
//         // 
        
//         this.swiper = new Swiper(this.refs.lun, {
//             loop: true,
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//             },
//         });
//     }
//     render() {
//         return ( 
//         <div>
//             <div>
//                 <div className="swiper-container">
//                     <div className="swiper-wrapper">
//                         <div className="swiper-slide" data-id="0">Slide 1</div>
//                         <div className="swiper-slide" data-id="1">Slide 2</div>
//                         <div className="swiper-slide" data-id="2">Slide 3</div>
//                         <div className="swiper-slide" data-id="3">Slide 4</div>
//                         <div className="swiper-slide" data-id="4">Slide 5</div>
//                         <div className="swiper-slide" data-id="5">Slide 6</div>
//                         <div className="swiper-slide" data-id="6">Slide 7</div>
//                         <div className="swiper-slide" data-id="7">Slide 8</div>
//                         <div className="swiper-slide" data-id="8">Slide 9</div>
//                         <div className="swiper-slide" data-id="9">Slide 10</div>
//                     </div>
//                 </div>
//             </div>

//             <div id="PgFather">
//                 <div className="swiper-pagination" id='body-left-pagination'></div>
//             </div>
//         </div>
//         )
//     }
// }
// export default About

import React from 'react';

// import { Swiper } from 'swiper';

// import SwiperSlide from 'swiper';

// Import Swiper styles
// import 'swiper/swiper.scss';

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//     </Swiper>
//   );
// };

class Second extends React.Component {
    constructor() {
        super();

        this.state = ({});
    }

    render() {
        return (
            <div>
                <h2>Swiper组件</h2>
                <button onClick={this.handleClick}>点击前往</button>
                {/* <Swiper spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper> */}
            </div>
        )
    }

    // 定义的事件；
    handleClick = () => {
        // 注意；this.props.history等方法只是适用于被Route标签（组件）包裹的组件，这样才能访问this.props;
        // console.log(this.props);
        // this.props.history.push('/First');
    }
}

export default Second;