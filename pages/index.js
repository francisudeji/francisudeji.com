import Layout from '../components/layout';
import blogposts from '../posts/index';
import Link from 'next/link';

function Index() {
  return (
    <>
      <Layout pageTitle='francisudeji (Francis Udeji)'>
        <div className='py-4 bg-primary md:py-10'>
          <div className='container flex flex-col items-center px-6 md:flex-row'>
            <img
              className='w-40 h-40 border-2 border-gray-800 rounded-full bg-primary md:-mb-20 md:h-56 md:w-56 lg:w-64 lg:h-64'
              src='/static/francisudeji.webp'
              alt='Francis Udeji'
            />

            <h1 className='mt-3 text-2xl font-semibold text-gray-100 md:ml-10 md:mt-0 md:text-3xl lg:text-4xl'>
              Hi, my name is Francis Udeji. I'm a Full-Stack Developer and
              Technical Writer based in Abuja, Nigeria.
            </h1>
          </div>
        </div>

        <div className='py-10 bg-gray-100 md:py-20'>
          <div className='container px-2 md:px-20'>
            <h2 className='px-6 text-3xl font-bold text-gray-800'>
              Blog Posts
            </h2>
            <div className='px-6 pt-1 pb-6 mt-5 bg-white rounded-lg shadow-lg md:px-10'>
              {blogposts.slice(0, 4).map((post) => (
                <div
                  className='pb-3 mt-10 border-b border-gray-200'
                  key={post.title}
                >
                  <h3 className='inline-block text-2xl font-semibold text-gray-800 hover:text-blue-700'>
                    <Link href={post.path}>
                      <a>{post.title}</a>
                    </Link>
                  </h3>
                  <p className='mt-2 text-base font-normal text-gray-800'>
                    {post.summary}
                    <Link href={post.path}>
                      <a
                        className='block mt-3 text-blue-600'
                        aria-label={`Read ${post.title}`}
                      >
                        Read More →
                      </a>
                    </Link>
                  </p>
                </div>
              ))}

              <div className='mt-10 mb-5 text-center'>
                <Link href='/blog'>
                  <a className='px-6 py-3 text-blue-700 uppercase rounded font-base hover:bg-blue-100 focus:bg-blue-100'>
                    More Articles →
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Index;
