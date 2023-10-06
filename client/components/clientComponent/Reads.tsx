import React from 'react'
import {  Poppins } from 'next/font/google'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Image from 'next/image'
import Link from 'next/link'
const queryClient = new QueryClient()
const poppins = Poppins({ weight: '400',
 subsets: ['latin'] })


const Reads = () => {
  return (
    <div>
      
  <QueryClientProvider client={queryClient}>
      <ReadFunction/>
      </QueryClientProvider>
    </div>
  )
}

const SkeletonLoading =()=>{
  return(
<div role="status" className="w-full px-10 animate-pulse">
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>

    

      <div className='flex flex-col lg:flex-row lg:justify-between  w-full'>
    <div className=" h-18 lg:h-36 bg-gray-200  dark:bg-gray-700 w-1/4 mb-2.5"></div>
    <div className="h-18 lg:h-36 bg-gray-200  dark:bg-gray-700 w-1/4 mb-2.5"></div>
<div className="h-18 lg:h-36 bg-gray-200  dark:bg-gray-700 w-1/4 mb-2.5"> </div>
    </div>
      
  
    
    <span className="sr-only">Loading...</span>
</div>

  )
}

const ReadFunction =()=>{
    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://gate-http.onrender.com/api/blog/').then(res =>
      res.json()
      
    )
  )

  if (isLoading) return <SkeletonLoading/>

  if (error) return 'An error has occurred: ' + error


 const maap= data && data.map((item:any)=>{
  
  if(item.tags.includes('Short Reads')){
return item
  }
  })

 
console.log(maap)
maap.map((item:any)=>{item && console.log(item.body)})

return(
    <div className={`${poppins.className} pt-10 px-10 mt-20 pb-8`}>
  <h4 className='text-3xl font-semibold'> Short Reads</h4>

  <div className='flex flex-col items-center    md:grid grid-cols-2 gap-x-8 lg:flex lg:flex-row justify-between lg:pr-32 mt-10'>
{
    maap.map((item:any)=>{
        return(
         item&&    

 <Link className='mb-8 md:mb-0' href={`/article/${item._id}`}> <article className='flex   '>
  <div className=''>
<Image className='h-full ' width={144} height={105} src={item.images} alt=''/>
  </div>

  <div className='pl-4'>
<h4 className='text-2xl font-medium w-44'>{item.title}</h4>


<p className='w-44 max-h-10 overflow-hidden opacity-50'>{item.body}</p>
  </div>
</article>


</Link> 
               
        )
    })
}
</div>
    </div>
)
}

export default Reads