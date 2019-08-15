function Contact() {
  return (
    <section className='projects bg-primary pb-6' id='contact'>
      <div className='container mx-auto p-6'>
        <h1 className='uppercase tracking-wide text-xl text-indigo-500 font-bold  mt-6 mb-6'>
          Contact Me
        </h1>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <h2 className='tracking-wide text-xl text-white font-semibold mt-6 mb-3 flex-1 pr-3'>
            Feel free to talk to me about opportunities, offers or just about
            anything you can think of.
            <br />
            <br />
            I'll make sure to get back to you ~24 hours. Alternatively you can
            mailto{' '}
            <a
              className='text-indigo-400'
              href='mailto:francis.udejiofficial@gmail.com'
            >
              FrancisUdeji@gmail.com
            </a>{' '}
            or call me directly on +234 817 8383 363.
          </h2>
          <div className='bg-secondary md:ml-3 rounded p-6 w-full md:w-2/5 ml-auto'>
            <form className='w-full'>
              <div className='mb-3'>
                <label
                  className='mb-3 text-gray-500 w-full w-full'
                  htmlFor='name'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  placeholder='Your Full Name'
                  className='bg-white text-dark font-semibold rounded border border-gray-500 px-3 py-3 w-full'
                />
              </div>
              <div className='mb-3'>
                <label
                  className='mb-3 text-gray-500 w-full w-full'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='Your Email Address'
                  className='bg-white text-dark font-semibold rounded border border-gray-500 px-3 py-3 w-full w-full'
                />
              </div>
              <div className='mb-3'>
                <label
                  className='mb-3 text-gray-500 w-full w-full'
                  htmlFor='message'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  rows='4'
                  placeholder='Your Message'
                  className='bg-white w-full text-dark font-semibold rounded border border-gray-500 p-3'
                />
              </div>
              <input
                type='submit'
                value='Send'
                className='bg-primary w-full text-white font-semibold rounded py-3 px-3'
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
