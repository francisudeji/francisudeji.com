import React from 'react'
import Link from 'next/link'
import { format } from 'date-fns'

function PublishedAt(props) {
  const { link, date } = props
  const [year, month, day] = date.split('-')
  return (
    <>
      <Link href={link}>
        <a href={link} className='text-lg text-gray-500' {...props}>
          <time className=''>
            {format(new Date(year, month, day), 'MMMM dd, yyyy')}
          </time>
        </a>
      </Link>
    </>
  )
}

export default PublishedAt
