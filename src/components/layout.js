import '../../styles/layout.css'

function Layout({ children }) {
  return (
    <>
      <header className='w-100 bg-blue-500 p-6'>
        <div className='container mx-auto'>
          <h1>Header</h1>
        </div>
      </header>
      <main>{children}</main>
      <footer className='w-100 bg-blue-500 p-6'>
        <div className='container mx-auto'>
          <h1>footer</h1>
        </div>
      </footer>
    </>
  )
}

export default Layout
