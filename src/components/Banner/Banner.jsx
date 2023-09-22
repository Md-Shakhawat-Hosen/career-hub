import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="space-y-2 flex-1">
            <h1 className="font-bold text-7xl">
              One Step <br /> Closer To Your <span>Dream Job</span>
            </h1>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <Link className="btn bg-gradient-to-r from-sky-500 to-indigo-500">
              Get Started
            </Link>
          </div>
          <div className='flex-1'>
            <img className="" src="../../../public/images/user.png" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Banner;