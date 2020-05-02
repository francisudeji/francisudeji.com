import { withRouter } from 'next/router'
import BlogPost from '../../components/layouts/blog-post'

export const meta = {
  published: true,
  publishedAt: '2019-05-02',
  title: 'Deploy to Now',
  summary:
    "This is sample summary of each blog post on the website. Nothing too fancy, just for testing...",
  image: '/static/site-feature.png'
}

export default withRouter(({ children, router }) => (
  <BlogPost path={router.pathname} meta={meta}>
    {children}
  </BlogPost>
))

One of the amazing things about this project is that you can easily deploy it to Now.
The time from cloning the repository to deploy and preview your blog online can be of a couple minutes.

Also, you can see exactly how it will look in production using [now dev](https://zeit.co/blog/now-dev)
