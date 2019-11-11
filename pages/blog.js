import React from 'react'
import { withRouter } from 'next/router'
import _range from 'lodash.range'
import Link from 'next/link'
import Post from '../components/blog-index-item'
import pagination from 'pagination'
import blogposts from '../posts/index'
import { siteMeta } from '../blog.config'
import Layout from '../components/layout'
// import '../styles/blog.css'

const Blog = ({ router, page = 1 }) => {
  const paginator = new pagination.SearchPaginator({
    prelink: '/',
    current: page,
    rowsPerPage: siteMeta.postsPerPage,
    totalResult: blogposts.length
  })

  const {
    previous,
    range,
    next,
    fromResult,
    toResult
  } = paginator.getPaginationData()
  const results = _range(fromResult - 1, toResult, 1)

  return (
    <Layout pageTitle='Blog | Francis Udeji'>
      <div className='bg-gray-100 py-10 md:py-20'>
        <div className='container'>
          <h2 className='text-3xl text-gray-800 font-bold px-6'>
            All Blog Posts
          </h2>
          <div className='bg-white rounded-lg pt-1 pb-10 px-6 shadow-lg md:px-10 mt-5'>
            {blogposts
              .filter((_post, index) => results.indexOf(index) > -1)
              .map((post, index) => (
                // <Post
                //   key={index}
                //   title={post.title}
                //   summary={post.summary}
                //   date={post.publishedAt}
                //   path={post.path}
                // />
                <div className='mt-10' key={post.title}>
                  <h3 className='inline-block text-2xl text-gray-800 font-semibold hover:text-blue-500'>
                    <Link href={post.path}>
                      <a>{post.title}</a>
                    </Link>
                  </h3>
                  <p className='text-base text-gray-800 font-normal mt-2'>
                    {post.summary}
                    <Link href={post.path}>
                      <a
                        className='text-blue-500'
                        aria-label={`Read ${post.title}`}
                      >
                        Read More →
                      </a>
                    </Link>
                  </p>
                </div>
              ))}

            <ul>
              {previous && (
                <li>
                  <Link
                    href={`/blog?page=${previous}`}
                    as={`/blog/${previous}`}
                  >
                    <a>Previous</a>
                  </Link>
                </li>
              )}
              {range.map((page, index) => (
                <li key={index}>
                  <Link
                    key={index}
                    href={`/blog?page=${page}`}
                    as={`/blog/${page}`}
                  >
                    <a>{page}</a>
                  </Link>
                </li>
              ))}
              {next && (
                <li>
                  <Link href={`/blog?page=${next}`} as={`/blog/${next}`}>
                    <a>Next</a>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// Blog.getInitialProps = async ({ query }) => {
//   return query ? { page: query.page } : {}
// }

export default withRouter(Blog)
