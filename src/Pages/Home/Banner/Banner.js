import React, { useState } from 'react';
import { Carousel} from 'react-bootstrap';
import banner1 from '../../../images/banner/pexels-binyamin-mellish-116079.jpg';
import banner2 from '../../../images/banner/pexels-cesar-galeão-3253501.jpg';
import banner3 from '../../../images/banner/pexels-pixabay-260447.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel className='mt-1' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Ball Handling</h3>
                <p>It helps Your Arms Stronger</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
            />

            <Carousel.Caption>
                <h3>Work Hard</h3>
                <p>There is no shortcut. You have to work hard</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Boxing</h3>
                <p>
                    Boxing services are available here
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
};

export default Banner;