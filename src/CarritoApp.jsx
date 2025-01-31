import React from 'react'
import { NavBarComponent } from './components/NavBarComponent'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductosPage } from './pages/ProductosPage'
import { ShoppingCarPage } from './pages/ShoppingCarPage'
import { ProductProvider } from './Context/ProductProvider'
import { CartProvider } from './Context/CartProvider'

export const CarritoApp = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <NavBarComponent />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<ProductosPage />}></Route>
                        <Route path='/carrito' element={<ShoppingCarPage />}></Route>
                        <Route path='/*' element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CartProvider>
        </ProductProvider>
    )
}
