import React from 'react';
import './Banner.css'
import banner1 from '../../Image/Banner Image/banner.webp'
import selim from '../../Image/Banner Image/selim.png'
import {FaGithub,FaFacebook,FaLinkedin} from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img id='banner-1' src={selim} className="w-full" />
                <div className="absolute justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <h2 className='name-text text-yellow-50 font-bold text-center'>Hii, I'm Md Tasdid Nayem</h2>
                    <h1 className='qualification-text text-center font-bold text-gray-400'>React Developer</h1>
                    <div className='text-center my-6'>
                        {/* <button className='btn btn-warning'><a href="www.google.com">Dawnload Resume</a></button> */}
                        <a className='btn btn-warning' href="https://drive.google.com/file/d/1e-temjZRxWV4UBYhwzT3o_TOdcL15_3K/view?usp=share_link" target='_blank'>View Resume</a>
                    </div>
                    <div>
                        <div className='flex justify-center gap-8 text-white'>
                            <a className='text-3xl' href="https://github.com/tnayem" target='_blank'><FaGithub /></a>
                            <a className='text-3xl' href="https://www.facebook.com/tasdidnayem" target='_blank'><FaFacebook /></a>
                            <a className='text-3xl' href="https://www.linkedin.com/in/tasdid-nayem-2340ba1a1/" target='_blank'><FaLinkedin /></a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;