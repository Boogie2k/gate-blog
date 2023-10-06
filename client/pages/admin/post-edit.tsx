import React, {useState} from 'react'

const NewPost = () => {
     const[title, setTitle]  = useState<string | undefined>()
    const[ genre, setGenre] =  useState<string | undefined>()
    const [body, setBody]= useState<string | undefined>()
    const[image, setImage]= useState<string | undefined>()
 const [ids, setIds] = useState();
    const editPost= async()=>{
await fetch(`https://gate-http.onrender.com/api/blog/${ids}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        image,
        title,
        body,
        genre
      }),
    }).then((res) => res.json().then(d=>{alert('successful')}))
    }

  
  return (
    <>
    <div>NewPost</div>
    <div>
<input type='text' value={title||''} 
onChange={(e)=>{setTitle(e.target.value)}}
placeholder='title'
/>
<input type='text' value={genre||''} 
onChange={(e)=>{setGenre(e.target.value)}}
placeholder='genre'
/>
<input type='text' value={body||''} 
onChange={(e)=>{setBody(e.target.value)}}
placeholder='body'
/>
<input type='text' value={image||''} 
onChange={(e)=>{setImage(e.target.value)}}
placeholder='image'
/>
    </div>

  
 </> )
}

export default NewPost