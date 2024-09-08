import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import NavBar from '../components/NavBar'; // Importar NavBar

const MisCreditos: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mis Créditos</title>
        <meta name="description" content="Gestiona y consulta tus créditos en The Garden Gates." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar /> 

      <main className={styles.main}>
        <div className={styles.header}>
          <ConnectButton />
          <h1 className={styles.title}>Mis Créditos</h1>
          <p className={styles.description}>
            Consulta y gestiona los créditos disponibles en tu cuenta.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Crédito 1</h2>
            <p className={styles.cardDetails}>Detalles del crédito, incluyendo monto, fecha de vencimiento, etc.</p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Crédito 2</h2>
            <p className={styles.cardDetails}>Detalles del crédito, incluyendo monto, fecha de vencimiento, etc.</p>
          </div>
          {/* Agrega más créditos según sea necesario */}
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 The Garden Gates. Siguenos en <a href='https://x.com/thegardengatesx'>X @thegardengatesx</a>.</p>
      </footer>
    </div>
  );
};

export default MisCreditos;
