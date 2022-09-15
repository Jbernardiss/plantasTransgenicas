import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/main.layout.module.css'
import utils from '../styles/utils.module.css'



function HeaderList() {
  return (
    <ul className={styles.headerList}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/creditos">Créditos</Link></li>
      <li><Link href="/bibliografia">Bibliografia</Link></li>
    </ul>
  )
}

function Header() {

  return (
    <header className={styles.header} id="header">
      <HeaderList></HeaderList>
    </header>
  )
}


function Section1() {

  return (
    <section className={styles.textSection}>
      <h2 className={utils.titleFont}>O que são Plantas Trangênicas?</h2>
      <div>
        <div className={styles.textParagraphs}>
          <p>
            Plantas transgênicas são aquelas plantas que recebem um gene de outra espécie de planta, 
            tendo seu genoma alterado e sendo modificada para uma melhora de como a planta age. 
          </p>
          <p>
            Genes que foram transferidos para outra planta, são genes que permitem o aprimoramento daquela que está 
            recebendo (mudam as características delas).
          </p>
          <p>
            “O desenvolvimento de plantas transgênicas se faz necessário, principalmente, quando características de 
            interesse (tolerância à seca, resistência a doenças, insetos e outras) não estão disponíveis no banco de 
            germoplasma da  cultura“(croplife brasil)
          </p>
          <p>
            Para desenvolverem as plantas transgênicas, foram necessários anos e anos de pesquisa e experimentos para que a 
            transferência de um organismo para o outro ocorresse de forma eficaz e segura. 
            Isso ocorre através da engenharia genética.
          </p>
        </div>
        <div className={styles.textImage}>
          <Image
            //layout='fixed'
            src="/images/milhoTransgenico.jpg"
            height={271}
            width={375}
            alt="Plant being injected with a syringe"
          />
        </div>
      </div>
    </section>
  )
} 

function Section2() {
  return (
    <section className={styles.textSection}>
      <h2 className={utils.titleFont}>Histórias das Plantas Transgênicas</h2>
      <div>
        <div className={styles.textParagraphs}>
          <p>
            A história das plantas transgênicas começou em 1972 quando o professor da Stanford University, Paul berg, fez a primeira molécula de DNA recombinante e criou uma um vírus híbrido de um vírus que infecta símios(SV40) e um outro vírus(lambda vírus)
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
            src="/images/paulBerg.jpeg"
            height={375}
            width={286}
            alt="Plant being injected with a syringe"
          />
          <span>Paul Berg</span>
        </div>
      </div>
    </section>
  )
}

function Section3() {

  return (
    <section className={styles.textSection}>
      <h2 className={utils.titleFont}>Como são modificadas as plantas</h2>
      <div>
        <div className={styles.textParagraphs}>
          <p>
            As plantas transgênicas são modificadas de maneiras que têm se tornado comuns nos dias atuais, 
            umas delas sendo a mudança genética feita em laboratórios, na qual um microrganismo é isolado de um determinado organismo, 
            sendo inserido dentro da planta, adentrando ao genoma da planta fazendo com que o DNA mude, ajudando a planta a se prevenir 
            de doenças nutritivas.
          </p>
          <p>
            Outra maneira bem popular de se modificar um transgênico é com a utilização da Agrobacterium tumefaciens que seria uma bactéria 
            que é atraída pelos compostos das plantas, cujos ativam certos estímulos da bactéria fazendo com que uma parte de seu DNA entre 
            em contato com o genoma da planta, ocorrendo a “evolução” naturalmente pela natureza.
          </p>
        </div>
        <div className={styles.textImage}>
          <Image
            src="/images/makingOfPlantasTransgenicas.png"
            height={315}
            width={375}
            alt="Diagrama explicando a criação de plantas transgenicas"
          />
          <span>Diagrama da produção de transgênicos</span>
        </div>
      </div>
    </section>
  )
}

