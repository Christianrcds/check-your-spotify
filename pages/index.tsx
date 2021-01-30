import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Button from './Components/Button'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Check your Spotify</title>
      </Head>

      <main>
        <Link href="/YourSpotify">
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      </main>
    </div>
  )
}

export default Home
