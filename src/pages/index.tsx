import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar'; // Importar NavBar
import Image from 'next/image';

const Home: NextPage = () => {
  // Datos de ejemplo para los movimientos
  const movimientos = [
    { fecha: '2024-09-01', descripcion: 'Solicitado microcrédito', monto: '$500' },
    { fecha: '2024-09-05', descripcion: 'Recompensa canjeada', monto: '-$50' },
    { fecha: '2024-09-10', descripcion: 'Pago de interés', monto: '-$30' },
    // Agrega más movimientos según sea necesario
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>The Garden Gates</title>
        <meta
          name="description"
          content="Un portal de sostenibilidad e innovación para gestionar microcréditos y recompensas."
        />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar /> {/* Incluir NavBar en la página principal */}
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a The Garden Gates
        </h1>
        <div className={styles.imageContainer}>
        <Image
          src="/img/economia.jpg"
          alt="Logo"
          layout="fill"
          objectFit="contain" // Para que la imagen se ajuste dentro del contenedor sin recortarse
        />
      </div>


        <p className={styles.description}>
          Un portal de sostenibilidad e innovación que te permite solicitar microcréditos para proyectos sostenibles, gestionar tus intereses, y canjear recompensas exclusivas. Explora nuestras funcionalidades y comienza a contribuir a un futuro más verde y justo.
        </p>

        <div className={styles.grid}>
          <a href="/microCreditos" className={styles.card}>
            <div>
              <h2>Solicitar Microcrédito &rarr;</h2>
              <p>Accede a financiación para tus proyectos sostenibles. Completa el formulario para solicitar un microcrédito y empieza a trabajar en tu proyecto.</p>
            </div>
          </a>

          <a href="/gestionIntereses" className={styles.card}>
            <div>
              <h2>Gestión de Intereses &rarr;</h2>
              <p>Monitorea el impacto de tus proyectos y gestiona tus intereses. Aquí puedes ver un resumen de cómo tus proyectos están contribuyendo a la sostenibilidad.</p>
            </div>
          </a>

          <a href="/invertir" className={styles.card}>
            <div>
              <h2>Recompensas &rarr;</h2>
              <p>Canjea tus puntos acumulados por beneficios exclusivos. Participa en nuestros programas y obtén recompensas por tu compromiso.</p>
            </div>
          </a>
        </div>


        <h2>Mis Movimientos</h2>
        <p className={styles.description}>Consulta el historial de tus movimientos y transacciones recientes. Aquí puedes revisar todas tus actividades en la plataforma.</p>

        <table className={styles.movimientosTable}>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {movimientos.map((movimiento, index) => (
              <tr key={index}>
                <td>{movimiento.fecha}</td>
                <td>{movimiento.descripcion}</td>
                <td>{movimiento.monto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 The Garden Gates. Siguenos en <a href='https://x.com/thegardengatesx'>X @thegardengatesx</a>.</p>
      </footer>
    </div>
  );
};

export default Home;
