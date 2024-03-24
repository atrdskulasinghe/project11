import React from 'react';
import './footer.css';
import whiteLogo from "../images/logo_white.png";

export default function footer() {
    return (
        <div>
            <footer>

                {/* <div className='box'> */}
                <div className='footer-content'>
                    <div className='footer-c-1'>
                        <img src={whiteLogo} alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam magni eos suscipit accusamus doloremque nostrum dignissimos expedita pariatur placeat, temporibus dolores totam officia ratione commodi impedit provident sapiente a mollitia ad maiores aliquid corrupti nobis qui ex! Quo, veniam recusandae.</p>
                        <p>&copy; copyrights. All right reserved Group 08</p>
                    </div>
                    <div className='footer-c-2'>
                        <div>
                            <h3>Quick Links</h3>
                            <ul>
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">Cars</a>
                                </li>
                                <li>
                                    <a href="">Reviews</a>
                                </li>
                                <li>
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-c-3'>
                        <div>
                            <h3>Social Media</h3>
                            <ul>
                                <li>
                                    <a href=""><i class="ri-facebook-fill"></i> <p>Facebook</p></a>
                                </li>
                                <li>
                                    <a href=""><i class="ri-twitter-fill"></i> <p>Twitter</p></a>
                                </li>
                                <li>
                                    <a href=""><i class="ri-instagram-fill"></i> <p>Instagram</p></a>
                                </li>
                                <li>
                                    <a href=""><i class="ri-youtube-fill"></i> <p>Youtube</p></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-c-4'>
                        <div>
                            <h3>Newsletter</h3>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perferendis, veniam architecto eligendi non sapiente laborum laboriosam eaque suscipit quisquam.</p>

                            <div className='footer-c-input'>
                                <input type="text" placeholder='Enter your email'/>
                                <button><i class="ri-send-plane-fill"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </footer>
        </div>
    )
}
