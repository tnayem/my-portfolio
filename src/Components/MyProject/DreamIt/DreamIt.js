import React from 'react';
import dream1 from '../../../Image/dream-it/dream1.png'
import dream2 from '../../../Image/dream-it/dream2.png'
import dream3 from '../../../Image/dream-it/dream3.png'
import dream4 from '../../../Image/dream-it/dream4.png'
import dream5 from '../../../Image/dream-it/dream5.png'

const DreamIt = () => {
    return (
        <div>
            <div>
                <div className="carousel w-3/5 mx-auto">
                    <div id="item1" className="carousel-item w-full">
                        <img src={dream1} className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={dream2} className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={dream3} className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={dream4} className="w-full" />
                    </div>
                    <div id="item5" className="carousel-item w-full">
                        <img src={dream5} className="w-full" />
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
                            <a className="btn btn-primary" href="https://dream-it-e8c39.web.app/" target='_blank'>Live Preview</a>
                        </div>
                        <h2 className="text-4xl font-semibold">Dream It.</h2>
                        <p>&bull; This website is mainly an Learning platform.</p>
                        <p>&bull; In this Website we used bootstrap framework and react js library.</p>
                        <p>&bull; Home page devided 3 section.</p>
                        <p>&bull; Header section has two part. Left side course name list and right side all courses.</p>
                        <p>&bull; Clicking course name you will go to course description page</p>
                        <p>&bull; Clicking get premium button you will go to check out page.</p>
                        <p>&bull; Clicking dawnload button you can dawnload a Our Instituation description.</p>
                        <div className="card-actions justify-end">
                            <a className='text-primary-focus font-bold' href="https://github.com/programming-hero-web-course1/b610-learning-platform-client-side-tnayem" target='_blank'>Clint Side Code Link</a>
                        </div>
                        <div className="card-actions justify-end">
                            <a className='text-primary-focus font-bold' href="https://github.com/programming-hero-web-course1/b610-lerning-platform-server-side-tnayem" target='_blank'>Server Side Code Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DreamIt;