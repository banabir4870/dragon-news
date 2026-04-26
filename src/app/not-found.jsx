import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-screen flex justify-center items-center flex-col space-y-6'>
            <h2 className='font-bold text-5xl'>This Page Is Not Found</h2>
            <Link href={'/'}><button className='btn btn-primary btn-outline'>Back To Home</button></Link>
        </div>
    );
};

export default NotFoundPage;