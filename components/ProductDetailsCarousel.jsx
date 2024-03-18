import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = ({ image }) => {
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                <img src={image} />
                <img src={image} style={{ transform: 'rotate(180deg)' }} />
                <img src={image} style={{ transform: 'rotate(90deg)' }} />
                <img src={image} style={{ transform: 'rotate(45deg)' }} />
                <img src={image} style={{ transform: 'rotate(270deg)' }} />
                <img src={image} style={{ transform: 'rotate(135deg)' }} />
                <img src={image} style={{ transform: 'rotate(225deg)' }} />
                {/* <img src="/p2.png" />
                <img src="/p3.png" />
                <img src="/p4.png" />
                <img src="/p5.png" />
                <img src="/p6.png" />
                <img src="/p7.png" /> */}
            </Carousel>
        </div>
    )
}

export default ProductDetailsCarousel
