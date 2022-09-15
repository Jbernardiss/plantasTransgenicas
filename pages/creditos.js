
import { Header } from './index.js'
import Head from 'next/head'

import styles from "../styles/main.layout.module.css"
import utils from "../styles/utils.module.css"
import creditos from "../styles/creditos.module.css"


export default function Creditos() {

    return (
      <>
        <Head>
          <title>Plantas Trangênicas - Créditos</title>
        </Head>


        <Header></Header>
        <main className={creditos.main}>
          <h1 className={utils.titleFont}>Créditos</h1>
          <div className={creditos.listSection}>
            <ul>
              <li>João Vitor Bernardis - 1º DSD</li>
              <li>Matheus Gambaro Guilherme - 1º DSD</li>
              <li>Jedson Henrinque Rodrigues Adorno - 1º DSD</li>
              <li>Samuel Nicoluchi Dias - 1º DSD</li>
              <li>Vinícius Cesar da Silva Ferreira - 1º DSD</li>
            </ul>
          </div>
        </main>
      </>
    )
}