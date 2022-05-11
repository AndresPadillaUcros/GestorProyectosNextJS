import React from 'react'
import SideBar from '../components/sidebar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children}) => {
  return (
    <div className='d-flex flex-column h-auto flex-md-row flex-nowrap'>
        <SideBar />
        <div className='d-flex vh-100 vw-100 '>
            <div className='h-100 w-100 overflow-auto' >
                {children}
            </div>
        </div>
        <ToastContainer />



    </div>
  )
}

export default Layout