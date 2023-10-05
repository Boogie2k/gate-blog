import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import Nav from '@/components/clientComponent/Nav'
import { useRouter } from 'next/router';
import Image from 'next/image';


const queryClient = new QueryClient();

const Index = ({isMenu, setIsMenu, user}:any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <IndexFunction   isMenu ={isMenu}   setIsMenu={setIsMenu} user={user} />
    </QueryClientProvider>
  );
};

const SkeletonLoading =()=>{
  return(
<div role="status" className="w-full px-10 animate-pulse h-screen">
   

    <div className='flex  h-full flex-col mx-auto justify-evenly'>

      <div className='flex  mx-auto flex-col lg:flex-row h-1/4  w-full'>
    
    <div className="h-full  mx-auto bg-gray-200  dark:bg-gray-700 w-3/4 mb-2.5">
        

      <div>

      </div>
    </div>
    </div>
 <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 my-4"></div>

       <div className='flex flex-col lg:flex-row w-full h-2/4  mx-auto'>
    <div className="h-full bg-gray-200  dark:bg-gray-700 w-3/4 mb-2.5  mx-auto"></div>
    
    </div>
    </div>
    
    <span className="sr-only">Loading...</span>
</div>
  )
}

const IndexFunction = ({isMenu, setIsMenu, user}:any) => {


  const router = useRouter();
  const { id } = router.query;
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`http://localhost:4000/api/blog/${id}`).then((res) => res.json())
  );

  const [currentPage, setCurrentPage] = useState(1);
  
  const pageSize = 1; // Set your desired page size

  if (isLoading) return <SkeletonLoading/>

  if (error) return "An error has occurred: " + error;

  if (!data || !data.blogPosts) {
    return <SkeletonLoading/>;
  }

  // Paginate the tags data
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedTags = data.blogPosts.slice(start, end);

  const totalPages = Math.ceil(data.blogPosts.length / pageSize);

  // Function to handle page navigation
 /* const handlePageChange = (newPage:any) => {
    setCurrentPage(newPage);
  };
*/

  const nextPage =()=>{
    if( currentPage <totalPages){
      setCurrentPage(currentPage+1)
    }
  }
  const prevPage =()=>{
    if( currentPage >pageSize){
      setCurrentPage(currentPage-1)
    }
  }
  console.log(totalPages)
 return (
  <div className='pb-4 '>
<Nav  isMenu ={isMenu} user={user}  setIsMenu={setIsMenu}/>
<div className='px-8 pr-8 pt-20 '>

<div  className={' relative    float-left mr-8'}>
                 <Image style={{ }}   src={data.images } width={400} height={400} alt=''/>

<div style={{bottom:'30%'}} className='absolute left-0 right-0  text-center '>
  <h4  className='  text-3xl uppercase text-white tracking-widest '> {data.title}</h4>
</div>
</div>

<h4 className='text-4xl tracking-widest my-8'>Chapter {currentPage}</h4>
    {paginatedTags.map((tag:any) => (
      <div className='border-b-2 border-slate-500 relative py-4' key={tag}>{tag}</div>
    ))}
    <div>
      {/* Array.from({ length: totalPages }).map((_, index) => (
        <div>
        <button key={index} onClick={() => handlePageChange(index + 1)}>
         {index}
        </button>
       
        </div>
      ))*/}

    </div>

<div className='text-right text-white text-4xl pt-4'>
   <button  className={`border-8 border-gray-500 rounded-full mr-4 bg-gray-500  ${currentPage==pageSize? 'opacity-50' :'opacity-100'} `} onClick={prevPage}>{'<'}</button>
    <button className={`border-8 border-gray-500 rounded-full bg-gray-500 ${currentPage>= totalPages? 'opacity-50' :'opacity-100'}` } onClick={nextPage}> {'>'} </button>
   
   </div> </div>
  </div>
);

};

export default Index;
