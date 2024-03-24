import React, { useState, useEffect } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import './review.css';
import headerBackground from '../images/background.jpg';

export default function Review() {

    const [currentReview, setCurrentReview] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

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
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum atque fugiat rerum corporis molestias illo animi nisi, porro qui provident ullam quod similique commodi, harum placeat sed est eius, alias tempora eaque. Voluptatem architecto, at facere nemo, eum consectetur laudantium, aperiam culpa dicta quas distinctio tempore excepturi hic optio.",
            author: "Nimal Perera",
            image: headerBackground
        }
    ];

    const nextReview = () => {
        setCurrentReview((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    const prevReview = () => {
        setCurrentReview((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const startAutoCarousel = () => {
        const id = setInterval(() => {
            setCurrentReview((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
        }, 10000);
        setIntervalId(id);
    };

    const stopAutoCarousel = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };

    useEffect(() => {
        startAutoCarousel();
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, []);
    return (
        <div>
            <Nav></Nav>
            <div className='review-header'>
                <h1>Reviews</h1>
                <div className='review-header-background'>
                    <img src={headerBackground} alt="" />
                </div>
            </div>
            <section>
                <div className='box'>
                    <div className='review-content'>
                        <h4>- What Clients Say about Us -</h4>
                    </div>
                    <div className='review-s-content'>
                        <div className='review-slide'>
                            <div className='box'>
                                <div className='review-slide-content'>
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
                    <div className='add-review'>
                        <div className='review-input'>
                            <div className='review-i-two'>
                                <div className='review-i-two-1'>
                                    <p>First Name</p>
                                    <input type="text" />
                                </div>
                                <div className='review-i-two-2'>
                                    <p>Last Name</p>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='review-input'>
                            <div className='review-i-two'>
                                <div className='review-i-two-1'>
                                    <p>Email</p>
                                    <input type="text" />
                                </div>
                                <div className='review-i-two-2'>
                                    <p>Phone</p>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='review-input'>
                            <div className='review-i-one'>
                                <p>Message</p>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div className='review-button'>
                            <button>Add Review</button>
                        </div>
                    </div>
                </div>

            </section>
            <Footer></Footer>
        </div>
    )
}
