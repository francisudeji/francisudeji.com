import Layout from '../components/layout'

function Contact() {
  return (
    <>
      <Layout pageTitle='Works | Francis Udeji'>
        <div className='bg-gray-100 py-10 md:py-20'>
          <div className='container'>
            <h2 className='text-3xl text-gray-800 font-bold px-6'>
              Featured Works
            </h2>
            <div className='flex flex-col justify-center mt-5 sm:flex-row sm:flex-wrap sm:justify-between'>
              <div className='rounded shadow-md p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl text-gray-800 font-semibold'>
                  My Personal Website
                </h3>
                <div>
                  <p className='text-base text-gray-800 font-normal mt-2'>
                    This is the site you're currently on. On this website,
                    you'll find my portfolio and blog where I write technical
                    articles on web development.
                  </p>
                </div>
                <div className='flex mt-3'>
                  <a
                    href='https://github.com/francisudeji/francisudeji.com'
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Source
                  </a>
                </div>
              </div>

              <div className='rounded shadow-md p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl text-gray-800 font-semibold'>
                  React Crypto Order Book
                </h3>
                <p className='text-base text-gray-800 font-normal mt-2'>
                  This is a web app I built to stream crypto currencies order
                  books in real-time using web sockets. It includes major crypto
                  currencies around the world.
                </p>
                <div className='flex mt-3'>
                  <a
                    href='https://react-crypto-order-book.netlify.com'
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Link
                  </a>
                  <a
                    href='https://github.com/francisudeji/react-crypto-order-book-app'
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100 ml-3'
                  >
                    Source
                  </a>
                </div>
              </div>

              <div className='rounded shadow-md p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl text-gray-800 font-semibold'>
                  GitHub Profile
                </h3>
                <p className='text-base text-gray-800 font-normal mt-2'>
                  Demo GitHub client for viewing GitHub users profile. I used
                  0Auth to persist login and using the v3 of GitHub's API.
                </p>
                <div className='flex mt-3'>
                  <a
                    href='https://github-profile.netlify.com'
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Link
                  </a>
                  <a
                    href='https://github.com/francisudeji/github-profile'
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100 ml-3'
                  >
                    Source
                  </a>
                </div>
              </div>

              <div className='rounded shadow-md p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl text-gray-800 font-semibold'>
                  Cleanfits
                </h3>
                <p className='text-base text-gray-800 font-normal mt-2'>
                  Cleanfits is a demo website for a laundry and dry cleaning
                  agency. It lets users book cleaning appointments, track
                  delivery and pay online.
                </p>
                <div className='flex mt-3'>
                  <a
                    href='https://cleanfits.herokuapp.com'
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Link
                  </a>
                  <a
                    href='https://github.com/francisudeji/cleanfits_original'
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100 ml-3'
                  >
                    Source
                  </a>
                </div>
              </div>

              <div className='rounded shadow-md p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl text-gray-800 font-semibold'>
                  Movie Time
                </h3>
                <p className='text-base text-gray-800 font-normal mt-2'>
                  A web app for booking movie tickets from a fictional cinema.
                  It features movie trailers, rating, description, online
                  payment and email notifications.
                </p>
                <div className='flex mt-3'>
                  <a
                    href='https://movietimesng.herokuapp.com'
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Link
                  </a>
                  <a
                    href='https://github.com/francisudeji/movietime'
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100 ml-3'
                  >
                    Source
                  </a>
                </div>
              </div>

              <div className='rounded shadow-md p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl text-gray-800 font-semibold'>
                  TransferWise Clone
                </h3>
                <p className='text-base text-gray-800 font-normal mt-2'>
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
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Link
                  </a>
                  <a
                    href='https://github.com/francisudeji/transferwise'
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100 ml-3'
                  >
                    Source
                  </a>
                </div>
              </div>

              <div className='rounded shadow-md p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl text-gray-800 font-semibold'>
                  Unsplash Clone
                </h3>
                <p className='text-base text-gray-800 font-normal mt-2'>
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
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Link
                  </a>
                  <a
                    href='https://github.com/francisudeji/mini-unsplash-clone'
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100 ml-3'
                  >
                    Source
                  </a>
                </div>
              </div>

              <div className='rounded shadow-md p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl text-gray-800 font-semibold'>
                  React Admin Dashboard UI
                </h3>
                <p className='text-base text-gray-800 font-normal mt-2'>
                  Admin dashboard UI design with React and TailwindCSS. Includes
                  responsive design.
                </p>
                <div className='flex mt-3'>
                  <a
                    href='https://react-admin-dashboard-ui.netlify.com'
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Link
                  </a>
                  <a
                    href='https://github.com/francisudeji/react-admin-dashboard-ui'
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100 ml-3'
                  >
                    Source
                  </a>
                </div>
              </div>

              <div className='rounded shadow-md p-6 mb-8 w-full sm:w-48%'>
                <h3 className='inline-block text-2xl text-gray-800 font-semibold'>
                  Kaprekar's Constant Challenge
                </h3>
                <p className='text-base text-gray-800 font-normal mt-2'>
                  My solution to{' '}
                  <a className='https://codepen.io/francisudeji/pen/EepyLG'>
                    Kaprekar's Constant
                  </a>{' '}
                  hosted on Codepen.
                </p>
                <div className='flex mt-3'>
                  <a
                    href='https://codepen.io/francisudeji/pen/EepyLG'
                    className='text-blue-500 px-4 py-1 rounded hover:bg-blue-100 focus:bg-blue-100'
                  >
                    Source
                  </a>
                </div>
              </div>
            </div>

            <div className='text-center mt-10 mb-5'>
              <a
                href='https://github.com/francisudeji?tab=repositories'
                className='text-blue-500 uppercase font-base px-6 py-3 rounded hover:bg-blue-100 focus:bg-blue-100'
              >
                View More →
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contact
