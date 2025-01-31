import React, { useReducer } from 'react'
import { CartContext } from '../Context/CartContext'

export const CartProvider = ({children}) => {

  const initialState = []
  const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
      case '[CARRITO] Add Product':
        return [...state, action.payload]
      case '[CARRITO] Remove Product':
        return state.filter(product => product.id !== action.payload)
      case '[CARRITO] Increment Quantity':
        return state.map(product => {
          if (product.id === action.payload) {
            return { ...product, quantity: product.quantity + 1 }
          }
          return product
        })
      case '[CARRITO] Decrement Quantity':
        return state.map(product => {
          if (product.id === action.payload && product.quantity > 1) {
            return { ...product, quantity: product.quantity - 1 }
          }
          return product
        })
      default:
        return state
    }
  }
  const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState)

  const addProduct = (product) => {
    product.quantity = 1
    const action = {
      type: '[CARRITO] Add Product',
      payload: product
    }
    dispatch(action)
  }
  const removeProduct = (id) => {
    const action = {
      type: '[CARRITO] Remove Product',
      payload: id
    }
    dispatch(action)
  }
  const incrementQuantity = (id) => {
    const action = {
      type: '[CARRITO] Increment Quantity',
      payload: id
    }
    dispatch(action)
  }
  const decrementQuantity = (id) => {
    const action = {
      type: '[CARRITO] Decrement Quantity',
      payload: id
    }
    dispatch(action)
  }



  return (
    <CartContext.Provider value={{ shoppingList, addProduct, removeProduct, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
