import React from 'react';

const Step = ({ number, color }) => {
  return (
    <div className='flex h-12 w-12 bg-primary-azulCeleste1 rounded-full items-center justify-center shadow-xl'>
        <span className={`flex h-10 w-10 rounded-full items-center justify-center text-white font-semibold text-xl ${color}`}>{number}</span>
    </div>
  );
};

export default Step;
