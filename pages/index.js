import Layout from '../components/layout'
import Projects from '../components/Projects'
import About from '../components/About'
import Landing from '../components/Landing'
import Contact from '../components/Contact'

function Index() {
  return (
    <>
      <Layout pageTitle='francisudeji (Francis Udeji)'>
        <Landing />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </>
  )
}

export default Index
