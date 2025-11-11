import React from 'react'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'

export default function App(){
  return (
    <div className="app">
      <header className="header">
        <h1>Product Manager</h1>
        <p className="sub">React + Fetch AJAX | json-server mock API</p>
      </header>
      <main className="container">
        <aside className="panel">
          <ProductForm />
        </aside>
        <section className="panel list-panel">
          <ProductList />
        </section>
      </main>
      <footer className="footer">© 2025 — Product Manager</footer>
    </div>
  )
}
