import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const UserLayout = ({children}) => {
  return (
    <div className='flex flex-col w-full h-screen'>
        <Header />
        {children}
        <Footer/>
    </div>
  )
}

export default UserLayout