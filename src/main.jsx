import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ProductProvider } from './context/ProductContext'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
)
