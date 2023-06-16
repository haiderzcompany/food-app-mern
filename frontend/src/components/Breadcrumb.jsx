import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
const Breadcrumb = ({ pageTitle = 'Page Title' }) => {
  return (
    <div className='bg-black/50 py-8 mb-10'>
      <div className='container'>
        <div className='text-white flex flex-col gap-4'>
          <div>
            <h2 className='font-semibold text-3xl'>{pageTitle}</h2>
          </div>
          <ul className='flex flex-auto gap-3'>
            <li className='[&:not(:last-child)]:after:content-["/"] after:ml-3 flex flex-row justify-center items-center'>
              <Link to={'/'}>
                <AiFillHome />
              </Link>
            </li>
            <li className='[&:not(:last-child)]:after:content-["/"] flex flex-row justify-center items-center'>
              <span>{pageTitle}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
