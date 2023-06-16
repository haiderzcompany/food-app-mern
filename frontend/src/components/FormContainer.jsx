import React from 'react';

const FormContainer = ({ children, formTitle = 'Title' }) => {
  return (
    <div className='bg-[#555]/70 p-10 border-2 text-white border-theme rounded-lg'>
      <div className='mb-4'>
        <h3 className='text-center text-xl font-semibold'>{formTitle}</h3>
      </div>
      {children}
    </div>
  );
};

export default FormContainer;
