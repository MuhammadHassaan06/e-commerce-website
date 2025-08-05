import Sidebar from '@/components/Sidebar'
import React from 'react'

const AdminLayout = ({children}) => {
  return (<>
  <div className="flex flex-row">

    <Sidebar/>
    {children}
  </div>
  </>
  )
}

export default AdminLayout