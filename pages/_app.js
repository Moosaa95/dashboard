import '../styles/globals.css'
import { AuthenticationProvider } from '../context/AuthenticationContext'


function MyApp({ Component, pageProps }) {

  return (
  <AuthenticationProvider>
    <Component {...pageProps} />
  </AuthenticationProvider>
  )
}

export default MyApp
