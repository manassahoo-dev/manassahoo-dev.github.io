import Head from 'next/head';
import React from 'react';

function DSA() {
  const list = ['Array', 'Linked List', 'Tree'];
  return (
    <div>
      <Head>
        <title>Data Structures And Algorithms </title>
        <meta
          name='description'
          content='Data Structures And Algorithms'
          key='desc'
        />
      </Head>
      <div className='flex gap-4 justify-between'>
        {list.map((item) => (
          <a
            href='#'
            className='block max-w-sm p-4  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
          >
            <h5 className='text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
              {item}
            </h5>
          </a>
        ))}
      </div>
    </div>
  );
}

export default DSA;
