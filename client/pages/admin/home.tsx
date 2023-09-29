
import React, {useEffect} from 'react'
import Home from '@/components/adminHome'
import Nav from '@/components/adminNav'
import Posts from '@/components/adminPosts'
const home = () => {
 

  return (
   <>
   <Nav/>

    <div className=' flex flex-row '>
      
      <div className='w-3/12'>
<div>
  Posts
</div>
<div>
  Users
</div>
        </div>
        <div className='w-9/12'>
 <Posts/>
        </div>
    </div>
 
   </>
  )
}

export default home