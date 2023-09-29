import React from 'react'
import {  Poppins } from 'next/font/google'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Image from 'next/image'
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

const ReadFunction =()=>{
    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:4000/api/blog/').then(res =>
      res.json()
      
    )
  )

  if (isLoading) return 'Loading...'

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

  <div className='flex justify-between pr-32 mt-10'>
{
    maap.map((item:any)=>{
        return(
         item&&    

<article className='flex   '>
  <div>
<Image className='h-full' width={144} height={105} src={item.images} alt=''/>
  </div>

  <div className='pl-4'>
<h4 className='text-2xl font-medium w-44'>{item.title}</h4>


<p className='w-44 max-h-10 overflow-hidden opacity-50'>{item.body}</p>
  </div>
</article>



               
        )
    })
}
</div>
    </div>
)
}

export default Reads