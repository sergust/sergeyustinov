import type { NextPage } from 'next'
import Header from '../components/header/header'
import About from '../components/about/about'

const Home: NextPage = () => {
  return (
    <main className="bg-navy h-screen px-10">
      <Header />
      <About />
    </main>
  )
}

export default Home
