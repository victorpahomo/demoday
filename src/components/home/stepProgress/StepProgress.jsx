import React from 'react';
import Step from './Step';

const StepProgress = ({ step }) => {
    const colors = ['bg-gray-300', 'bg-[#3c526a]'];

    const getStepColor = (index) => {
        // Si el paso es mayor o igual al index + 1, entonces el color es el segundo, sino el primero
        return step >= index + 1 ? colors[1] : colors[0];
    };

    return (
        <div className='flex items-center justify-center w-full'>
            {/*  Al Componente step le paso el numero y el color */}
            <Step number={1} color={getStepColor(0)} />
            {/*  Al span le paso el color */}
            <span className={`w-1/3 h-3 rounded-sm shadow-md ${getStepColor(1)}`}></span>
            
            <Step number={2} color={getStepColor(1)} />
            <span className={`w-1/3 h-3 rounded-sm shadow-md ${getStepColor(2)}`}></span>
            <Step number={3} color={getStepColor(2)} />
        </div>
    );
};

export default StepProgress;
