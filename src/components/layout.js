import '../../styles/layout.css'

function Layout({ children }) {
  return (
    <>
      <header className='bg-secondary'>
        <div className='container px-6'>
          <nav className='flex items-center justify-between flex-wrap py-3'>
            <div className='text-white mr-6'>
              <span className='font-semibold text-xl tracking-tight'>
                Francis Udeji
              </span>
            </div>

            <div className='block lg:hidden'>
              <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-indigo-600 hover:text-white hover:border-white'>
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

            <div className='w-full block lg:flex lg:items-center lg:w-auto'>
              <div className='text-sm lg:flex-grow'>
                <a
                  href='#about'
                  className='block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-primary p-3 rounded text-lg mr-4'
                >
                  About
                </a>
                <a
                  href='#works'
                  className='block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-primary p-3 rounded text-lg'
                >
                  Works
                </a>
                <a
                  href='#responsive-header'
                  className='block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-primary p-3 rounded text-lg'
                >
                  Contact
                </a>
                <a
                  href='#responsive-header'
                  className='block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-primary p-3 rounded text-lg'
                >
                  GitHub
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className='container p-6 '>
          <div className='container-inner flex justify-between items-center'>
            <div className=''>
              <h1 className='uppercase heading-tight tracking-wide font-bold text-xl text-white mb-3'>
                Hi and Welcome!
              </h1>
              <p className='text-gray-400 text-lg'>
                I'm a Full Stack JavaScript Developer based in Abuja, Nigeria. I
                have passion for quality software, accessibility, performance,
                PWAs and More.
              </p>
            </div>
            <img
              src='/static/francisudeji.webp'
              alt='Francis Udeji'
              className='rounded'
              style={{ borderRadius: '50%' }}
            />
          </div>
        </div>
      </header>
      <main>{children}</main>
      {/* <footer className='w-100 bg-blue-500 p-6'>
        <div className='container py-6'>
          <div className='wrapper flex justify-between items-center'>
            <h1>One</h1>
            <h1>Two</h1>
          </div>
        </div>
      </footer> */}
    </>
  )
}

export default Layout

// <svg
//   className='fill-current h-8 w-8 mr-2'
//   width='54'
//   height='54'
//   viewBox='0 0 54 54'
//   xmlns='http://www.w3.org/2000/svg'
// >
//   <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
// </svg>
