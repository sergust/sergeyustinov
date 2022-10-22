import type { NextPage } from 'next'
import Header from '../components/header/header'
import Summary from '../components/summary/summary'
import About from '../components/about/about'

const Home: NextPage = () => {
  return (
    <main className="bg-navy h-full px-10">
      <Header />
      <Summary />
      <About />
    </main>
  )
}

export default Home
