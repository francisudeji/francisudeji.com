import Layout from '../components/layout'

function Contact() {
  return (
    <>
      <Layout pageTitle='Contact | Francis Udeji'>
        <div className='bg-gray-100 py-10 md:py-20'>
          <div className='container'>
            <h2 className='text-3xl text-gray-800 font-bold px-6'>
              Contact Me
            </h2>
            <div className='flex flex-col sm:flex-row items-center'>
              <div className='bg-white w-full inline-block rounded-lg pt-6 pb-10 px-6 shadow-lg mt-5 sm:w-1/2 md:px-10'>
                <form
                  action="/contact"
                  method='POST'
                  data-netlify='true'
                  netlify-honeypot='bot-field'
                  name='Contact from francisudeji.com'
                  className='block'
                >
                  <div className='mt-6'>
                    <label
                      className='block text-blue-500 text-sm mb-2'
                      htmlFor='name'
                    >
                      Full Name
                    </label>
                    <input
                      className='w-full block border-b-2 border-gray-500 focus:border-blue-500 focus:outline-none'
                      type='text'
                      name='name'
                      id='name'
                      placeholder="I'm Francis Udeji, what do I call you?"
                    />
                  </div>
                  <div className='mt-6'>
                    <label
                      className='block text-blue-500 text-sm mb-2'
                      htmlFor='email'
                    >
                      Email Address
                    </label>
                    <input
                      className='w-full block border-b-2 border-gray-500 focus:border-blue-500 focus:outline-none'
                      type='email'
                      name='email'
                      id='email'
                      placeholder="What's your email address?"
                    />
                  </div>
                  <div className='mt-6'>
                    <label
                      className='block text-blue-500 text-sm mb-2'
                      htmlFor='message'
                    >
                      Message
                    </label>
                    <textarea
                      className='w-full block border-b-2 border-gray-500 focus:border-blue-500 focus:outline-none'
                      name='message'
                      id='message'
                      rows='5'
                      placeholder='Type to send message'
                    ></textarea>
                  </div>
                  <button
                    type='submit'
                    className='bg-blue-500 text-white text-base mt-6 px-6 rounded-lg py-3 shadow-lg hover:bg-blue-600 focus:bg-blue-600 focus:outline-none'
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className='w-full px-6 sm:w-1/2 sm:px-10'>
                <p className='text-gray-800 text-lg mt-6 sm:text-3xl sm:mt-0'>
                  Feel free to say hi or chat with me. <br />
                  You can call me on +234 817 8383 363 or{' '}
                  <a
                    className='text-blue-500'
                    href='mailto:francis.udejiofficial@gmail.com'
                  >
                    email me directly
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contact
