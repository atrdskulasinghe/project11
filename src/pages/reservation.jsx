import React, { useState } from 'react';

import Nav from '../components/nav';
import Footer from '../components/footer';
import './reservation.css';
import headerBackground from '../images/background.jpg';

export default function Reservation() {
    const [fileName, setFileName] = useState('');
    const [fileName2, setFileName2] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('');
        }
    };

    const handleFileChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName2(file.name);
        } else {
            setFileName2('');
        }
    };

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <Nav></Nav>
            <div className='reservation-header'>
                <h1>Reservation</h1>
                <div className='reservation-header-background'>
                    <img src={headerBackground} alt="" />
                </div>
            </div>
            <section>
                <div className='box'>
                    <div className='reservation'>
                        <div className='reservation-c-1'>
                            <a className='car-card' >
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
                        <div className='reservation-c-2'>
                            <div className='reservation-input-list'>
                                <div className='reservation-input-c-1'>
                                    <p>Pick Up Location</p>
                                    <select name="" id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className='reservation-input-c-2'>
                                    <p>Pick A Date</p>
                                    <input type="date" />
                                </div>
                                <div className='reservation-input-c-3'>
                                    <p>Time</p>
                                    <input type="time" />
                                </div>
                            </div>
                            <div className='reservation-input-list'>
                                <div className='reservation-input-c-1'>
                                    <p>Pick Up Location</p>
                                    <select name="" id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className='reservation-input-c-2'>
                                    <p>Pick A Date</p>
                                    <input type="date" />
                                </div>
                                <div className='reservation-input-c-3'>
                                    <p>Time</p>
                                    <input type="time" />
                                </div>
                            </div>
                            <h5 className='margin-top-20'>Your Offer Includes:</h5>
                            <div className='reservation-include'>
                                <div className='reservation-include-c-1'>
                                    <input type="checkbox" id="checkbox-1" checked={isChecked} onChange={handleCheckboxChange} />
                                    <label htmlFor="checkbox-1">With driver</label>
                                </div>
                                <div className='reservation-include-c-2'>
                                    <input type="checkbox" id='checkbox-2' />
                                    <label htmlFor="checkbox-2">Breakdown Assistance</label>
                                </div>
                            </div>
                            <div className='reservation-customer-d'>
                                <h5>Customer Details:</h5>
                                <div className='reservation-c-details'>
                                    <div className='reservation-c-input'>
                                        <div className='reservation-c-input-1'>
                                            <input type="text" placeholder='First Name' />
                                        </div>
                                        <div className='reservation-c-input-2'>
                                            <input type="text" placeholder='Last Name' />
                                        </div>
                                    </div>
                                    <div className='reservation-c-input'>
                                        <div className='reservation-c-input-1'>
                                            <input type="text" placeholder='Email' />
                                        </div>
                                        <div className='reservation-c-input-2'>
                                            <input type="text" placeholder='Phone Number' />
                                        </div>
                                    </div>
                                    {isChecked == false && (
                                        <div>
                                            <div className='reservation-c-input'>
                                                <input type="text" placeholder='License Number' />
                                            </div>
                                            <div className='reservation-c-input file'>
                                                <div className='reservation-c-input-1'>
                                                    <div className="file-container">
                                                        <label htmlFor="file-input" className="file-label">{fileName ? fileName : 'Choose a License Photo Front...'}</label>
                                                        <input id="file-input" type="file" onChange={handleFileChange} />
                                                    </div>
                                                </div>
                                                <div className='reservation-c-input-2'>
                                                    <div className="file-container">
                                                        <label htmlFor="file-input2" className="file-label">{fileName2 ? fileName2 : 'Choose a License Photo Back...'}</label>
                                                        <input id="file-input2" type="file" onChange={handleFileChange2} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className='reservation-c-input'>
                                        {/* <input type="text" placeholder='Email' /> */}
                                        <textarea name="" id="" cols="30" rows="10" placeholder='Additional information (Optional)'></textarea>
                                    </div>
                                    <div className='reservation-c-button'>
                                        <button>Reservation Now</button>
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
