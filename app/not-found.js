import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <h2 className='my-title inline-block p-4 text-red-500 text-center'><span className='font-extrabold text-5xl'>404</span> <br /> page not found!</h2>
            <p className='shadow px-2 py-1 rounded'>Back to <Link href={'/'}><button className='cmn-btn-one'> Home</button></Link></p>
        </div>
    );
};

export default NotFoundPage;