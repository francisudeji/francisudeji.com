import { useEffect } from 'react'
import Layout from '../components/layout'
import blogposts from '../posts/index'
import Link from 'next/link'
import axios from 'axios'

function Index() {
  return (
    <>
      <Layout pageTitle='francisudeji (Francis Udeji)'>
        <div className='bg-primary py-4 md:py-10'>
          <div className='container px-6 flex flex-col md:flex-row items-center'>
            <img
              className='w-40 h-40 rounded-full border-2 border-gray-800 bg-primary md:-mb-20 md:h-56 md:w-56 lg:w-64 lg:h-64'
              src='/static/francisudeji.webp'
              alt='Francis Udeji'
            />

            <h1 className='mt-3 text-white text-2xl font-semibold md:ml-10 md:mt-0 md:text-3xl lg:text-4xl'>
              Hi, my name is Francis T. Udeji. I'm a Full-Stack JavaScript
              Developer and Technical Writer based in Abuja, Nigeria.
            </h1>
          </div>
        </div>

        <div className='bg-gray-100 py-10 md:py-20'>
          <div className='container'>
            <h2 className='text-3xl text-gray-800 font-bold px-6'>
              Blog Posts
            </h2>
            <div className='bg-white rounded-lg pt-1 pb-6 px-6 shadow-lg md:px-10 mt-5'>
              {blogposts.slice(0, 4).map(post => (
                <div
                  className='mt-10 border-b border-gray-200 pb-3'
                  key={post.title}
                >
                  <h3 className='inline-block text-2xl text-gray-800 font-semibold hover:text-blue-500'>
                    <Link href={post.path}>
                      <a>{post.title}</a>
                    </Link>
                  </h3>
                  <p className='text-base text-gray-800 font-normal mt-2'>
                    {post.summary}
                    <Link href={post.path}>
                      <a
                        className='block mt-3 text-blue-500'
                        aria-label={`Read ${post.title}`}
                      >
                        Read More →
                      </a>
                    </Link>
                  </p>
                </div>
              ))}

              <div className='text-center mt-10 mb-5'>
                <Link href='/blog'>
                  <a className='text-blue-500 uppercase font-base px-6 py-3 rounded hover:bg-blue-100 focus:bg-blue-100'>
                    More Articles →
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Index
