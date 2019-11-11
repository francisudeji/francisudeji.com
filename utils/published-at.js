import React from 'react'
import Link from 'next/link'
import { format } from 'date-fns'

function PublishedAt(props) {
  const { link, date } = props
  const [year, month, day] = date.split('-')
  return (
    <>
      <Link href={link}>
        <a
          href={link}
          className='uppercase tracking-tight text-sm text-gray-700'
          {...props}
        >
          <time className=''>
            {format(new Date(year, month, day), 'MMM dd, yyyy')}
          </time>
        </a>
      </Link>
    </>
  )
}

export default PublishedAt
