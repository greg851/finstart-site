import React, { useState } from 'react';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mjkarold", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setMessage("🚀 Iscrizione avvenuta con successo!");
        setEmail('');
      } else {
        setMessage("⚠️ Si è verificato un problema. Riprova.");
      }
    } catch (error) {
      setMessage("❌ Errore di connessione. Controlla la rete.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Inserisci la tua email"
        required
      />
      <button type="submit">Iscriviti</button>
      {message && <p>{message}</p>}
    </form>
  );
}

