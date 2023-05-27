import React from 'react'
import NavBar from '../Navbar/NavBar'
// import SideBar from './SIdeBar'
import Table from '../Table/Table'
import './Portal.css'

const TableContent = () => {
  return (
    <div>
       <div className="portal-container">
        {/* <SideBar/> */}
        <div className='userDetails'>
          <NavBar/>
          <Table/>
        </div>
       </div>
    </div>
  )
}

export default TableContent