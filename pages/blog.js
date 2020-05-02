import React from 'react';
import { withRouter } from 'next/router';
import _range from 'lodash.range';
import Link from 'next/link';
import Post from '../components/blog-index-item';
import pagination from 'pagination';
import blogposts from '../posts/index';
import { siteMeta } from '../blog.config';
import Layout from '../components/layout';
// import '../styles/blog.css'

const Blog = ({ router, page = 1 }) => {
  const paginator = new pagination.SearchPaginator({
    prelink: '/',
    current: page,
    rowsPerPage: siteMeta.postsPerPage,
    totalResult: blogposts.length,
  });

  const {
    previous,
    range,
    next,
    fromResult,
    toResult,
  } = paginator.getPaginationData();
  const results = _range(fromResult - 1, toResult, 1);

  return (
    <Layout pageTitle='Blog | Francis Udeji'>
      <div className='py-10 bg-gray-100 md:py-20'>
        <div className='container ox-2 md:px-20'>
          <h2 className='px-6 text-3xl font-bold text-gray-800'>
            All Blog Posts
          </h2>
          <div className='px-6 pt-1 pb-10 mt-5 bg-white rounded-lg shadow-lg md:px-10'>
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
                  <h3 className='inline-block text-2xl font-semibold text-gray-800 hover:text-blue-500'>
                    <Link href={post.path}>
                      <a>{post.title}</a>
                    </Link>
                  </h3>
                  <p className='mt-2 text-base font-normal text-gray-800'>
                    {post.summary}
                  </p>
                  <p className='mt-3 text-base font-normal text-gray-800'>
                    <Link href={post.path}>
                      <a
                        className='mt-3 text-blue-600'
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
  );
};

// Blog.getInitialProps = async ({ query }) => {
//   return query ? { page: query.page } : {}
// }

export default withRouter(Blog);
