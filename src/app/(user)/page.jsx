import React from 'react'
import User1Main from '@/components/UserComponents/User1Main'
import UserCategories from '@/components/UserComponents/UserCategories'
import UserImage from '@/components/UserComponents/UserImage'
import UserItems from '@/components/UserComponents/UserItems'
import ItemsFurniture from '@/components/UserComponents/ItemsFurniture'

const UserPage = () => {
  return (<>
  <div className='flex flex-col  w-337.9 h-full  justify-center items-center'>
        <User1Main/>
        <UserCategories/>
        <UserImage/>
        <UserItems/>
        <ItemsFurniture/>
        </div>
  </>
    
  )
}

export default UserPage