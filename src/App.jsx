import React from 'react'
import SignupForm from './components/SignupForm'

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '50px' }}>
      <h1>🚀 Benvenuto su FinStart</h1>
      <p>La tua startup inizia qui. Iscriviti per ricevere aggiornamenti!</p>
      <SignupForm />
    </div>
  )
}
