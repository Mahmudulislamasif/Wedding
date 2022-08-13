import React from 'react';
import image1 from '../../../Assets/Page1.jpg'
import image2 from '../../../Assets/Page2.jpg'
import image3 from '../../../Assets/Page3.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import '../Card/Card.css'
const Card = () => {
    return (
        <div>
            <div className="card-class shadow-lg">
             <div className="row row-cols-1 row-cols-lg-2">
             <div className="col">
                        <img src={image1} class="" alt="..."/>
                        <img src={image2} class="" alt="..."/>
                        <img src={image3} class="" alt="..."/>
             </div>
             <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h1>Card Title</h1>
                            </div>
                            <div className="d-flex justify-content-around">
                            <h3>$499 <del>$2000</del>
                            </h3>
                            <h3 className="discount-text">75% off</h3>
                            </div>
                            <p class="paragraph-class">Donec eu ornare mi. Sed finibus
                            condimentum mauris, ut dictum eros
                            maximus vitae. Nullam
                            condimentum tortor ac elit feugiat
                            iaculis. Aenean mauris nisl, blandit</p>
                            <button type="button" class="btn btn-dark">Try this card</button>
                        </div>
                    </div>
             </div>
             </div>
            </div>
        </div>
    );
};

export default Card;