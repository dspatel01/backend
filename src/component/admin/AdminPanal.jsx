import React from 'react'
import './adminpanel.css'
import SideBar from './SideBar'

const AdminPanal = () => {
  return (
    <>
      <div className="admin-container">
        <h2>Admin</h2>
      </div>

      <div className="main_container">
        <div className="leftSide">
          <SideBar />
        </div>
        <div className="rightSide">
          
        </div>

      </div>


    </>
  )
}

export default AdminPanal