function Section4() {
  return(
    <section className={styles.textSection}>
      <h2 className={utils.titleFont}>Benefícios e Malefícios</h2>


      <div>
        <div className={styles.listParagraphs}>
          <div>
            <ul>
              <li className={utils.listTitle}>Benefícios</li>
              <li>Aumento da produção de alimentos</li>
              <li>Aumento do conteúdo nutricional</li>
              <li>
                Maior resistência, durabilidade e tempo na estocagem e armazenamento; Maior resistência às pragas
              </li>
              <li>Diminuição de agrotóxicos</li>
              <li>Diminuição do combustível de tratores utilizados para aplicar agrodefensivos</li>
              <li>Redução de custos</li>
              <li>Entre outros</li>
            </ul>
          </div>
          
          <div>
            <ul>
              <li className={utils.listTitle}>Malefícios</li>
              <li>
                Novos tipos de alergia devido a variedade de proteínas criadas por manipulação genética,também criando outros efeitos inesperados
              </li>
              <li>
                Diminuição da biodiversidade pela perda de controle na manipulação genética
              </li>
              <li>
                Dependência do agricultor com  as empresas transnacionais do setor,o agricultor tem de pagar royalties para a empresa, já que as plantas 
                são protegidas por patentes
              </li>
              <li>
                Criação de superpragas e super ervas, algumas ervas-daninhas e pragas desenvolvessem resistência
              </li>
              <li>
                Possível surgimento de tumores, uma pesquisa feita com dois grupos de ratos(um se alimentando de milho comum e o outro de milho 
                transgênico)mostrou que os que se alimentaram de milho transgênico apareceram com grandes tumores
              </li>
              <li>
                Possível transferência de genes resistentes a antibióticos para o ser humano
              </li>
              <li>
                Plantas agressivas podem exterminar insetos
              </li>
            </ul>
          </div>     
        </div>
      </div>
    </section>
  )
}

function Section5() {

  return(
    <section className={styles.noImgTextSection}>
      <h2 className={utils.titleFont}>O porquê da polêmica</h2>
      <div>
        <div className={styles.noImgTextParagraphs}>
          <p>
            A polêmica sobre o tema tem muito haver com um acontecido que ocorreu no início dos anos 2000, uma multinacional alemã 
            &quot;<Link href="https://en.wikipedia.org/wiki/Monsanto">Monsanto</Link>&quot; que lançou pela primeira vez algodão e soja resistentes a herbicida, porém isso não trouxe nenhum benefício nutricional aos clientes 
            consumidores, apenas fazia a empresa lucrar o dobro do normal, trazendo uma má fama para os trangênicos
          </p>
          <p>
            Além de que consequentemente com as plantas transgênicas resistentes a agrotóxicos, podemos entender que é possível colocar mais 
            agrotóxicos nas plantas, ameaçando a nossa saúde e a tão famosa alimentação saudável
          </p>
          <p>
            Porém temos o outro lado também, quem defende os transgênicos, dizem que eles  ajudam a aumentar a produtividade, fazendo com que 
            não seja tão necessário desmatar tantas áreas
          </p>
          <p>
            Porém nada é concreto ainda, mesmo com a ONU e outras organizações falando que as plantas transgênicas não trazem riscos
          </p>
        </div>
      </div>
    </section>
  )

  
}


function Home() {

  return (
    <>
      <Head>
        <title>Plantas Transgênicas - Home</title>
      </Head>


      <Header></Header>

      <main className={styles.main}>

        <h1 className={utils.titleFont}>
          Plantas Transgênicas
        </h1>
        <h4><i>Trabalho por João , Matheus , Jedson, Samuel e Vinícius</i></h4>

        <Section1></Section1>

        <Section2></Section2>
        
        <Section3></Section3>
        
        <Section4></Section4>

        <Section5></Section5>

      </main>

      <footer className={styles.footer}>
        <a href="#header">Retornar ao topo</a>
      </footer>
    </>
  )
}

export default Home
export { Header }
