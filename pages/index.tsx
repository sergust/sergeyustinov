import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/header'

const Home: NextPage = () => {
  return (
    <div className={'bg-navy h-screen'}>
      <Header></Header>
    </div>
  )
}

export default Home
