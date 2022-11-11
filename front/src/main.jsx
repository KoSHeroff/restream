import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import axios from "axios"

axios.defaults.baseURL = import.meta.env.PROD ? import.meta.env.VITE_API_BASE_URL : import.meta.env.VITE_API_DEV_BASE_URL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
