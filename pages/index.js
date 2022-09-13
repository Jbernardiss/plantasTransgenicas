import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/layout.module.css'


function HeaderList() {
  return (
    <ul className={styles.headerList}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/">Créditos</Link></li>
      <li><Link href="/">Bibliografia</Link></li>
    </ul>
  )
}

function Header() {

  return (
    <header className={styles.header}>
      <HeaderList></HeaderList>
    </header>
  )
}

export default function Home() {

  return (
    <>
      <Head>
        <title>Plantas Transgênicas - Home</title>
      </Head>

      <Header></Header>
      <main className={styles.main}>
        <h1>Plantas Transgênicas</h1>
        <h4><i>Trabalho por João Vitor Bernardis, Matheus Gambaro Guilherme, Jedson, Samuel e Vonexcius</i></h4>
        <section>
          <h2>Lorem Ipsum</h2>
          <p>Lorem Ipsum amer sirus amet</p>
        </section>
      </main>
    </>
  )
}


