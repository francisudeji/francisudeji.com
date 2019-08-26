import Link from 'next/link'
import PublishedAt from '../utils/published-at'

const Post = ({ title, summary, date, path }) => (
  <article className='mb-10'>
    <header>
      <h1 className='text-2xl tracking-wide text-gray-400 font-bold mb-2'>
        <Link href={path}>
          <a>{title}</a>
        </Link>
      </h1>

      <PublishedAt link={path} date={date} />
    </header>
    <div className='post-summary text-gray-300 text-lg font-normal mt-2'>
      {summary}...{' '}
    </div>
    <div className='mt-2'>
      <Link href={path}>
        <a
          href={path}
          className=' text-lg font-normal text-indigo-600'
          aria-label={`read ${title}`}
        >
          Read →
        </a>
      </Link>
    </div>
  </article>
)

export default Post
