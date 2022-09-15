
import { Header } from './index.js'
import Head from 'next/head'
import Link from 'next/link'

import styles from "../styles/main.layout.module.css"
import utils from "../styles/utils.module.css"
import creditos from "../styles/creditos.module.css"


export default function Bib() {
  return (
    <>
      <Head>
        <title>Plantas Transgênicas - Bibliografia</title>
      </Head>

      <Header></Header>
      
      <main className={creditos.main}>
      
        <h1 className={utils.titleFont}>
          Bibliografia
        </h1>
        
        <div className={creditos.listSection}>
          <ul>
            <li>
              <h3>O que são “Plantas Trangênicas”?</h3>
            </li>
            <li>
              <Link href="https://croplifebrasil.org/noticias/plantas-transgenicas-uma-introducao-sobre-essa-importante-tecnologia/#:~:text=Plantas%20transg%C3%AAnicas%20s%C3%A3o%20aquelas%20que,o%20melhor%20desempenho%20das%20plantas">
                croplifebrasil.org
              </Link>
            </li>
            <li>
              <Link href="http://www.sementesfiscalizadas.com.br/artigos/10/plantas-transgenicas/">
                sementesfiscalizadas.com.br
              </Link>
            </li>

            <li>
              <h3>Histórias das Plantas Transgênicas</h3>
            </li>
            <li>
              <Link href="https://croplifebrasil.org/noticias/plantas-transgenicas-uma-introducao-sobre-essa-importante-tecnologia/#:~:text=A%20primeira%20gera%C3%A7%C3%A3o%20de%20plantas,auxiliava%20no%20controle%20de%20pragas">
                croplifebrasil.org
              </Link>
            </li>
            <li>
              <Link href="https://maissoja.com.br/a-trajetoria-dos-organismos-transgenicos/">
                maissoja.com.br
              </Link>
            </li>

            <li>
              <h3>Como são modificadas as plantas</h3>
            </li>
            <li>
              <Link href="https://croplifebrasil.org/perguntas-frequentes/quais-tecnicas-podem-ser-usadas-para-se-obter-um-transgenico/#:~:text=Existem%20várias%20técnicas%20para%20se,expressa%20a%20característica%20de%20interesse">
                croplifebrasil.org
              </Link>
            </li>
            <li>
              <Link href="https://www.embrapa.br/tema-transgenicos/sobre-o-tema">
                embrapa.br
              </Link>
            </li>

            <li>
              <h3>Benefícios e Malefícios</h3>
            </li>
            <li>
              <Link href="https://getulioruas.jusbrasil.com.br/artigos/461550658/os-beneficios-e-maleficios-dos-alimentos-transgenicos#:~:text=Entre%20os%20aspectos%20positivos%20dos,insetos)%3B%20Diminui%C3%A7%C3%A3o%20de%20agrot%C3%B3xicos">
                getulioruas.jusbrasil.com.br
              </Link>
            </li>
            <li>
              <Link href="https://www.embrapa.br/tema-transgenicos/sobre-o-tema">
                embrapa.br
              </Link>
            </li>
            <li>
              <Link href="https://www.pixforce.com.br/post/transg%C3%AAnicos-na-agricultura-o-que-voc%C3%AA-precisa-saber">
                pixforce.com.br
              </Link>
            </li>

            <li>
              <h3>O porquê da polêmica</h3>
            </li>
            <li>
              <Link href="https://www.uninter.com/noticias/entenda-a-polemica-dos-alimentos-transgenicos#:~:text=A%20m%C3%A1%20fama%20dos%20transg%C3%AAnicos&text=O%20objetivo%20era%20que%20os,nas%20lavouras%2C%20causando%20desiquil%C3%ADbrio%20ambiental">
                uninter.com
              </Link>
            </li>
            <li>
              <Link href="https://mundoeducacao.uol.com.br/saude-bem-estar/alimentos-transgenicos.htm">
                mundoeducacao.uol.com.br
              </Link>
            </li>

          </ul>
        </div>
      </main>

    </>
  )
}