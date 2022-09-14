import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import utils from '../styles/utils.module.css'



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
        <h1 className={utils.titleFont}>Plantas Transgênicas</h1>
        <h4><i>Trabalho por João Vitor Bernardis, Matheus Gambaro Guilherme, Jedson, Samuel e Vonexcius</i></h4>

        <section className={styles.textSection}>
          <h2 className={utils.titleFont}>O que são “Plantas Trangênicas”?</h2>
          <div>
            <div className={styles.textParagraphs}>
              <p>
                Plantas transgênicas são aquelas plantas que recebem um gene de outra espécie de planta, 
                tendo seu genoma alterado e sendo modificada para uma melhora de como a planta age. 
                Genes que foram transferidos para outra planta, são genes que permitem o aprimoramento daquela que está 
                recebendo (mudam as características delas).
                “O desenvolvimento de plantas transgênicas se faz necessário, principalmente, quando características de 
                interesse (tolerância à seca, resistência a doenças, insetos e outras) não estão disponíveis no banco de 
                germoplasma da  cultura“(croplife brasil)
                Para desenvolverem as plantas transgênicas, foram necessários anos e anos de pesquisa e experimentos para que a 
                transferência de um organismo para o outro ocorresse de forma eficaz e segura. 
                Isso ocorre através da engenharia genética.
              </p>
            </div>
            <div className={styles.textImage}>
              <Image
                style={"align-self: flex-end"}
                layout='fixed'
                src="/images/plantasTransgenicas.jpeg"
                height={250}
                width={375}
                alt="Plant being injected with a syringe"
              />
            </div>
          </div>
        </section>

        <section className={styles.textSection}>
          <h2 className={utils.titleFont}>Histórias das Plantas Transgênicas</h2>
          <div>
            <div className={styles.textParagraphs}>
              <p>
                A história das plantas transgênicas começou em 1972 quando o professor da Stanford University, Paul berg fez a primeira molécula de DNA recombinante e criou uma um vírus híbrido de um vírus que infecta símios(SV40) e um outro vírus(lambda vírus)
                Em 1974 criou o primeiro animal transgênico ao injetar um gene de um vírus(SV40) em embriões de camundongos. Assim foi observado que os o genoma dos camundongos continha o genoma viral mas este não era transmitido para progênie.
              </p>
              <p>
                Assim, no final da década de 70 iniciou-se uma corrida para a geração das primeiras plantas transgênicas. 
                Atingiu-se o objetivo em 1983 quando foi produzida uma espécie de planta de fumo que continha um gene que auxiliava no controle de pragas.
                Mas a cultura que definitivamente inseriu as plantas transgênicas na agricultura foi a soja transgênica aprovada pelo governo dos estados unidos em 1995
              </p>
              <p>
                As plantas transgênicas foram introduzidas no Brasil em 1998 quando a Comissão Técnica Nacional de Biossegurança (CTNBio) aprovou o plantio da primeira soja tolerante a um herbicida. 
                Atualmente, muitas culturas já possuem versões transgênicas no mundo. Abobrinha, ameixa, algodão, berinjela, beterraba, cana-de-açúcar, canola, feijão, mamão, milho e soja são exemplos. No entanto, soja, milho, algodão e canola compõem 99% de toda a área plantada com transgênicos no mundo.
                No Brasil, apenas as plantas de soja, milho, algodão e cana-de-açúcar são cultivadas.
              </p>
            </div>
            <div className={styles.textImage}>
              <Image
                style={"align-self: flex-end"}
                layout='fixed'
                src="/images/paulBerg.jpeg"
                height={375}
                width={286}
                alt="Plant being injected with a syringe"
              /> 
            </div>
          </div>
        </section>


      </main>
    </>
  )
}


