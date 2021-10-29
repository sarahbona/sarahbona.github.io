import '../styles/globals.css'

import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <p>
          I’m Sarah Bonavia.
          I’m visual and multifunctional.
        </p>
        <nav>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/work">Work</Link></li>
          <li><Link href="/cv">CV</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </nav>
      </header>
      <Component {...pageProps} />
      <footer>
        © 2021 Sarah Bonavia
      </footer>
    </>
  )
}

export default MyApp
