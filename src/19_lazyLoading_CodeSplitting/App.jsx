import React, {Suspense, lazy } from 'react'
import {createBrowserRouter, RouterProvider, Navigate, NavLink, Outlet} from 'react-router-dom'
import AboutPage from './AboutPage'
//import AllCommentsPage from './AllCommentsPage'
const AllCommentsPage = lazy(()=>import('./AllCommentsPage'))

import AddCommentPage from './AddCommentPage'
import CommentDetailPage from './CommentDetailPage'
import NotFoundPage from './NotFoundPage.jsx'

const MainNavigation =() =>{
    return (
        <nav> 
            <NavLink end style={({isActive}) => ({ color: isActive ?'red':'black'})} to ="/">
                Comments
            </NavLink>
            <NavLink className={({isActive})=>"nav-link" + (isActive?"active":"")} to ="/about">
                About
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
                path: '/',
                element:<AboutPage/>
            },
            {
                path:"/addComment",
                element:<AddCommentPage/>
            },
            {
                path:"/comment/:id",
                element:<CommentDetailPage/>
            },
            {
                path:'/about',
                //element:<AllCommentsPage/>
                element: <Suspense fallback={<h1>Loading, please wait...</h1>}>
                    <AllCommentsPage/>
                </Suspense>
            },
            {
                path:'about-wipro',
                element:<Navigate to="/about" replace/>
            },
            {
                path:'*',
                element:<NotFoundPage/>
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