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
        <button className="flex justify-content hover:text-green-700 text-white font-bold py-2 px-4 rounded-full">
          <Link href="/YourSpotify">
            <a>Get Started </a>
          </Link>
          <FaSpotify className="ml-2 mt-1" />
        </button>
      </main>
    </div>
  )
}

export default Home
