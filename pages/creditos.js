


import { Header } from './index.js'
import Head from 'next/head'

import styles from "../styles/layout.module.css"
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
              <li>1º DSD</li>
              <li>João Vitor Bernardis</li>
              <li>Matheus Gambaro Guilherme</li>
              <li>Jedson Henrinque Rodrigues Adorno</li>
              <li>Samuel Nicoluchi Dias</li>
              <li>Vinícius Cesar da Silva Ferreira</li>
            </ul>
          </div>
        </main>
      </>
    )
}