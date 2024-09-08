import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import NavBar from '../components/NavBar';

const GestionIntereses: NextPage = () => {
  const [principal, setPrincipal] = useState<number>(1000);
  const [rate, setRate] = useState<number>(16); // Tasa de interés predeterminada
  const [years, setYears] = useState<number>(1);
  const [interest, setInterest] = useState<number>(0);

  const calculateInterest = (principal: number, rate: number, years: number): number => {
    return principal * (rate / 100) * years;
  };

  const handleCalculate = () => {
    const calculatedInterest = calculateInterest(principal, rate, years);
    setInterest(calculatedInterest);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Gestión de Intereses</title>
        <meta name="description" content="Gestiona tus intereses y monitorea el impacto de tus inversiones." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>

        <h1 className={styles.title}>Gestión de Intereses</h1>
        <p className={styles.description}>
          Calcula tus intereses.
        </p>

        <div className={styles.calculatorContainer}>
          <label className={styles.label}>
            Monto del Préstamo:
            <input className={styles.input} type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} />
          </label>
          <label className={styles.label}>
            Tasa de Interés Anual (%):
            <select className={styles.select} value={rate} onChange={(e) => setRate(Number(e.target.value))}>
              <option value={16}>16%</option>
              <option value={22}>22%</option>
              <option value={29}>29%</option>
            </select>
          </label>
          <label className={styles.label}>
            Plazo del Préstamo (años):
            <input className={styles.input} type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
          </label>
          <button className={styles.calculateButton} onClick={handleCalculate}>Calcular</button>
          <p className={styles.result}>Interés a Pagar: ${interest.toFixed(2)}</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 The Garden Gates. Siguenos en <a href='https://x.com/thegardengatesx'>X @thegardengatesx</a>.</p>
      </footer>
    </div>
  );
};

export default GestionIntereses;
