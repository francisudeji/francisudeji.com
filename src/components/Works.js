function Works() {
  return (
    <section className='works'>
      <h1 className='uppercase tracking-wide text-xl text-indigo-600 font-bold mb-6'>
        Works
      </h1>
      <div className='flex justify-between align-center'>
        <div className='bg-secondary max-w-sm rounded overflow-hidden shadow-lg'>
          <img
            className='w-full'
            src='/static/mini-unsplash.jpg'
            alt='Mini Unsplash Clone'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 text-white'>
              Mini Unsplash Clone
            </div>
            <p className='text-gray-500 text-lg'>
              As the name suggests, this is a mimic of Unsplash but only a
              subset. Here, the images are only African related and no major
              functionality of Unsplash was replicated according to the
              guidelines.
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

        <div className='bg-secondary max-w-sm rounded overflow-hidden shadow-lg'>
          <img
            className='w-full'
            src='/static/movietime.jpg'
            alt='Mini Unsplash Clone'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 text-white'>Movie Time</div>
            <p className='text-gray-500 text-lg'>
              Movie Time is an online movie ticket booking application where all
              the movie are outsourced via a third party API. Includes watchin
              trailers, bookung and ticketing.
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
      </div>
    </section>
  )
}

export default Works
