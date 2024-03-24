import React from 'react';
import './login.css';
import headerBackground from '../images/background.jpg';
import whiteLogo from "../images/logo_white.png";
import blackLogo from "../images/logo_black.png";
import facebook from "../images/soical-media/facebook.png";
import insta from "../images/soical-media/insta.png";
import pinterest from "../images/soical-media/pinterest.png";
import twitter from "../images/soical-media/twitter.png";
import { Link } from 'react-router-dom';

export default function login() {
    return (
        <div>
            <div className='login'>
                <div className='login-content'>

                    <div className='login-content-2'>
                        <div className='login-background-image'>
                            <img src={headerBackground} alt="" />
                        </div>
                        <div className='login-c2-content'>
                            <div className='login-c2-logo'>
                                <img src={whiteLogo} alt="" />
                            </div>
                            <div className='login-c2-button'>
                                <ul>
                                    <li>
                                        <a href="">
                                            <img src={facebook} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={insta} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={pinterest} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={twitter} alt="" />
                                        </a>
                                    </li>
                                </ul>
                                <p>Don't have an account ?</p>
                                <div className='login-c2-button-c'>
                                    <Link to={'../signup'}>Signup</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='login-content-1'>
                        <div className='login-content-1-c'>
                            <div className='login-c-1-logo'>
                                <img src={blackLogo} alt="" />
                            </div>
                            <div className='login-c1-box'>

                                <div className='login-c1-input'>
                                    <p>Email</p>
                                    <input type="text" />
                                </div>
                                <div className='login-c1-input'>
                                    <p>Password</p>
                                    <input type="password" />
                                </div>

                                <div className='login-agree'>
                                    <input type="checkbox" id='login-checkbox' />
                                    <label for="login-checkbox">Remember me</label>
                                </div>
                                <div className='login-button'>
                                    <button>Login</button>
                                </div>
                                <a href="">Forget Password ?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
