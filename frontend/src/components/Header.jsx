import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='bg-theme py-6 relative z-50 shadow-[0_0_20px_0_#555]'>
        <div className='container'>
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center gap-8 font-semibold text-white'>
              <Link to={'/'}>
                <h1 className='text-2xl'>Brileant Chiefs</h1>
              </Link>
            </div>
            <div className='font-semibold'>
              <ul className='md:flex flex-row gap-4 text-theme hidden'>
                <li>
                  <Link className='bg-white py-2 px-4 rounded-lg' to={'/login'}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className='bg-white py-2 px-4 rounded-lg'
                    to={'/register'}
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
