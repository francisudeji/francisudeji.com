import { useState } from 'react';
import Link from 'next/link';
import {
  FaReadme,
  FaPen,
  FaEnvelope,
  FaGithub,
  FaLaptopCode,
} from 'react-icons/fa';

import { FiX } from 'react-icons/fi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-primary'>
      <div className='container'>
        <div className='flex items-center justify-between px-6 py-6'>
          <span className='text-xl text-white'>
            <Link href='/'>
              <a>Francis Udeji</a>
            </Link>
          </span>
          <nav className='hidden desktop sm:block'>
            <ul className='flex items-center'>
              {/* <li className='ml-4 text-lg text-white'>
                <Link href='/about'>
                  <a className='px-3 py-1 focus:bg-gray-800 hover:bg-gray-800'>
                    About
                  </a>
                </Link>
              </li> */}
              <li className='ml-4 text-lg text-white'>
                <Link href='/blog'>
                  <a className='px-3 py-1 focus:bg-gray-800 hover:bg-gray-800'>
                    Blog
                  </a>
                </Link>
              </li>
              <li className='ml-4 text-lg text-white'>
                <Link href='/projects'>
                  <a className='px-3 py-1 focus:bg-gray-800 hover:bg-gray-800'>
                    Projects
                  </a>
                </Link>
              </li>
              <li className='ml-4 text-lg text-white'>
                <Link href='/contact'>
                  <a className='px-3 py-1 focus:bg-gray-800 hover:bg-gray-800'>
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className='p-2 text-white sm:hidden'
            onClick={() => setIsOpen(true)}
          >
            <svg
              className='w-5 h-5 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>

          <div
            className={`bg-primary absolute top-0 left-0 w-full h-full`}
            style={{
              transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'transform 0.25s ease-in-out',
            }}
          >
            <div className='flex items-center justify-between px-6 py-4 border-b border-gray-700'>
              <span className='text-xl font-semibold text-white'>
                <Link href='/'>
                  <a>Francis Udeji</a>
                </Link>
              </span>
              <button
                className='p-2 text-white'
                onClick={() => setIsOpen(false)}
              >
                <FiX aria-label='Close Menu' className='text-xl' />
              </button>
            </div>
            <nav className='px-4 mt-6 text-white'>
              <ul>
                {/* <li className='mb-3'>
                  <Link href='/about'>
                    <a className='flex items-center px-2 py-2 text-lg rounded-lg focus:bg-gray-800 hover:bg-gray-800'>
                      <span>About</span>
                    </a>
                  </Link>
                </li> */}
                <li className='mb-3'>
                  <Link href='/blog'>
                    <a className='flex items-center px-2 py-2 text-lg rounded-lg focus:bg-gray-800 hover:bg-gray-800'>
                      {/* <FaPen className='mr-3' /> */}
                      <span>Blog</span>
                    </a>
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href='/projects'>
                    <a className='flex items-center px-2 py-2 text-lg rounded-lg focus:bg-gray-800 hover:bg-gray-800'>
                      {/* <FaLaptopCode className='mr-3' /> */}
                      <span>Projects</span>
                    </a>
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href='/contact'>
                    <a className='flex items-center px-2 py-2 text-lg rounded-lg focus:bg-gray-800 hover:bg-gray-800'>
                      {/* <FaEnvelope className='mr-3' /> */}
                      <span>Contact</span>
                    </a>
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href='/about'>
                    <a className='flex items-center px-2 py-2 text-lg rounded-lg focus:bg-gray-800 hover:bg-gray-800'>
                      {/* <FaGithub className='mr-3' /> */}
                      <span>GitHub</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
