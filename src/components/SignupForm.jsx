import React, { useState } from 'react';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('✅ Iscrizione avvenuta con successo!');
        setEmail('');
      } else {
        setMessage('❌ Errore durante l’iscrizione.');
      }
    } catch (error) {
      console.error(error);
      setMessage('⚠️ Si è verificato un problema.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input
          type="email"
          placeholder="Inserisci la tua email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '10px', width: '250px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
          Iscriviti
        </button>
      </form>
      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
    </div>
  );
}
