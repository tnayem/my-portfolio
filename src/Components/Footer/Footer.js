import React from 'react';
import {FaGithub,FaFacebook,FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <a href='/about' className="link link-hover">About Me</a>
                <a href='/contact' className="link link-hover">Contact</a>
                <a href='/project' className="link link-hover">Projects</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a className='text-3xl' href="https://github.com/tnayem" target='_blank'><FaGithub/></a>
                    <a className='text-3xl' href="https://www.facebook.com/tasdidnayem" target='_blank'><FaFacebook/></a>
                    <a className='text-3xl' href="https://www.linkedin.com/in/tasdid-nayem-2340ba1a1/" target='_blank'><FaLinkedin/></a>
                    
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by Md Tasdid Nayem</p>
            </div>
        </footer>
    );
};

export default Footer;