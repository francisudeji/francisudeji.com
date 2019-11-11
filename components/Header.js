import { useState } from 'react'
import Link from 'next/link'
import {
  FaReadme,
  FaPen,
  FaEnvelope,
  FaGithub,
  FaTimes,
  FaLaptopCode
} from 'react-icons/fa'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='bg-primary'>
      <div className='container'>
        <div className='flex justify-between items-center px-6 py-6'>
          <span className='text-xl text-white'>
            <Link href='/'>
              <a>Francis Udeji</a>
            </Link>
          </span>
          <nav className='desktop hidden sm:block'>
            <ul className='flex items-center'>
              <li className='text-lg text-white ml-4'>
                <Link href='/about'>
                  <a className='px-3 py-1 focus:bg-gray-800 hover:bg-gray-800'>
                    About
                  </a>
                </Link>
              </li>
              <li className='text-lg text-white ml-4'>
                <Link href='/blog'>
                  <a className='px-3 py-1 focus:bg-gray-800 hover:bg-gray-800'>
                    Blog
                  </a>
                </Link>
              </li>
              <li className='text-lg text-white ml-4'>
                <Link href='/works'>
                  <a className='px-3 py-1 focus:bg-gray-800 hover:bg-gray-800'>
                    Works
                  </a>
                </Link>
              </li>
              <li className='text-lg text-white ml-4'>
                <Link href='/contact'>
                  <a className='px-3 py-1 focus:bg-gray-800 hover:bg-gray-800'>
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className='text-white p-2 sm:hidden'
            onClick={() => setIsOpen(true)}
          >
            <svg
              className='fill-current h-5 w-5'
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
              transition: 'transform 0.25s ease-in-out'
            }}
          >
            <div className='flex justify-between items-center px-6 py-4 border-b border-gray-700'>
              <span className='text-xl text-white font-semibold'>
                <Link href='/'>
                  <a>Francis Udeji</a>
                </Link>
              </span>
              <button
                className='text-white p-2'
                onClick={() => setIsOpen(false)}
              >
                <FaTimes aria-label='Close Menu' className='text-xl' />
              </button>
            </div>
            <nav className='px-4 text-white mt-6'>
              <ul>
                <li className='mb-3'>
                  <Link href='/about'>
                    <a className='py-2 px-2 rounded-lg flex items-center focus:bg-gray-800 hover:bg-gray-800'>
                      <FaReadme className=' mr-3' />
                      <span>About</span>
                    </a>
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href='/blog'>
                    <a className='py-2 px-2 rounded-lg flex items-center focus:bg-gray-800 hover:bg-gray-800'>
                      <FaPen className='mr-3' />
                      <span>Blog</span>
                    </a>
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href='/works'>
                    <a className='py-2 px-2 rounded-lg flex items-center focus:bg-gray-800 hover:bg-gray-800'>
                      <FaLaptopCode className='mr-3' />
                      <span>Works</span>
                    </a>
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href='/contact'>
                    <a className='py-2 px-2 rounded-lg flex items-center focus:bg-gray-800 hover:bg-gray-800'>
                      <FaEnvelope className='mr-3' />
                      <span>Contact</span>
                    </a>
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href='/about'>
                    <a className='py-2 px-2 rounded-lg flex items-center focus:bg-gray-800 hover:bg-gray-800'>
                      <FaGithub className='mr-3' />
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
  )
}

export default Header
