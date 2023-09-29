import React, {useEffect, useState} from 'react'

const adminPosts = () => {

interface Post {
  title: string;
  genre: string;
  body: string;
}

const [posts, setPosts] = useState<Post[] | null>()



  useEffect(()=>{
fetch('http://localhost:4000/api/blog/').then(res=>res.json().then(d=>{setPosts(d)}))
  },[])

  posts&&console.log(posts)

  return (<>
    <div>adminPosts</div>
<div className='flex flex-col'>
  <section className='flex bg-red-500 justify-evenly'>
<div className='w-1/4'>Title</div>
<div className='w-1/4'>genre</div>
<div className='w-1/4'>body</div>
<div className='w-1/4'></div>
</section>

{
 posts&& posts.map((item)=>{
return(
  <section className='flex justify-evenly'>
    <div className='w-1/4'>{item.title}</div>
<div className='w-1/4'>{item.genre}</div>
<div className='w-1/4'>{item.body}</div>
<div className='w-1/4 flex justify-evenly'>
  <button>edit </button><button>delete</button>
</div>
  </section>
)
  })
}
</div>



</>  )
}

export default adminPosts