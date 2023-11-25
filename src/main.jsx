import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeFirebase } from './firebase/config.js'

initializeFirebase()

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
