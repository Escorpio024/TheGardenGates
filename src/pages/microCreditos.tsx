import React, { useState } from 'react';
import NavBar from '../components/NavBar';

interface FormData {
  name: string;
  email: string;
  amount: number;
  reason: string;
  nit: number;
  cc: number;
}

const MicrocreditRequestPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    amount: 0,
    reason: '',
    nit: 0,
    cc: 0,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'amount' ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setSubmitted(true);
    // Aquí podrías enviar los datos al servidor
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Solicitar un Microcrédito</h1>
      {submitted && <p style={{ color: 'green' }}>¡Solicitud enviada con éxito!</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <NavBar />
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="nit">NIT:</label>
          <input
            type="text"
            id="nit"
            name="nit"
            value={formData.nit}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="cc">CC:</label>
          <input
            type="text"
            id="cc"
            name="cc"
            value={formData.cc}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="amount">Monto Solicitado:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="reason">Motivo:</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            rows={4}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
        >
          Enviar Solicitud
        </button>
      </form>
      <footer style={{
        backgroundColor: "#0a5700",
        color: "#fff",
        textAlign: 'center',
        padding: '10px 0',
        marginTop: 'auto', // Esto empuja el footer hacia abajo
        width: '100%',
        position: 'relative',
        bottom: 0,
      }}>
        <p>© 2024 The Garden Gates. Síguenos en <a href='https://x.com/thegardengatesx' style={{ color: '#fff', textDecoration: 'underline' }}>X @thegardengatesx</a>.</p>
      </footer>
    </div>
  );
};

export default MicrocreditRequestPage;
