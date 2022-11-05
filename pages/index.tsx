import type { NextPage } from 'next'
import Header from '../components/header/header'
import Summary from '../components/summary/summary'
import About from '../components/about/about'
import Experience from '../components/experience/experience'
// import Portfolio from '../components/portfolio/portfolio'
import Contacts from '../components/contacts/contacts'

const Home: NextPage = () => {
  return (
    <main className="bg-navy h-full px-10 pb-16">
      <Header />
      <Summary />
      <About />
      <Experience />
      {/*<Portfolio />*/}
      <Contacts />
    </main>
  )
}

export default Home
