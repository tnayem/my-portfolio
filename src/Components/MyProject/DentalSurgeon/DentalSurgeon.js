import React from 'react';
import dental1 from '../../../Image/dental-surgeon/dental1.png'
import dental2 from '../../../Image/dental-surgeon/dental2.png'
import dental3 from '../../../Image/dental-surgeon/dental3.png'
import dental4 from '../../../Image/dental-surgeon/dental4.png'
import dental5 from '../../../Image/dental-surgeon/dental5.png'

const DentalSurgeon = () => {
    return (
        <div>
            <div>
                <div className="carousel w-3/5 mx-auto">
                    <div id="item1" className="carousel-item w-full">
                        <img src={dental1} className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={dental2} className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={dental3} className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={dental4} className="w-full" />
                    </div>
                    <div id="item5" className="carousel-item w-full">
                        <img src={dental5} className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                    <a href="#item5" className="btn btn-xs">5</a>
                </div>
            </div>
            <div>
                <div className="card card-side bg-base-100 shadow-xl w-3/5 mx-auto">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <a className="btn btn-primary" href="https://dental-surgeon-ca9a1.web.app/" target='_blank'>Live Preview</a>
                        </div>
                        <h2 className="text-4xl font-semibold">Dental Surgeon</h2>
                        <p>&bull; This Website is indipendent Service Provider Dental Surgeon Website.</p>
                        <p>&bull; In this website i used tailwind css, daisyui component library,react,mongodb,express,node.js</p>
                        <p>&bull; Home page devided 6 section.</p>
                        <p>&bull; Navbar, banner, Services, Appointment, Contact Us and footer Section</p>
                        <p>&bull; Clicking Service Details Button You will See Services all information </p>
                        <p>&bull; Any patient take appointmen from take appointment section</p>
                        <p>&bull; clicking add service button Only Admin can added their service</p>
                        <div className="card-actions justify-end">
                            <a className='text-primary-focus font-bold' href="https://github.com/Porgramming-Hero-web-course/b6a11-service-review-client-side-tnayem" target='_blank'>Clint Side Code Link</a>
                        </div>
                        <div className="card-actions justify-end">
                            <a className='text-primary-focus font-bold' href="https://github.com/Porgramming-Hero-web-course/b6a11-service-review-server-side-tnayem" target='_blank'>Server Side Code Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalSurgeon;