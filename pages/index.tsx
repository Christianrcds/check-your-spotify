import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaSpotify } from 'react-icons/fa'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Check your Spotify</title>
      </Head>

      <main className="bg-black flex items-center justify-center h-screen">
        <button className="flex justify-content hover:text-green-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-500">
          <Link href="/YourSpotify">
            <a className="text-5xl font-bold flex content-align">
              Get Started
              <FaSpotify className="ml-5" />
            </a>
          </Link>
        </button>
      </main>
    </div>
  )
}

export default Home
