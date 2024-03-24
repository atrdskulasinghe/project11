import React, { useState } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import './about.css';
import headerBackground from '../images/background.jpg';

export default function About() {


    const [currentReview, setCurrentReview] = useState(0);

    const reviews = [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum atque fugiat rerum corporis molestias illo animi nisi, porro qui provident ullam quod similique commodi, harum placeat sed est eius, alias tempora eaque. Voluptatem architecto, at facere nemo, eum consectetur laudantium, aperiam culpa dicta quas distinctio tempore excepturi hic optio.",
            author: "Tharindu Ruchiranga",
            image: headerBackground
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum atque fugiat rerum corporis molestias illo animi nisi, porro qui provident ullam quod similique commodi, harum placeat sed est eius, alias tempora eaque. Voluptatem architecto, at facere nemo, eum consectetur laudantium, aperiam culpa dicta quas distinctio tempore excepturi hic optio.",
            author: "f Ruchiranga",
            image: headerBackground
        },
    ];

    const nextReview = () => {
        setCurrentReview((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    const prevReview = () => {
        setCurrentReview((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    return (
        <div>
            <Nav></Nav>

            <div className='about-header'>
                <h1>About Us</h1>
                <div className='about-header-background'>
                    <img src={headerBackground} alt="" />
                </div>
            </div>
            <section>
                <div className='box'>
                    <div className='about-title'>
                        <h2>- WHY USE -</h2>
                    </div>
                    <div className='about-content-list'>
                        <div className='about-card'>
                            <div className='about-c-icon'>
                                <i class="ri-shield-check-line"></i>
                            </div>
                            <div className='about-c-title'>
                                <h4>Secured Payment Guarantee</h4>
                            </div>
                            <div className='about-c-description'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe laudantium, reprehenderit cum mollitia unde!</p>
                            </div>
                        </div>
                        <div className='about-card'>
                            <div className='about-c-icon'>
                                <i class="ri-shield-check-line"></i>
                            </div>
                            <div className='about-c-title'>
                                <h4>Secured Payment Guarantee</h4>
                            </div>
                            <div className='about-c-description'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe laudantium, reprehenderit cum mollitia unde!</p>
                            </div>
                        </div>
                        <div className='about-card'>
                            <div className='about-c-icon'>
                                <i class="ri-shield-check-line"></i>
                            </div>
                            <div className='about-c-title'>
                                <h4>Secured Payment Guarantee</h4>
                            </div>
                            <div className='about-c-description'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe laudantium, reprehenderit cum mollitia unde!</p>
                            </div>
                        </div>
                        <div className='about-card'>
                            <div className='about-c-icon'>
                                <i class="ri-shield-check-line"></i>
                            </div>
                            <div className='about-c-title'>
                                <h4>Secured Payment Guarantee</h4>
                            </div>
                            <div className='about-c-description'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe laudantium, reprehenderit cum mollitia unde!</p>
                            </div>
                        </div>
                        <div className='about-card'>
                            <div className='about-c-icon'>
                                <i class="ri-shield-check-line"></i>
                            </div>
                            <div className='about-c-title'>
                                <h4>Secured Payment Guarantee</h4>
                            </div>
                            <div className='about-c-description'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe laudantium, reprehenderit cum mollitia unde!</p>
                            </div>
                        </div>
                    </div>
                    <div className='about-review'>
                        <div className='review-slide'>
                            <div className='box'>
                                <div className='review-slide-content'>
                                    <h4>- Recent Review -</h4>
                                    <div className='review-s-c'>
                                        <div className="carousel-container">
                                            <div className="carousel" style={{ transform: `translateX(-${currentReview * 100}%)` }}>
                                                {reviews.map((review, index) => (
                                                    <div className='review-s-details' key={index}>
                                                        <div className='review-s-d'>
                                                            <div className='review-s-details-content'>
                                                                <p>{review.text}</p>
                                                                <div className='review-s-d-image'>
                                                                    <img src={review.image} alt="" />
                                                                </div>
                                                                <h4>{review.author}</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <button className="prev-button" onClick={prevReview}>&#10094;</button>
                                            <button className="next-button" onClick={nextReview}>&#10095;</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
