import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FormContainer from '../components/FormContainer';

const Register = () => {
  return (
    <div
      className='min-h-full'
      style={{ backgroundImage: `url('/assets/imgs/bg2.jpg')` }}
    >
      <Breadcrumb pageTitle='Register' />
      <div className='flex flex-row justify-center items-center py-4'>
        <FormContainer formTitle='Register'>
          <form>
            <div className='text-white mb-4'>
              <label className='block text-lg mb-1'>Username</label>
              <input
                className='form-input w-full rounded-lg text-theme'
                type='text'
                required={true}
              />
              <small className='text-sm'></small>
            </div>
            <div className='text-white mb-4'>
              <label className='block text-lg mb-1'>Email</label>
              <input
                className='form-input w-full rounded-lg text-theme'
                type='email'
                required={true}
              />
              <small className='text-sm'>
                We will never Share your email With Anyone
              </small>
            </div>
            <div className='text-white mb-4'>
              <label className='block text-lg mb-1'>Password</label>
              <input
                className='form-input w-full rounded-lg text-theme'
                type='password'
              />
            </div>
            <div className='text-white mb-4'>
              <label className='block text-lg mb-1'>Confirm Password</label>
              <input
                className='form-input w-full rounded-lg text-theme'
                type='password'
              />
            </div>
            <div>
              <button
                type='submit'
                className='bg-theme py-2 px-4 rounded-lg hover:bg-theme-dark'
              >
                Register
              </button>
            </div>
          </form>
        </FormContainer>
      </div>
    </div>
  );
};

export default Register;
