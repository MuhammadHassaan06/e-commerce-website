import React from 'react'
import Header from '@/components/UserComponents/Header'
import Footer from '@/components/UserComponents/Footer'


const UserLayout = ({children}) => {
  return (
    <div className='flex flex-col w-full h-full '>
        <Header />
        
        {children}
        <Footer/>
    </div>
  )
}

export default UserLayout