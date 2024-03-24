import React, { useState } from 'react';
import './nav.css';
import whiteLogo from "../images/logo_white.png";
import { Link } from 'react-router-dom';

export default function Nav() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            <div className='nav-1'>
                <div className='nav-1-c-1'>
                    <a href=""><i class="ri-mail-line"></i> tharinduruchiranga@gmail.com</a>
                    <a href=""><i class="ri-phone-line"></i> +94 77 5200 106</a>
                </div>
                <div className='nav-1-c-2'>
                    <ul>
                        <li>
                            <a href=""><i class="ri-facebook-fill"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="ri-twitter-fill"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="ri-instagram-fill"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="ri-youtube-fill"></i></a>
                        </li>

                    </ul>
                </div>
            </div>
            <nav>
                <div className='nav-content'>
                    <div className='nav-c-1'>
                        <img src={whiteLogo} alt="" />
                    </div>
                    <div className='nav-c-2'>
                        <ul>
                            <li>
                                {/* <a href="">Home</a> */}
                                <Link to={'../'}>Home</Link>
                            </li>
                            <li>
                                {/* <a href="">Cars</a> */}
                                <Link to={'../vehicles'}>Cars</Link>
                            </li>
                            <li>
                                {/* <a href="">Reviews</a> */}
                                <Link to={'../reviews'}>Reviews</Link>
                            </li>
                            <li>
                                {/* <a href="">About</a> */}
                                <Link to={'../about'}>About</Link>
                            </li>
                            <li>
                                {/* <a href="">Contact Us</a> */}
                                <Link to={'../contact'}>Contact Us</Link>
                            </li>

                        </ul>
                    </div>
                    <div className='nav-c-3'>
                        <div className='nav-c-3-c-1'>
                            <img src={whiteLogo} alt="" />
                        </div>
                        <div className='nav-c-3-c-2'>
                            <Link className='btn-a' to={'../login'}>Login</Link>
                            {/* <a href="" className='btn-a'>Login</a> */}
                        </div>
                        <div className='nav-c-3-c-3'>
                            <Link className='btn-a' to={'../signup'}>Signup</Link>
                            {/* <a href="" className='btn-a'>Signup</a> */}
                        </div>
                    </div>
                    <div className='nav-c-4'>
                        <div className={`menu-icon ${isActive ? 'active' : ''}`} onClick={handleClick}>
                            <div className='menu-line'></div>
                            <div className='menu-line'></div>
                            <div className='menu-line'></div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
