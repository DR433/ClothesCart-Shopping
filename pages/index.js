import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* The head content of your website just like you write code in html */}
      <Head>
        <title>ClothesCart Shopping</title>
        <meta name="description" content="A shopping website to sell clothes and make is available for online users. Clothes shopping is now in your grasp and just one click away." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </Head>


      {/* The main content of the homepage of your website  */}
      <main className={styles.main}>
        
      </main>
    </>
  )
}
