import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MyProject = () => {
    return (
        <div>
            <h1 className='text-3xl text-center my-6'>Recent Project</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 '>
                {/* first project */}
                <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Hello Dot Com</h2>
                        <p>Mobile Buy and Sell MarketPlace</p>
                        <div className="card-actions justify-end">
                            <a className='btn btn-info text-white' href="/helloDotCom">Details</a>
                        </div>
                    </div>
                </div>
                {/* second project */}
                <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Dental Surgeon</h2>
                        <p>Independent Service Provider</p>
                        <div className="card-actions justify-end">
                            <a className='btn btn-info text-white' href="/DentalSurgeon">Details</a>
                        </div>
                    </div>
                </div>
                {/* third project */}
                <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Dream It.</h2>
                        <p>Learning platform.</p>
                        <div className="card-actions justify-end">
                            <a className='btn btn-info text-white' href="/dreamIt">Details</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center my-6'>
                <button className='btn btn-accent'><Link to='/project'>See All Projects</Link></button>
            </div>
        </div>
    );
};

export default MyProject;