import React, { useEffect, useState } from 'react'
import { ProductContext } from '../Context/ProductContext'
import Swal from 'sweetalert2'


export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Ha ocurrido un error al cargar los productos',
        icon: 'error',
      })
      console.error(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}
