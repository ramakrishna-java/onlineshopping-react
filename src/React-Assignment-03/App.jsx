import React from 'react'
import {createBrowserRouter, RouterProvider, Navigate, NavLink, Outlet} from 'react-router-dom'
import AboutPage from './components/AboutPage'
import AllProductsPage from './components/AllProductsPage'
import AddProductPage from './components/AddProductPage'
import ProductDetailPage from './components/ProductDetailPage'

const MainNavigation =() =>{
    return (
        <nav> 
            <NavLink className={({isActive})=> ({ color: isActive ?'red':'black'})} to ="/">
                About
            </NavLink>
            <NavLink end style={({isActive}) => ({ color: isActive ?'red':'black'})} to ="/products">
                Products
            </NavLink>
            
        </nav>
    )
}

const Layout =()=>{
    return (<>
    <MainNavigation />
    <Outlet />    
    </>)
}

const  router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            
            {
                path:'/',
                element:<AboutPage/>
            },
            {
                path:'about',
                element:<AboutPage/>
            },
            {
                path: '/products',
                element:<AllProductsPage/>
            },
            {
                path:"/product/:id",
                element:<ProductDetailPage/>
            },
            {
                path:"/addProduct",
                element:<AddProductPage/>
            }
        ]
    }
])

const App =()=>{
    return (<>
    <RouterProvider router={router}/>
    </>)
}

export default App