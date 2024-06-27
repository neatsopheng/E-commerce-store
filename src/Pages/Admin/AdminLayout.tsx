import React from 'react'
import AdminPage from './AdminPage'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'

const AdminLayout = () => {
  return (
    <div>
        <AdminNavbar />
        <AdminSidebar />
        <AdminPage />
    </div>
  )
}

export default AdminLayout