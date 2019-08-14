import { FaCheckCircle } from 'react-icons/fa'

function About() {
  return (
    <section className='about bg-primary' id='about'>
      <div className='container mx-auto p-6'>
        <h1 className='uppercase tracking-wide text-xl text-indigo-600 font-bold mt-6 mb-10'>
          About
        </h1>

        <ul className='flex mt-3'>
          <li className='flex-1 mr-2'>
            <a
              className='text-center block border-b-4 border-indigo-600 rounded text-white hover:text-gray-200 py-2 px-4'
              href='#'
            >
              Experience
            </a>
          </li>
          <li className='flex-1 mr-2'>
            <a
              className='text-center block rounded py-2 px-4  text-gray-500 hover:text-white'
              href='#'
            >
              Education
            </a>
          </li>
          <li className='flex-1 mr-2'>
            <a
              className='text-center block rounded py-2 px-4  text-gray-500 hover:text-white'
              href='#'
            >
              Skills
            </a>
          </li>
        </ul>

        <div className='content mt-12 md:px-6'>
          <div className='experience mb-6'>
            <div className='flex flex-col md:justify-between'>
              <h2 className='tracking-wide text-xl text-gray-500 font-semibold'>
                Full Stack JavaScript Developer | Freelancer
              </h2>
              <p className='tracking-wide text-lg text-gray-500 font-semibold'>
                March 2018 - Present
              </p>
            </div>
            <div>
              <ul
                className='text-gray-400 text-lg py-6 pl-10'
                style={{ listStyle: 'disc' }}
              >
                <li>
                  I was a team player and helped in converting mockups to full
                  fledged websites
                </li>
                <li>
                  I saw the creation and completion of websites unsupervised for
                  our clients
                </li>
                <li>
                  I had one on one interactions with clients about their
                  concerns, changes and complaints
                </li>
                <li>
                  I provided assistance to students at our monthly bootcamps
                  when they needed one.
                </li>
                <li>
                  Some of the technologies used at this time were HTML, CSS,
                  JavaScript, PHP, Wordpress, Joomla, React, Nodejs and Java.
                </li>
              </ul>
            </div>
          </div>
          <div className='experience mt-6'>
            <div className='flex flex-col md:justify-between'>
              <h2 className='tracking-wide text-xl text-gray-500 font-semibold'>
                Web Developer Intern | Pure Web Technologies
              </h2>
              <p className='tracking-wide text-lg text-gray-500 font-semibold'>
                June 2017 - December 2017
              </p>
            </div>
            <div>
              <ul
                className='text-gray-400 text-lg py-6 pl-10'
                style={{ listStyle: 'disc' }}
              >
                <li>
                  I was a team player and helped in converting mockups to full
                  fledged websites
                </li>
                <li>
                  I saw the creation and completion of websites unsupervised for
                  our clients
                </li>
                <li>
                  I had one on one interactions with clients about their
                  concerns, changes and complaints
                </li>
                <li>
                  I provided assistance to students at our monthly bootcamps
                  when they needed one.
                </li>
                <li>
                  Some of the technologies used at this time were HTML, CSS,
                  JavaScript, PHP, Wordpress, Joomla, React, Nodejs and Java.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
