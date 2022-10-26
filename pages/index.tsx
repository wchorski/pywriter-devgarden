import imageLoader from 'libs/imageLoader'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { NavSidebar } from "componenets/NavSidebar";

const Home: NextPage = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to my Dev Garden
        </h1>

        <NavSidebar />

      </main>
    </div>
  )
}

export default Home
