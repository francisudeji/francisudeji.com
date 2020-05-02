import Layout from '../components/layout';

function Projects() {
  return (
    <>
      <Layout pageTitle='Works | Francis Udeji'>
        <div className='py-10 bg-gray-100 md:py-20'>
          <div className='container'>
            <h2 className='px-6 text-3xl font-bold text-gray-800'>
              Featured Projects
            </h2>
            <div className='flex flex-col justify-center px-6 mt-5 md:px-0 sm:flex-row sm:flex-wrap sm:justify-between'>
              <div className='bg-white rounded shadow p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl font-semibold text-gray-800'>
                  My Personal Website
                </h3>
                <div>
                  <p className='mt-2 text-base font-normal text-gray-800'>
                    This is the site you're currently on. On this website,
                    you'll find my portfolio and blog where I write technical
                    articles on web development.
                  </p>
                </div>
                <div className='flex mt-3'>
                  <a
                    href='https://github.com/francisudeji/francisudeji.com'
                    className='px-4 py-1 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Source
                  </a>
                </div>
              </div>

              <div className='bg-white rounded shadow p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl font-semibold text-gray-800'>
                  React Crypto Order Book
                </h3>
                <p className='mt-2 text-base font-normal text-gray-800'>
                  This is a web app I built to stream crypto currencies order
                  books in real-time using web sockets. It includes major crypto
                  currencies around the world.
                </p>
                <div className='flex mt-3'>
                  <a
                    href='https://react-crypto-order-book.netlify.com'
                    className='px-4 py-1 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Link
                  </a>
                  <a
                    href='https://github.com/francisudeji/react-crypto-order-book-app'
                    className='px-4 py-1 ml-3 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Source
                  </a>
                </div>
              </div>

              <div className='bg-white rounded shadow p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl font-semibold text-gray-800'>
                  GitHub Profile
                </h3>
                <p className='mt-2 text-base font-normal text-gray-800'>
                  Demo GitHub client for viewing GitHub users profile. I used
                  0Auth to persist login and using the v3 of GitHub's API.
                </p>
                <div className='flex mt-3'>
                  <a
                    href='https://github-profile.netlify.com'
                    className='px-4 py-1 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Link
                  </a>
                  <a
                    href='https://github.com/francisudeji/github-profile'
                    className='px-4 py-1 ml-3 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Source
                  </a>
                </div>
              </div>
              {/* 
              <div className='bg-white rounded shadow p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl font-semibold text-gray-800'>
                  Cleanfits
                </h3>
                <p className='mt-2 text-base font-normal text-gray-800'>
                  Cleanfits is a demo website for a laundry and dry cleaning
                  agency. It lets users book cleaning appointments, track
                  delivery and pay online.
                </p>
                <div className='flex mt-3'>
                  <a
                    href='https://cleanfits.herokuapp.com'
                    className='px-4 py-1 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Link
                  </a>
                  <a
                    href='https://github.com/francisudeji/cleanfits_original'
                    className='px-4 py-1 ml-3 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Source
                  </a>
                </div>
              </div> */}

              {/* <div className='bg-white rounded shadow p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl font-semibold text-gray-800'>
                  Movie Time
                </h3>
                <p className='mt-2 text-base font-normal text-gray-800'>
                  A web app for booking movie tickets from a fictional cinema.
                  It features movie trailers, rating, description, online
                  payment and email notifications.
                </p>
                <div className='flex mt-3'>
                  <a
                    href='https://movietimesng.herokuapp.com'
                    className='px-4 py-1 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Link
                  </a>
                  <a
                    href='https://github.com/francisudeji/movietime'
                    className='px-4 py-1 ml-3 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Source
                  </a>
                </div>
              </div> */}

              <div className='bg-white rounded shadow p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl font-semibold text-gray-800'>
                  TransferWise Clone
                </h3>
                <p className='mt-2 text-base font-normal text-gray-800'>
                  I cloned the homepage of{' '}
                  <a className='text-blue-500' href='https://transferwise.com'>
                    transferwise.com
                  </a>
                  . I attempted the design and most functionalities present on
                  the website.
                </p>
                <div className='flex mt-3'>
                  <a
                    href='https://transferwise.netlify.com'
                    className='px-4 py-1 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Link
                  </a>
                  <a
                    href='https://github.com/francisudeji/transferwise'
                    className='px-4 py-1 ml-3 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Source
                  </a>
                </div>
              </div>

              <div className='bg-white rounded shadow p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl font-semibold text-gray-800'>
                  Unsplash Clone
                </h3>
                <p className='mt-2 text-base font-normal text-gray-800'>
                  I cloned the popular stock image website{' '}
                  <a className='text-blue-500' href='https://unsplash.com'>
                    unsplash.com
                  </a>
                  . According to the terms, I attempted to create a design that
                  is not identical to the original.
                </p>
                <div className='flex mt-3'>
                  <a
                    href='https://mini-unsplash.netlify.com'
                    className='px-4 py-1 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Link
                  </a>
                  <a
                    href='https://github.com/francisudeji/mini-unsplash-clone'
                    className='px-4 py-1 ml-3 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Source
                  </a>
                </div>
              </div>

              <div className='bg-white rounded shadow p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl font-semibold text-gray-800'>
                  React Admin Dashboard UI
                </h3>
                <p className='mt-2 text-base font-normal text-gray-800'>
                  Admin dashboard UI design with React and TailwindCSS. Includes
                  responsive design.
                </p>
                <div className='flex mt-3'>
                  <a
                    href='https://react-admin-dashboard-ui.netlify.com'
                    className='px-4 py-1 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Link
                  </a>
                  <a
                    href='https://github.com/francisudeji/react-admin-dashboard-ui'
                    className='px-4 py-1 ml-3 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Source
                  </a>
                </div>
              </div>

              <div className='bg-white rounded shadow p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl font-semibold text-gray-800'>
                  Kaprekar's Constant Challenge
                </h3>
                <p className='mt-2 text-base font-normal text-gray-800'>
                  My solution to{' '}
                  <a className='https://codepen.io/francisudeji/pen/EepyLG'>
                    Kaprekar's Constant
                  </a>{' '}
                  hosted on Codepen.
                </p>
                <div className='flex mt-3'>
                  <a
                    href='https://codepen.io/francisudeji/pen/EepyLG'
                    className='px-4 py-1 text-blue-500 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Source
                  </a>
                </div>
              </div>
            </div>

            <div className='mt-10 mb-5 text-center'>
              <a
                href='https://github.com/francisudeji?tab=repositories'
                className='px-6 py-3 text-blue-500 uppercase rounded font-base hover:bg-blue-100 focus:bg-blue-100'
              >
                View More on GitHub →
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Projects;
