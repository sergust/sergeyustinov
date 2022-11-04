import type { NextPage } from 'next'
import Header from '../components/header/header'
import Summary from '../components/summary/summary'
import About from '../components/about/about'
import Experience from '../components/experience/experience'

const Home: NextPage = () => {
  return (
    <main className="bg-navy h-full px-10">
      <Header />
      <Summary />
      <About />
      <Experience />
    </main>
  )
}

export default Home
