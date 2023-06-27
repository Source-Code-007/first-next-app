'use client'
import React from 'react';

const singlePost = ({params}) => {
    return (
        <main className="flex min-h-screen items-center justify-center p-24 shadow">
            <h2 className='font-bold text-3xl shadow p-5 bg-slate-50'>This page for single post! Unique Id: <span className='text-red-500'>{params.postId}</span></h2>
        </main>
    );
};

export default singlePost;