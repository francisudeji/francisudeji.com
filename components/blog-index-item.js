import Link from 'next/link';
import PublishedAt from '../utils/published-at';

const Post = ({ title, summary, date, path }) => (
  <article className='mb-10'>
    <header>
      <h1 className='mb-2 text-2xl font-bold tracking-wide text-gray-400'>
        <Link href={path}>
          <a>{title}</a>
        </Link>
      </h1>

      <PublishedAt link={path} date={date} />
    </header>
    <div className='mt-2 text-lg font-normal text-gray-300 post-summary'>
      {summary}...{' '}
    </div>
    <div className='mt-2'>
      <Link href={path}>
        <a
          href={path}
          className='text-lg font-normal text-indigo-600 '
          aria-label={`read ${title}`}
        >
          Read →
        </a>
      </Link>
    </div>
  </article>
);

export default Post;
