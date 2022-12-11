import React from 'react';
import hello1 from '../../../Image/hello-dot-com/hello1.png'
import hello2 from '../../../Image/hello-dot-com/hello2.png'
import hello3 from '../../../Image/hello-dot-com/hello3.png'
import hello4 from '../../../Image/hello-dot-com/hello4.png'
import hello5 from '../../../Image/hello-dot-com/hello5.png'

const HelloDotCom = () => {
    return (
        <div>
            <div>
                <div className="carousel w-3/5 mx-auto">
                    <div id="item1" className="carousel-item w-full">
                        <img src={hello1} className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={hello2} className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={hello3} className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={hello4} className="w-full" />
                    </div>
                    <div id="item5" className="carousel-item w-full">
                        <img src={hello5} className="w-full" />
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
                            <a className="btn btn-primary" href="https://hello-dot.web.app/" target='_blank'>Live Preview</a>
                        </div>
                        <h2 className="text-4xl font-semibold">Hello Dot Com</h2>
                        <p>&bull; My website is used Mobile resale market place.</p>
                        <p>&bull; In this website i used tailwind css, daisyui component library,react,mongodb,express,node.js</p>
                        <p>&bull; Home page devided 5 section.</p>
                        <p>&bull; Navbar, banner, catagory,advertised section, Our Policy and footer</p>
                        <p>&bull; Clicking view Phone. You will see catagory wise Phone.</p>
                        <p>&bull; If any buyer buy any product. Clicking book now button. Product added my order page.</p>
                        <p>&bull; clicking payment button buyer can successfully payment .</p>
                        <p>&bull; clicking add a product seller can added their product</p>
                        <div className="card-actions justify-end">
                            <a className='text-primary-focus font-bold' href="https://github.com/tnayem/hello-dot-com-clint" target='_blank'>Clint Side Code Link</a>
                        </div>
                        <div className="card-actions justify-end">
                            <a className='text-primary-focus font-bold' href="https://github.com/tnayem/hello-dot-com-server" target='_blank'>Server Side Code Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelloDotCom;