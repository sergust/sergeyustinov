import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '../context/AppContext'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
const { library } = require('@fortawesome/fontawesome-svg-core')

library.add(faGithub, faInstagram, faTwitter, faLinkedin)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
