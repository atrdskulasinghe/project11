import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import './vehicles.css';
import headerBackground from '../images/background.jpg';

export default function vehicles() {
    return (
        <div>
            <Nav></Nav>
            <section>
                <div className='box'>
                    <div className='avc'>
                        <div className='vehicles-filter'>
                            <div className='filter-header'>
                                <h3>Filter</h3>
                            </div>
                            <div className='filter-content'>
                                <p>Pick Up Location</p>
                                <input type="text" placeholder='Your location' />
                            </div>
                            <div className='filter-content'>
                                <p>Pick a date</p>
                                <input type="date" />
                            </div>
                            <div className='filter-content'>
                                <p>Price</p>
                                <div className='filter-two-c'>
                                    <input type="number" placeholder='min' />
                                    <input type="number" placeholder='max' />
                                </div>
                            </div>
                            <div className='filter-content'>
                                <p>Number of passwengers</p>
                                <input type="number" />
                            </div>
                            <div className='filter-content'>
                                <p>Fuel Type</p>
                                <select name="" id="">
                                    <option value="">Select A Option</option>
                                </select>
                            </div>
                            <div className='filter-content'>
                                <p>Model Type</p>
                                <select name="" id="">
                                    <option value="">Select A Option</option>
                                </select>
                            </div>
                            <div className='filter-contnet'>
                                <button>Apply Filter</button>
                            </div>
                        </div>
                        <div className='available-vehicles'>
                            <h2>Available Vehicles</h2>

                            <div className='car-list margin-top-20'>
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
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
