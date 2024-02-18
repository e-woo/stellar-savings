import React from 'react';

const Planet2 = () => {

    let completed = JSON.parse(localStorage.getItem('completed') || '0');

    return (
        <div className='relative'>
            <img className='w-44 h-24' src='src/assets/planet2.png' alt='Planet2'></img>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                <p className='text-base font-bold'>{completed} goals completed!</p>
            </div>
        </div>
    );
};

export default Planet2;
