import React from 'react';

const Blog = ({blog}) => {
    return (
        <div className='p-5 border bg-slate-50 border-[#2bf346]'>
            <img src={blog.url} className='rounded-full h-48 w-48 mx-auto' alt="" />
            <h2 className='font-bold text-3xl mb-8'>{blog.title}</h2>
            <p>{blog.body}</p>
        </div>
    );
};

export default Blog;