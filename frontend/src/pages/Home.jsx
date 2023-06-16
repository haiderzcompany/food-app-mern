import React from 'react';
import Carousel from '../components/Carousel';

const slides = [
  '/assets/imgs/bg1.jpg',
  '/assets/imgs/bg2.jpg',
  '/assets/imgs/bg3.jpg',
  '/assets/imgs/bg4.jpg',
];

const Home = () => {
  return (
    <>
      <Carousel indicator={true} controls={true} slides={slides} />
      <div className='container flex flex-row justify-center -mt-36 mb-32 relative z-40'>
        <div className='w-full md:w-[50%] flex flex-col gap-3 md:flex-row md:gap-0  '>
          <input
            type='text'
            className='form-input w-full outline-none border-none shadow-none  md:rounded-l-lg'
          />
          <button
            type='submit'
            className='bg-theme text-white py-2 px-4  md:rounded-r-lg'
          >
            Search
          </button>
        </div>
      </div>
      <div className='container'>
        <div>
          <span className='text-white font-semibold text-2xl '>Starter</span>
          <hr className='border-t-4 border-[#999] my-2' />
        </div>
      </div>
    </>
  );
};

export default Home;
