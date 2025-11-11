import React, { useEffect, useState } from 'react'

export default function ProductForm({ editItem, onDone }){
  const [form, setForm] = useState({ name:'', price:'', description:'' })
  useEffect(()=>{ if(editItem) setForm(editItem) },[editItem])

  const submit = async (e) => {
    e.preventDefault()
    if(!form.name.trim() || Number(form.price) <= 0) return alert('Invalid name or price')
    const payload = { name: form.name.trim(), price: Number(form.price), description: form.description||'' }
    try {
      if(form.id) await update(form.id, payload)
      else await add(payload)
      setForm({ name:'', price:'', description:'' })
      onDone && onDone()
    } catch(err){ alert(err.message) }
  }

  return (
    <form className="card form" onSubmit={submit}>
      <h2>{form.id ? 'Edit Product' : 'Add Product'}</h2>
      <label>Product name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="e.g. Wireless Mouse" /></label>
      <label>Price (AED)<input value={form.price} type="number" onChange={e=>setForm({...form,price:e.target.value})} /></label>
      <label>Description<textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} /></label>
      <div className="actions">
        <button type="submit" className="btn primary">{form.id ? 'Save' : 'Add Product'}</button>
        <button type="button" className="btn" onClick={()=>{ setForm({ name:'', price:'', description:'' }); onDone && onDone(); }}>Reset</button>
      </div>
    </form>
  )
}
