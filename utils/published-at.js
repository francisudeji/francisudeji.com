import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

function PublishedAt(props) {
  const { link, date } = props;
  const [year, month, day] = date.split('-');
  return (
    <>
      <Link href={link}>
        <a
          href={link}
          className='text-sm tracking-tight text-gray-700'
          {...props}
        >
          <time className=''>
            {format(new Date(year, month, day), 'MMMM d, yyyy')}
          </time>
        </a>
      </Link>
    </>
  );
}

export default PublishedAt;
