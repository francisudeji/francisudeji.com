import Header from './Header'
import '../styles/layout.css'
import Footer from './Footer'
import NextHead from './head'

function Layout({ children, pageTitle }) {
  return (
    <>
      <NextHead pageTitle={pageTitle} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
