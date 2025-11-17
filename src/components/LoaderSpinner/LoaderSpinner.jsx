import React from 'react';
import { PacmanLoader } from 'react-spinners';

const LoaderSpinner = () => {
    return (
        <div className='max-h-[calc(100vh-285px)] flex justify-center items-center h-[calc(100vh-285px)]'>
            <div>
                <PacmanLoader></PacmanLoader>
            </div>
        </div>
    );
};

export default LoaderSpinner;