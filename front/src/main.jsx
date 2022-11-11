import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import axios from "axios"

axios.defaults.baseURL = import.meta.env.PROD ? VITE_API_DEV_BASE_URL : VITE_API_DEV_BASE_URL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
