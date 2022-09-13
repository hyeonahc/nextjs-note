import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>/pages/index.tsx</h1>
      <ul>
        <li>
          <a href='/sub'>/pages/sub/index.tsx</a>
        </li>
        <li>
          <a href='/sub/about'>/pages/sub/about.tsx</a>
        </li>
        <li>
          <a href='/sub/1'>/pages/sub/[1].tsx</a>
        </li>
        <li>
          <a href='/sub/2'>/pages/sub/[2].tsx</a>
        </li>
      </ul>
    </div>
  )
}

export default Home
