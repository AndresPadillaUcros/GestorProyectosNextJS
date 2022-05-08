import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom';
import SideBar from '../components/sidebar';

const Layout = ({children}) => {
  return (
    <div className='d-flex flex-column h-auto flex-md-row flex-nowrap'>
        <SideBar />
        <div className='d-flex vh-100 vw-100 '>
            <div className='h-100 w-100 overflow-auto' >
                {children}
            </div>
        </div>



    </div>
  )
}

export default Layout