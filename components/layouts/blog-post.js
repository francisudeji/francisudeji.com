import Link from 'next/link'
import { siteMeta } from '../../blog.config'
import Layout from '../layout'
import SyntaxHighlight from '../syntax-highlight'
import PublishedAt from '../../utils/published-at'
import blogposts from '../../posts/index'
import NextPrevPost from '../next-prev-post'

function BlogPost({ path, meta, children }) {
  const currentPostIndex = blogposts
    .map(({ title }) => title)
    .indexOf(meta.title)
  const previousPost = blogposts[currentPostIndex + 1]
  const nextPost = blogposts[currentPostIndex - 1]

  return (
    <Layout pageTitle={meta.title}>
      <SyntaxHighlight />
      <div className='blog-post bg-gray-100' style={{ height: '100%' }}>
        <div className='container p-6 pt-6'>
          <article>
            <header>
              <div className=''>
                <PublishedAt date={meta.publishedAt} link={path} />
              </div>
              <h1 className='text-3xl tracking-wide text-gray-800 font-bold mb-3'>
                {meta.title}
              </h1>
            </header>

            <div className='text-base text-gray-700'>{children}</div>
            <footer>
              {(previousPost || nextPost) && (
                <div className='post-pagination'>
                  {previousPost && (
                    <NextPrevPost
                      title={previousPost.title}
                      path={previousPost.path}
                      position='previous'
                    />
                  )}
                  {nextPost && (
                    <NextPrevPost
                      title={nextPost.title}
                      path={nextPost.path}
                      position='next'
                    />
                  )}
                </div>
              )}
            </footer>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost
