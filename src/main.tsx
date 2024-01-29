import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='mx-auto border-2 w-4/5 h-screen flex justify-center items-center'>
    <App />
    </main>
  </React.StrictMode>,
)
