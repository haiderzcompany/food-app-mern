import React from 'react';
import FormContainer from '../components/FormContainer';
import Breadcrumb from '../components/Breadcrumb';

const Login = () => {
  return (
    <div
      className='min-h-full'
      style={{ backgroundImage: `url('/assets/imgs/bg1.jpg')` }}
    >
      <Breadcrumb pageTitle='Login' />
      <div className='flex flex-row justify-center items-center py-4'>
        <FormContainer formTitle='Login'>
          <form>
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
            <div>
              <button
                type='submit'
                className='bg-theme py-2 px-4 rounded-lg hover:bg-theme-dark'
              >
                Login
              </button>
            </div>
          </form>
        </FormContainer>
      </div>
    </div>
  );
};

export default Login;
