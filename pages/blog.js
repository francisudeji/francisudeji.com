import React from 'react'
import { withRouter } from 'next/router'
import _range from 'lodash.range'
import Link from 'next/link'
import Post from '../components/blog-index-item'
import pagination from 'pagination'
import blogposts from '../posts/index'
import { siteMeta } from '../blog.config'
import Layout from '../components/layout'
import '../styles/blog.css'

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
      <div className='blog-page bg-secondary pt-6' style={{ height: '100%' }}>
        <div className='container p-3'>
          <div className='blog-overlay bg-primary p-6 rounded'>
            {blogposts
              .filter((_post, index) => results.indexOf(index) > -1)
              .map((post, index) => (
                <Post
                  key={index}
                  title={post.title}
                  summary={post.summary}
                  date={post.publishedAt}
                  path={post.path}
                />
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
