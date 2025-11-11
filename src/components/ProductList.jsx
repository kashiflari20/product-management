import React, { useState } from 'react'
import ProductForm from './ProductForm'

export default function ProductList(){
  const [editing, setEditing] = useState(null)
  if(loading) return <div className="card">Loading...</div>
  if(error) return <div className="card error">Error: {error}</div>

  return (
    <div>
      <div className="grid">
        {products.map(p => (
          <div key={p.id} className="card product-card">
            <div className="card-header"><h3>{p.name}</h3><span className="price">AED{p.price}</span></div>
            <p className="desc">{p.description}</p>
            <div className="card-actions">
              <button className="btn" onClick={()=>setEditing(p)}>Edit</button>
              <button className="btn danger" onClick={()=>{ if(confirm('Delete?')) remove(p.id) }}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <div className="overlay">
          <div className="modal">
            <ProductForm editItem={editing} onDone={()=>setEditing(null)} />
            <button className="btn" onClick={()=>setEditing(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
