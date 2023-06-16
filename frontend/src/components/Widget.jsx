import React from 'react';

const Widget = ({ children, widgetTile = 'Title' }) => {
  return (
    <div className='w-full bg-white px-4 py-10 rounded-lg shadow-[0_0_4px_#555]'>
      <div className='flex flex-col gap-6'>
        <div>
          <span className='outline-none font-semibold relative after:absolute after:content-[""] after:bg-theme-action after:w-full after:h-[2px] after:left-0 after:bottom-0 before:absolute before:content-[""] before:bg-theme-action before:w-[2px] before:h-[25px] before:left-0 before:bottom-0 p-2 '>
            {widgetTile}
          </span>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Widget;
