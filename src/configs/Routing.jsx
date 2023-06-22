import React from 'react'
import {useRoutes} from 'react-router-dom'
import Catalog from '../components/pages/Catalog'
import Detail from '../components/pages/Detail'
import Home from '../components/pages/Home'

const Routing = () => {
  const routes= useRoutes([
    { path:'/:category/search/:keyword', element: <Catalog/>},
    { path:'/:category/:id', element: <Detail/>},
    { path:'/:category', element: <Catalog/>},
    { path:'/', element: <Home/>}
  ])
        return routes
}

export default Routing
