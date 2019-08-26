import { useRef } from 'react'

function Header() {
  const navigationRef = useRef()

  // const { height, opacity, transform } = useSpring({
  //   from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
  //   to: {
  //     height: isOpen ? viewHeight : 0,
  //     opacity: isOpen ? 1 : 0,
  //     transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`
  //   }
  // })

  return (
    <header className='bg-primary'>
      <div className='container p-3'>
        <nav className='flex items-center justify-between flex-wrap p-3'>
          <div className='text-white mr-6'>
            <span className='font-normal text-2xl tracking-tight'>
              <a href='/' aria-label='Home Page'>
                Francis Udeji
              </a>
            </span>
          </div>

          <div className='block lg:hidden'>
            <button
              onClick={() => navigationRef.current.classList.toggle('hidden')}
              className='flex items-center px-3 py-2 border rounded text-teal-200 border-indigo-600 hover:text-white hover:border-white'
            >
              <svg
                className='fill-current h-3 w-3'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>

          <div
            ref={navigationRef}
            className='w-full hidden lg:flex lg:items-center lg:w-auto lg:flex'
          >
            <div className='text-sm lg:flex-grow'>
              <a
                href='#about'
                className='block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-secondary p-3 rounded text-lg'
              >
                About
              </a>
              <a
                href='/blog'
                className='block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-primary p-3 rounded text-lg'
              >
                Blog
              </a>
              <a
                href='#projects'
                className='block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-primary p-3 rounded text-lg'
              >
                Projects
              </a>
              <a
                href='#contact'
                className='block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-primary p-3 rounded text-lg'
              >
                Contact
              </a>
              <a
                href='https://github.com/francisudeji'
                className='block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-primary p-3 rounded text-lg'
              >
                GitHub
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
