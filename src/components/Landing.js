import Link from 'next/link'
function Landing() {
  return (
    <section className='bg-secondary'>
      <div className='container p-6 '>
        <div className='container-inner flex justify-between items-center flex-col md:flex-row'>
          <div className='order-2 md:order1'>
            <h1 className='uppercase heading-tight tracking-wide font-bold text-xl text-white mb-3'>
              Hi and Welcome!
            </h1>
            <p className='text-gray-400 md:pr-6 text-lg mb-6'>
              I'm a Full Stack JavaScript Developer with 4 years experience
              (including unprofessional) based in Abuja, Nigeria. I am
              passionate about building quality software for the web, JavaScript
              ecosystem, accessibility, performance, PWAs and More.
            </p>
            <div className='flex'>
              <Link href='#about'>
                <a className='inline-block bg-secondary border border-4 border-indigo-600 rounded px-3 py-3 text-sm font-bold text-gray-200 mr-3'>
                  More About Me
                </a>
              </Link>
              <Link href='#contact'>
                <a className='inline-block bg-primary rounded px-3 py-3 text-sm font-bold text-gray-200 mr-3'>
                  Contact Me
                </a>
              </Link>
            </div>
          </div>
          <img
            src='/static/francisudeji.webp'
            alt='Francis Udeji'
            className='rounded order-1 md:order-2 md:h-auto mb-6 h-56'
            style={{ borderRadius: '50%' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Landing
