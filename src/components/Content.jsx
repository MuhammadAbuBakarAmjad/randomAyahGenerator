import React from 'react';

const Content = (props) => {
    return (
        <div className='mx-auto w-80 md:w-130 lg:w-210 mt-20 md:mt-25 flex flex-col justify-center items-center h-auto'>
            <p className='text-gray-800 text-3xl mb-10 md:mb-15'>{props.instruction}</p>
            <p style={{ wordSpacing: '0.5rem' }} className='robotoFont font-semibold text-gray-900 text-2xl lg:text-3xl leading-loose'>{props.ayah}<br/><br></br>{props.ayahDescription}</p>
        </div>
    );
};

export default Content;
