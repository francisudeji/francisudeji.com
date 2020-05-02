import Header from './Header';
// import '../styles/styles.css'
import Footer from './Footer';
import NextHead from './head';

function Layout({ children, pageTitle }) {
  return (
    <>
      <NextHead pageTitle={pageTitle} />
      <div className='flex flex-col h-full' style={{ height: '100vh' }}>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
