import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <div className='container flex flex-wrap items-center justify-between mx-auto py-4'>
        <Link href='/' className='flex items-center'>
          <Image src='/logo.png' alt='logo' width={349 / 3} height={102 / 3} />
        </Link>

        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-cta'
        >
          <ul className='flex flex-col m-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li className='m-0'>
              <Link
                href='/'
                className='block pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
              >
                Home
              </Link>
            </li>
            <li className='m-0'>
              <Link href='/data-structures-and-algorithms' className='link'>
                DSA
              </Link>
            </li>
            <li className='m-0'>
              <Link href='/interview-questions-answers' className='link'>
                Interview Question
              </Link>
            </li>
            <li className='m-0'>
              <a href='#' className='link'>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
