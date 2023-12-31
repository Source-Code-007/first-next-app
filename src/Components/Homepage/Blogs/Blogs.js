'use client'
import React, { Suspense, useEffect, useState } from 'react';
import Blog from './Blog';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setBlogs(json))
    })

    return (
        <div className='my-container my-16'>
            <div className='text-center space-y-4 my-16 w-3/6 mx-auto'>
                <h2 className='my-title'>Blogs</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corporis odio quidem rerum officiis eligendi.</p>
            </div>
            {
                blogs.length ? <div className='grid grid-cols-3 gap-6'>
                    {

                        blogs?.slice(0, 9).map((blog, ind) => <Blog key={ind} blog={blog}></Blog>)

                    }
                </div>
                    :
                    <Skeleton count={6}/>
            }

        </div>
    );
};

export default Blogs;