import '../styles/index.css'
import Layout from '../src/components/layout'
import Works from '../src/components/Works'
import About from '../src/components/About'
import axios from 'axios'

function Index({ posts }) {
  return (
    <Layout>
      <About posts={posts} />
      <Works />
    </Layout>
  )
}

Index.getInitialProps = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.data

  return {
    posts
  }
}

export default Index
