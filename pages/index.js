import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <Head>
        <title>Homepage</title>
        <meta property="og:title" content="Homepage | sabbir inc" key="title" />
      </Head>
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" /> */}
        <div>
          <h1 className="text-5xl font-bold">Sabbir Inc.</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}
