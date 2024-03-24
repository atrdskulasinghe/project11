import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import './home.css';
import headerBackground from '../images/background.jpg';

export default function Home() {
    return (
        <div>
            <Nav></Nav>
            <div className='header'>
                <div className='header-content'>
                    <h1>Find Best Rentals Cars</h1>

                    <div className='box'>
                        <div className='header-input-content'>
                            <div className='header-i-c-1'>
                                <div className='input-content'>
                                    <p>Pick Up Location</p>
                                    <select name="" id="">
                                        <option value="">Your Location</option>
                                    </select>
                                </div>
                                <div className='input-content'>
                                    <p>Pick Up Date</p>
                                    <input type="date" />
                                </div>
                                <div className='input-content'>
                                    <p>Pick Up Time</p>
                                    <input type="time" />
                                </div>
                            </div>
                            <div className='header-i-c-2'>
                                <div className='input-content'>
                                    <p>Dropping off location</p>
                                    <select name="" id="">
                                        <option value="">Off your location</option>
                                    </select>
                                </div>
                                <div className='input-content'>
                                    <p>Dropping off date</p>
                                    <input type="date" />
                                </div>
                                <div className='input-content'>
                                    <p>Dropping off time</p>
                                    <input type="time" />
                                </div>
                            </div>
                            <div className='header-i-c-3'>
                                <div className='car-type'>
                                    <p>Select car type</p>
                                    <select name="" id="">
                                        <option value="">All cars type</option>
                                    </select>
                                </div>
                                <div className='header-search-button'>
                                    <button>Search Car</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header-background'>
                    <img src={headerBackground} alt="" />
                </div>
            </div>

            <section>
                <div className='box'>
                    <div className='car-list '>
                        <a className='car-card' href=''>
                            <div className='car-c-title'>
                                <h4>2015 Shevrolet Corvette Stingray Z51</h4>
                            </div>
                            <div className='car-c-image'>
                                <img src={headerBackground} alt="" />
                                <div className='car-c-price'>
                                    <p>LKR. 2000/ Day</p>
                                </div>
                            </div>
                            <div className='car-c-detials'>
                                <ul>
                                    <li>Sport</li>
                                    <li>Auto</li>
                                    <li>2 Passagers</li>
                                    <li>Gasoline</li>
                                </ul>
                            </div>
                        </a>

                        <a className='car-card' href=''>
                            <div className='car-c-title'>
                                <h4>2015 Shevrolet Corvette Stingray Z51</h4>
                            </div>
                            <div className='car-c-image'>
                                <img src={headerBackground} alt="" />
                                <div className='car-c-price'>
                                    <p>LKR. 2000/ Day</p>
                                </div>
                            </div>
                            <div className='car-c-detials'>
                                <ul>
                                    <li>Sport</li>
                                    <li>Auto</li>
                                    <li>2 Passagers</li>
                                    <li>Gasoline</li>
                                </ul>
                            </div>
                        </a>
                        <a className='car-card' href=''>
                            <div className='car-c-title'>
                                <h4>2015 Shevrolet Corvette Stingray Z51</h4>
                            </div>
                            <div className='car-c-image'>
                                <img src={headerBackground} alt="" />
                                <div className='car-c-price'>
                                    <p>LKR. 2000/ Day</p>
                                </div>
                            </div>
                            <div className='car-c-detials'>
                                <ul>
                                    <li>Sport</li>
                                    <li>Auto</li>
                                    <li>2 Passagers</li>
                                    <li>Gasoline</li>
                                </ul>
                            </div>
                        </a>
                        <a className='car-card' href=''>
                            <div className='car-c-title'>
                                <h4>2015 Shevrolet Corvette Stingray Z51</h4>
                            </div>
                            <div className='car-c-image'>
                                <img src={headerBackground} alt="" />
                                <div className='car-c-price'>
                                    <p>LKR. 2000/ Day</p>
                                </div>
                            </div>
                            <div className='car-c-detials'>
                                <ul>
                                    <li>Sport</li>
                                    <li>Auto</li>
                                    <li>2 Passagers</li>
                                    <li>Gasoline</li>
                                </ul>
                            </div>
                        </a>
                        <a className='car-card' href=''>
                            <div className='car-c-title'>
                                <h4>2015 Shevrolet Corvette Stingray Z51</h4>
                            </div>
                            <div className='car-c-image'>
                                <img src={headerBackground} alt="" />
                                <div className='car-c-price'>
                                    <p>LKR. 2000/ Day</p>
                                </div>
                            </div>
                            <div className='car-c-detials'>
                                <ul>
                                    <li>Sport</li>
                                    <li>Auto</li>
                                    <li>2 Passagers</li>
                                    <li>Gasoline</li>
                                </ul>
                            </div>
                        </a>
                        <a className='car-card' href=''>
                            <div className='car-c-title'>
                                <h4>2015 Shevrolet Corvette Stingray Z51</h4>
                            </div>
                            <div className='car-c-image'>
                                <img src={headerBackground} alt="" />
                                <div className='car-c-price'>
                                    <p>LKR. 2000/ Day</p>
                                </div>
                            </div>
                            <div className='car-c-detials'>
                                <ul>
                                    <li>Sport</li>
                                    <li>Auto</li>
                                    <li>2 Passagers</li>
                                    <li>Gasoline</li>
                                </ul>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <Footer></Footer>

        </div>
    )
}
