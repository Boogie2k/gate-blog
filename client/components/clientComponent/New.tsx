import Image from 'next/image'
import React, {useState} from 'react'
import NewStyles from '../../styles/New.module.css'
import {  Poppins } from 'next/font/google'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()

const poppins = Poppins({ weight: '400',
 subsets: ['latin'] })

const New = () => {
  const [newTrend, setNewTrend] = useState()

  fetch('http://localhost:4000/api/blog/')
  return (
    <div>
        <QueryClientProvider client={queryClient}>
      <NewFunction/>
      </QueryClientProvider>
    </div>
  )
}


const NewFunction =()=>{
 const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:4000/api/blog/').then(res =>
      res.json()
      
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error


 const maap= data && data.map((item:any)=>{
  
  if(item.tags.includes('new')){
return item
  }
  })

 
console.log(maap)
maap.map((item:any)=>{item && console.log(item.body)})
/*  const filt = data.items && data.items.filter((item:any) => item.genre === "fantasy")


console.log(filt)
 */

return(<>
<div className={`${poppins.className} pt-10 px-10`}>
  
  <h4 className='font-semibold text-xl mb-2'>New & Trendy</h4>

<div className='flex flex-col items-center'>
{maap.map((item:any)=>{  
  const mongoDBTimestamp:any = new Date( item && item.updatedAt);
const currentTime:any = new Date();
let elapsedTime;
let elapsedTimeType;


const elapsedTimeInMilliseconds = currentTime - mongoDBTimestamp;

const elapsedSeconds = Math.floor(elapsedTimeInMilliseconds / 1000);
const elapsedMinutes = Math.floor(elapsedSeconds / 60);
const elapsedHours = Math.floor(elapsedMinutes / 60);
const elapsedDays = Math.floor(elapsedHours / 24);
const elapsedWeek = Math.floor(elapsedDays / 7);
const elapsedMonth = Math.floor(elapsedWeek / 4);
const elapsedYear = Math.floor(elapsedMonth / 12);




if(elapsedSeconds<60){
  elapsedTime= elapsedSeconds
  elapsedTimeType ='Seconds'
}else if(elapsedMinutes<60){
  elapsedTime=elapsedMinutes
   elapsedTimeType ='Minutes'
}else if(elapsedHours<25){
  elapsedTime=elapsedHours
   elapsedTimeType ='Hours'
}
else if(elapsedDays<8){
  elapsedTime= elapsedDays
   elapsedTimeType ='Day'
}
else if(elapsedWeek<5){
  elapsedTime= elapsedWeek
   elapsedTimeType ='week'
}

else if(elapsedMonth<13){
  elapsedTime= elapsedMonth
   elapsedTimeType ='Month'
}

else if(elapsedYear>=1){
  elapsedTime= elapsedYear
   elapsedTimeType ='Year'
}


  return(
  <div className=''>
 {item&& 
 <div className='flex'><Image width={636} height={382} src={item.images} alt=''/>
  <div className={ ` ${NewStyles.newFrame}  px-32 flex flex-col justify-center capitalize min-h-full `}>
   <div className='flex justify-between'> <p className='mb-2'>{item.genre}</p> <p className='text-gray-800'>{elapsedTime + ' ' + elapsedTimeType + ' '+ 'ago' }</p> </div>

    <h4 className='text-black text-lg font-bold'>{item.title} </h4>
    <p className='w-96 opacity-100 my-4 text-gray-800' >{item.body}</p>
    <div className='flex justify-between'><p>{item.read} Read</p>  <p className='font-bold'>Read Full</p></div>
  </div>

  </div>
 }
    </div>
)})}
  </div>
</div>
</>)

}

export default New