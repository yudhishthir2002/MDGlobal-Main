import React from 'react'
import NavBar from "./../HomePage/NavBar";
import { Outlet } from 'react-router-dom'
import FooterPage from "./../PageFooter/FooterPage";


const AppLayout = () => {
  return (
      <div className=''>
       <NavBar></NavBar>   
       <Outlet/>
      <FooterPage></FooterPage>
    </div>
  )
}

export default AppLayout