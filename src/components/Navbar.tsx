import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className='flex flex-wrap items-center bg-black p-3'>
        <Link href='/'>
          <a className='mr-4 inline-flex items-center p-2 '>
            <span className='text-2xl font-bold uppercase tracking-wide text-white'>
              QU4R7Z
            </span>
          </a>
        </Link>
        <button
          className=' ml-auto inline-flex rounded p-3 text-white outline-none hover:bg-pink-600 hover:text-white lg:hidden'
          onClick={handleClick}
        >
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:w-auto lg:flex-grow`}
        >
          <div className='flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto lg:w-auto lg:flex-row lg:items-center'>
            <Link href='/'>
              <a className='w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-pink-600 hover:text-white lg:inline-flex lg:w-auto '>
                Home
              </a>
            </Link>
            <Link href='/Project'>
              <a className='w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-pink-600 hover:text-white lg:inline-flex lg:w-auto'>
                Project
              </a>
            </Link>
            <Link href='/Member'>
              <a className='w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-pink-600 hover:text-white lg:inline-flex lg:w-auto'>
                Member
              </a>
            </Link>
            <Link href='/Community'>
              <a className='w-full items-center justify-center rounded px-3 py-2 font-bold text-white hover:bg-pink-600 hover:text-white lg:inline-flex lg:w-auto'>
                Community
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
