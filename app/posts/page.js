import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 shadow">
      <h2 className='font-bold text-3xl shadow p-5 bg-slate-50'>This is posts page! <Link href={'/posts/new'} className='font-bold text-green-500'>Add new post</Link> <Link href={'/posts/2'} className='font-bold text-orange-500'>single post</Link> </h2>
    </main>
  );
};

export default page;