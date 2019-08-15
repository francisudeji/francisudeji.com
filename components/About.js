import Link from 'next/link'
function About() {
  return (
    <section className='about bg-primary' id='about'>
      <div className='container mx-auto p-6'>
        <h1 className='uppercase tracking-wide text-xl text-indigo-600 font-bold mt-6 mb-6'>
          About
        </h1>
        <h2 className='tracking-wide text-xl text-white font-semibold mt-6 mb-3'>
          Howdy! I'm Francis Udeji 👋
        </h2>
        <div className='content text-white text-xl antialiased'>
          <p className='mb-6'>
            I'm a full stack JavaScript software engineer. I grew up in Abuja,
            Nigeria. I recently graduated from{' '}
            <a href='https://crutech.edu.com' className='text-indigo-400'>
              Cross River University of Technology, Calabar.
            </a>{' '}
            with a Bachelor degree in Computer Science.
          </p>

          <p className='mb-6'>
            I currently work as a freelancer but open to opportunities as either
            a Front-end, Back-end or Full Stack Developer. I have passion for
            Open Source, public speaking, accessibility, and Technical Writing.
          </p>
        </div>
        <h2 className='tracking-wide text-xl text-white font-semibold mt-6 mb-3'>
          Skills and Stack 👋
        </h2>
        <div className='content text-white text-xl antialiased'>
          <ul className='pl-6 mb-6' style={{ listStyle: 'disc' }}>
            <li>Web Design and Development</li>
            <li>Technical Writing</li>
            <li>Teaching</li>
            <li>Public Speaking</li>
          </ul>
          <ul className='pl-6 mb-6' style={{ listStyle: 'disc' }}>
            <li>HTML5, CSS3, and JavaScript</li>
            <li>React.js (Next.js, Gatsby.js, and React Native)</li>
            <li>MongoDB and MySQL</li>
            <li>Bootstrap and Tailwindcss</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className='flex'>
          <Link href='#contact'>
            <a className='inline-block bg-primart border border-4 border-primary rounded px-3 py-3 text-sm font-bold text-white mr-3'>
              Contact Me
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
