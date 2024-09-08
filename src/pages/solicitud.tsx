import React, { useState } from 'react';

const MicrocreditInterestCalculation: React.FC = () => {
  const [principal, setPrincipal] = useState<number>(1000);
  const [rate, setRate] = useState<number>(5); // Tasa de interés predeterminada
  const [years, setYears] = useState<number>(1);
  const [interest, setInterest] = useState<number>(0);

  const calculateInterest = (principal: number, rate: number, years: number): number => {
    // Fórmula de interés simple: Interés = Principal x Tasa x Tiempo
    return principal * (rate / 100) * years;
  };

  const handleCalculate = () => {
    setInterest(calculateInterest(principal, rate, years));
  };

  return (
    <div>
      <h2>Cálculo de Interés de Microcrédito</h2>
      <label>
        Monto del Préstamo:
        <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} />
      </label>
      <label>
        Tasa de Interés Anual (%):
        <select value={rate} onChange={(e) => setRate(Number(e.target.value))}>
          <option value={3}>15%</option>
          <option value={5}>22%</option>
          <option value={7}>29%</option>
        </select>
      </label>
      <label>
        Plazo del Préstamo (años):
        <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
      </label>
      <button onClick={handleCalculate}>Calcular</button>
      <p>Interés a Pagar: ${interest.toFixed(2)}</p>
    </div>
  );
};

export default MicrocreditInterestCalculation;
