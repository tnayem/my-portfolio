import React from 'react';
import nayemPhoto from '../../Image/My Photo/nayem.jpg'

const About = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='max-h-96' src={nayemPhoto} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className='text-3xl font-semibold'>Md Tasdid Nayem</h2>
                <h3 className='text-2xl'>Front-End Developer</h3>

                <p>Hi, I am Md Tasdid Nayem. I am from Dhaka, Bangladesh. Recently I completed my Graduation in Computer Science & Engineering from Uttara University. I am always excited to learn new technology. I am proficient in building Full stack web applications using JavaScript, React JS, Node JS, Express JS, MongoDB, Tailwind CSS, Bootstrap, Flowbite, etc.</p>
                
            </div>
        </div>
    );
};

export default About;