function Works() {
  return (
    <section className='works' id='works'>
      <div className='container mx-auto p-6'>
        <h1 className='uppercase tracking-wide text-xl text-indigo-600 font-bold mb-6'>
          Works
        </h1>
        <div className='flex flex-col md:flex-row md:flex-wrap content-between'>
          <div className='mb-6 md:w-1/2 bg-secondary rounded overflow-hidden shadow-lg'>
            <img
              className='w-full'
              src='/static/movietime.jpg'
              alt='Mini Unsplash Clone'
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 text-white'>
                Movie Time
              </div>
              <p className='text-gray-400 text-lg'>
                Movie Time is an online movie ticket booking application where
                all the movie are outsourced via a third party API. Includes
                watchin trailers, bookung and ticketing.
              </p>
            </div>
            <div className='px-6 py-4'>
              <a
                href='https://movietimesng.herokuapp.com'
                className='inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 hover:bg-indigo-600'
              >
                Link
              </a>
              <a
                href='https://github.com/francisudeji/movietime'
                className='inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 hover:bg-indigo-600'
              >
                GitHub
              </a>
            </div>
          </div>
          <div className='mb-6 md:w-1/2 bg-secondary rounded overflow-hidden shadow-lg'>
            <img
              className='w-full'
              src='/static/mini-unsplash.jpg'
              alt='Mini Unsplash Clone'
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 text-white'>
                Mini Unsplash Clone
              </div>
              <p className='text-gray-400 text-lg'>
                This is an Unsplash Clone. Here, the images are only African
                related and no major functionality of Unsplash was replicated
                according to the guidelines.
              </p>
            </div>
            <div className='px-6 py-4'>
              <a
                href='https://mini-unsplash.netlify.com'
                className='inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 hover:bg-indigo-600'
              >
                Link
              </a>
              <a
                href='https://github.com/francisudeji/mini-unsplash-clone'
                className='inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 hover:bg-indigo-600'
              >
                GitHub
              </a>
            </div>
          </div>

          <div className='mb-6 md:w-1/2 bg-secondary rounded overflow-hidden shadow-lg mb-6 flex-col'>
            <img
              className='w-full'
              src='/static/movietime.jpg'
              alt='Mini Unsplash Clone'
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 text-white'>
                Movie Time
              </div>
              <p className='text-gray-400 text-lg'>
                Movie Time is an online movie ticket booking application where
                all the movie are outsourced via a third party API. Includes
                watchin trailers, bookung and ticketing.
              </p>
            </div>
            <div className='px-6 py-4'>
              <a
                href='https://movietimesng.herokuapp.com'
                className='inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 hover:bg-indigo-600'
              >
                Link
              </a>
              <a
                href='https://github.com/francisudeji/movietime'
                className='inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 hover:bg-indigo-600'
              >
                GitHub
              </a>
            </div>
          </div>
          <div className='mb-6 md:w-1/2 bg-secondary rounded overflow-hidden shadow-lg mb-6'>
            <img
              className='w-full'
              src='/static/mini-unsplash.jpg'
              alt='Mini Unsplash Clone'
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 text-white'>
                Mini Unsplash Clone
              </div>
              <p className='text-gray-400 text-lg'>
                This is an Unsplash Clone. Here, the images are only African
                related and no major functionality of Unsplash was replicated
                according to the guidelines.
              </p>
            </div>
            <div className='px-6 py-4'>
              <a
                href='https://mini-unsplash.netlify.com'
                className='inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 hover:bg-indigo-600'
              >
                Link
              </a>
              <a
                href='https://github.com/francisudeji/mini-unsplash-clone'
                className='inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 hover:bg-indigo-600'
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works
