import Layout from '../components/layout'
import Link from 'next/link'

function About() {
  return (
    <>
      <Layout pageTitle='About | Francis Udeji'>
        <div className='bg-gray-100 py-10 md:py-20'>
          <div className='container px-6'>
            <h2 className='text-3xl text-gray-800 font-bold'>About Me</h2>
            <div className='mt-5'>
              <section className='mb-4'>
                <h3 className='text-lg text-gray-800 font-semibold uppercase'>
                  Summary
                </h3>
                <p className='mt-3 mb-6'>
                  Hi! my name is Francis Udeji 👋. I'm a full stack JavaScript
                  developer and technical writer based in Abuja, Nigeria. I have
                  about 4 years of experience with programming and about 2 of
                  those proffessional. I'm very passionate about Web Development
                  (Full-Stack) with JavaScript, Mobile, JAMStack, PWAs,
                  accessibility, open-source, public speaking, writing and
                  learning.
                  <br />
                  I'm currently looking to take a role as a full stack or front
                  end or backend developer. I'm open remote postions and willing
                  to relocate.
                </p>{' '}
              </section>
              <section className='mb-4'>
                <h3 className='text-lg text-gray-800 font-semibold uppercase'>
                  Education
                </h3>
                <p className='mt-3 mb-6'>
                  I attended{' '}
                  <a className='font-semibold text-blue-500'>
                    Cross River University of Technology, Calabar Cross River
                    State, Nigeria.
                  </a>{' '}
                  where I graduated with a Bachelor degree in Computer Science.
                  I have a certification as a Mobile Web Specialist from Andela
                  Learning Community, powered by Udacity.
                </p>
              </section>
              <section className='mb-4'>
                <h3 className='text-lg text-gray-800 font-semibold uppercase'>
                  Experience
                </h3>
                <p className='mt-3 mb-6'>
                  I started writing code proffessionally as early as 2017,
                  during my 6-month internship at{' '}
                  <a href='https://pureweb.com.ng' className='text-blue-500'>
                    Pure Web Technologies
                  </a>
                  . I've also written code for the department of Computer
                  Science at my alma mata. Most of which were educational
                  departmental software.
                  <br />
                  Last year I got into freelancing, handling projects for
                  students and spending a considerable amount of time on side
                  projects as well, some of which are listed in the{' '}
                  <Link href='/works'>
                    <a className='text-blue-500'>works section</a>
                  </Link>{' '}
                  of the website.
                </p>
              </section>
              <section className='mb-4'>
                <h3 className='text-lg text-gray-800 font-semibold uppercase'>
                  Skills
                </h3>
                <p className='mt-3 mb-6'>
                  I'm a proficient web developer with good communication skills,
                  empathy, team spirit and can work under pressure with amazing
                  performance. Here are some of the technical skills I beleive I
                  possess.
                </p>
                <ul>
                  <li className='uppercase mt-3 mb-2 text-base font-semibold'>
                    Front end
                  </li>
                  <li className='pl-2'>HMTL5</li>
                  <li className='pl-2'>
                    CSS3 (including Bootstrap and TailwindCSS)
                  </li>
                  <li className='pl-2'>JavaScript(ES6+, jQuery)</li>
                  <li className='pl-2'>
                    React (including SSR & static site with Next.js)
                  </li>
                  <li className='pl-2'>
                    Testing with Jest and Mocha(currently learning)
                  </li>
                  <li className='uppercase mt-3 mb-2 text-base font-semibold'>
                    Back end
                  </li>
                  <li className='pl-2'>Node.js</li>
                  <li className='pl-2'>GraphQL</li>
                  <li className='pl-2'>REST APIs</li>
                  <li className='pl-2'>MongoDB</li>
                  <li className='pl-2'>Express</li>
                  <li className='pl-2'>MySQL</li>
                  <li className='pl-2'>Firebase</li>
                  <li className='uppercase mt-3 mb-2 text-base font-semibold'>
                    Build Tools
                  </li>
                  <li className='pl-2'>Babel</li>
                  <li className='pl-2'>Webpack</li>
                  <li className='pl-2'>Parcel Bundler</li>
                  <li className='pl-2'>ESLint</li>
                  <li className='pl-2'>Gulp</li>
                  <li className='pl-2'>Prettier)</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
