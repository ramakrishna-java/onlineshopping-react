import {createBrowserRouter, Outlet, RouterProvider, NavLink} from 'react-router-dom'
import Portals from './components/Portals'
import Home from './components/Home.jsx'
import Sports from './components/Sports.jsx'
import Weather from './components/Weather.jsx'
import './App.css'

const MainNavigation =()=>{
    return (
        <nav>
            <NavLink end style={({isActive}) => ({color:isActive?'red':'black'})} to=''>
                Home
            </NavLink>
            <NavLink style={({isActive}) => ({color:isActive?'red':'black'})} to='/sports'>
                Sports
            </NavLink>
            <NavLink style={({isActive}) => ({color:isActive?'red':'black'})} to='/weather'>
                Weather
            </NavLink>
        </nav>
    )
}

const Layout=()=>{
    return (
        <>
        <MainNavigation/>
        <Outlet/>
        </>
    )
}


const router=createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/sports',
                element:<Sports/>
            },
            {
                path:'/weather',
                element:<Weather/>
            }
        ]
    }
])

const App=()=>{
    const handleClick =()=>{
        console.log("Clicked")
    }

    return (
        <div className='App' onClick={()=>handleClick()}>
            <Portals></Portals>
            <RouterProvider router={router}/>

        </div>
    )
}

export default App