import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import NavBar from '../components/NavBar'; // Importar NavBar

const Configuracion: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Configuración</title>
        <meta name="description" content="Ajusta la configuración de tu cuenta en The Garden Gates." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NavBar /> 

      <main className={styles.main}>
        <ConnectButton />
        <h1 className={styles.title}>Configuración</h1>
        <p className={styles.description}>
          Personaliza tu cuenta y ajusta tus preferencias.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Perfil &rarr;</h2>
            <p>Actualiza tu información personal y preferencias de cuenta.</p>
          </div>
          <div className={styles.card}>
            <h2>Notificaciones &rarr;</h2>
            <p>Configura tus preferencias de notificación y alertas.</p>
          </div>
          {/* Agrega más configuraciones según sea necesario */}
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 The Garden Gates. Siguenos en <a href='https://x.com/thegardengatesx'>X @thegardengatesx</a>.</p>
      </footer>
    </div>
  );
};

export default Configuracion;
