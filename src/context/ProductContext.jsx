import React, { createContext, useContext, useEffect, useState } from 'react'
import * as api from '../api'

const ProductContext = createContext()
export const useProducts = () => useContext(ProductContext)

export function ProductProvider({ children }){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const load = async () => {
    setLoading(true)
    try {
      const data = await api.fetchProducts()
      setProducts(data)
    } catch(e){
      setError(e.message)
    } finally { setLoading(false) }
  }

  const add = async (p) => {
    const newP = await api.createProduct(p)
    setProducts(prev => [...prev, newP])
    return newP
  }

  const update = async (id, changes) => {
    const updated = await api.updateProduct(id, changes)
    setProducts(prev => prev.map(x => x.id === id ? updated : x))
    return updated
  }

  const remove = async (id) => {
    await api.deleteProduct(id)
    setProducts(prev => prev.filter(x => x.id !== id))
  }

  useEffect(()=>{ load() }, [])

  return (
    <ProductContext.Provider value={{ products, loading, error, add, update, remove, reload: load }}>
      {children}
    </ProductContext.Provider>
  )
}
