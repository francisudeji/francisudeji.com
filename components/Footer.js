import Link from 'next/link'
import { FaTwitter, FaGithub, FaCodepen, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-primary' style={{ justifySelf: 'flex-end' }}>
      <div className='container text-center flex flex-col items-center'>
        <ul className='flex'>
          <li className='mx-4'>
            <a
              className='text-gray-100 p-3 hover:text-blue-500'
              href='https://twitter.com/francisudeji'
            >
              <FaTwitter
                className='text-2xl'
                aria-label='Visit francis udeji on twitter'
              />
            </a>
          </li>
          <li className='mx-4'>
            <a
              className='text-gray-100 p-3 hover:text-blue-500'
              href='https://github.com/francisudeji'
            >
              <FaGithub
                className='text-2xl'
                aria-label='Visit francis udeji on github'
              />
            </a>
          </li>
          <li className='mx-4'>
            <a
              className='text-gray-100 p-3 hover:text-blue-500'
              href='https://codepen.io/francisudeji'
            >
              <FaCodepen
                className='text-2xl'
                aria-label='Visit francis udeji on codepen'
              />
            </a>
          </li>
          <li className='mx-4'>
            <a
              className='text-gray-100 p-3 hover:text-blue-500'
              href='mailto:francis.udejiofficial@gmail.com'
            >
              <FaEnvelope
                className='text-2xl'
                aria-label='Send francis udeji a message'
              />
            </a>
          </li>
        </ul>

        <div className='pb-5'>
          <Link href='/'>
            <a className='text-base text-gray-500 hover:text-gray-100'>
              &copy; Copyright {new Date().getFullYear()}. francisudeji.com.
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
