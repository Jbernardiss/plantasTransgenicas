import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import Image from 'next/image'


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
        <Image
          src="/images/vinha-l.png"
          height={900}
          width={860}
        ></Image>
        <h1 className={styles.mainTitle}>Plantas Transgênicas</h1>
        <h4><i>Trabalho por João Vitor Bernardis, Matheus Gambaro Guilherme, Jedson, Samuel e Vonexcius</i></h4>
        <section className={styles.textSection}>
          <h2>O que são “Plantas Trangênicas”?</h2>
          <p>Plantas transgênicas são aquelas plantas que recebem um gene de outra espécie de planta, 
            tendo seu genoma alterado e sendo modificada para uma melhora de como a planta age. 
             genes que foram transferidos para outra planta, são genes de plantas que permitem o aprimoramento daquela que está 
             recebendo (mudam as características delas).
             “O desenvolvimento de plantas transgênicas se faz necessário, principalmente, quando características de 
             interesse (tolerância à seca, resistência a doenças, insetos e outras) não estão disponíveis no banco de 
             germoplasma da  cultura“(croplife brasil)
             Para desenvolverem as plantas transgênicas, foram necessários anos e anos de pesquisa e experimentos para que a 
             transferência de um organismo para o outro ocorresse de forma eficaz e segura. 
             Isso ocorre através da engenharia genética.</p>
        </section>
      </main>
    </>
  )
}


