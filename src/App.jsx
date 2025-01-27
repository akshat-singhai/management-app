import React from 'react'
import NavBar from './container/NavBar/NavBar';
import UpData_Data from './container/UpDate_Data/UpData_Data';
import Add_data from './container/Add_data'
import Show_data from './container/show_data/show_data'
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Edite_data from './container/UpDate_Data/Edite_data';
const App = () => {
  const  router= createBrowserRouter([
    {
      path:"/",
      element:<><NavBar/><Show_data/> </>
    },
    {
      path:"/AddData",
      element:<><NavBar/><Add_data/>  </>
    },
    {
      path:"/UpdateData",
      element:<> <NavBar/> <UpData_Data/></>
    },
    {
      path:"/EditeData",
      element:<><NavBar/><Edite_data/> </>
    }
  ])
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App

