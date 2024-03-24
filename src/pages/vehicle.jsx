import React, { useState } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import './vehicle.css';
import headerBackground from '../images/background.jpg';
import logo_white from '../images/logo_white.png';

export default function Vehicle() {
    const totalItems = 5;
    const itemWidth = 25;
    const containerWidth = totalItems * itemWidth;
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollLeft = () => {
        setScrollPosition(Math.max(scrollPosition - 1, 0));
    };

    const scrollRight = () => {
        setScrollPosition(Math.min(scrollPosition + 1, totalItems - 1));
    };

    const [mainImage, setMainImage] = useState(headerBackground);

    const handleImageHover = (imageSrc) => {
        setMainImage(imageSrc);
    };

    return (
        <div>
            <Nav></Nav>
            <section>
                <div className='box'>
                    <div className='vehicle-v-details'>
                        <div className='vehicle-vd-images'>
                            <h2>Infiniti Q50 2018</h2>
                            <div className='vehicle-vd-main-image'>
                                <img src={mainImage} alt="" id='image-1' />
                            </div>
                            <div className="carousel-container">
                                <div className="carousel-wrapper" style={{ width: containerWidth + 'px' }}>
                                    <div className="carousel-items" style={{ transform: `translateX(-${scrollPosition * itemWidth}px)` }}>
                                        <div className="carousel-item">
                                            <img src={headerBackground} alt="" onMouseOver={() => handleImageHover(headerBackground)} />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={logo_white} alt="" onMouseOver={() => handleImageHover(logo_white)} />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={headerBackground} alt="" onMouseOver={() => handleImageHover(headerBackground)} />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={headerBackground} alt="" onMouseOver={() => handleImageHover(headerBackground)} />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={headerBackground} alt="" onMouseOver={() => handleImageHover(headerBackground)} />
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-btn left" onClick={scrollLeft}>{'<'}</button>
                                <button className="carousel-btn right" onClick={scrollRight}>{'>'}</button>
                            </div>

                        </div>
                        <div className='vehicle-vd-book'>
                            <div className='vehicle-info'>
                                <p>Passengers: <span>4</span></p>
                            </div>
                            <div className='vehicle-info'>
                                <p>Suitcase: <span>1 Large, 2 Small</span></p>
                            </div>
                            <div className='vehicle-info'>
                                <p>Doors: <span>2</span></p>
                            </div>
                            <div className='vehicle-info'>
                                <p>Engine: <span>3.9L V8 32V GDI DOHC Turbo</span></p>
                            </div>
                            <div className='vehicle-info'>
                                <p>Fuel: <span>Gasoline</span></p>
                            </div>
                            <div className='vehicle-info'>
                                <p>Option: <span>Cruise Control, MP3 player, Automatic Air conditioning, Wifi, GPS Navigation</span></p>
                            </div>
                            <div className='vehicle-b-button'>
                                <button>LKR. 2000/ Day</button>
                                <button>BOOK A CAR</button>
                            </div>
                        </div>
                    </div>
                    <div className='vehicle-review'>
                        <div className='review'>
                            <h4>- Recent Review -</h4>
                            <div className='review-content'>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta suscipit quos, dolores blanditiis vel ipsam voluptatum cum odio dicta esse commodi. Reprehenderit vero vel recusandae voluptas harum iure, voluptates impedit quas? Quisquam repudiandae ratione voluptatem assumenda omnis praesentium dignissimos consequatur?
                                </p>
                                <div className='review-image'>
                                    <img src={headerBackground} alt="" />
                                </div>
                                <div className='review-stars'>
                                    <ul>
                                        <li>
                                            <i class="ri-star-fill active"></i>
                                        </li>
                                        <li>
                                            <i class="ri-star-fill active"></i>
                                        </li>
                                        <li>
                                            <i class="ri-star-fill active"></i>
                                        </li>
                                        <li>
                                            <i class="ri-star-fill active"></i>
                                        </li>
                                        <li>
                                            <i class="ri-star-fill"></i>
                                        </li>
                                    </ul>
                                </div>
                                <h5>Tharindu Kulasinghe</h5>
                            </div>
                            <div className='review-content'>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta suscipit quos, dolores blanditiis vel ipsam voluptatum cum odio dicta esse commodi. Reprehenderit vero vel recusandae voluptas harum iure, voluptates impedit quas? Quisquam repudiandae ratione voluptatem assumenda omnis praesentium dignissimos consequatur?
                                </p>
                                <div className='review-image'>
                                    <img src={headerBackground} alt="" />
                                </div>
                                <div className='review-stars'>
                                    <ul>
                                        <li>
                                            <i class="ri-star-fill active"></i>
                                        </li>
                                        <li>
                                            <i class="ri-star-fill active"></i>
                                        </li>
                                        <li>
                                            <i class="ri-star-fill active"></i>
                                        </li>
                                        <li>
                                            <i class="ri-star-fill active"></i>
                                        </li>
                                        <li>
                                            <i class="ri-star-fill"></i>
                                        </li>
                                    </ul>
                                </div>
                                <h5>Tharindu Kulasinghe</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
