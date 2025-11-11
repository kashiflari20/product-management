const BASE = 'http://localhost:4000/products'

export async function fetchProducts(){
  const res = await fetch(BASE)
  if(!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export async function createProduct(payload){
  const res = await fetch(BASE, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) })
  if(!res.ok) throw new Error('Failed to create')
  return res.json()
}

export async function updateProduct(id, payload){
  const res = await fetch(`${BASE}/${id}`, { method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) })
  if(!res.ok) throw new Error('Failed to update')
  return res.json()
}

export async function deleteProduct(id){
  const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' })
  if(!res.ok) throw new Error('Failed to delete')
  return res.json()
}
