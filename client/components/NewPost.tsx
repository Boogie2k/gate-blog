import React, {useState} from 'react'

const NewPost = () => {
     const[title, setTitle]  = useState<string | undefined>()
    const[ genre, setGenre] =  useState<string | undefined>()
    const [body, setBody]= useState<string | undefined>()
    const[image, setImage]= useState<string | undefined>()

    const createPost= async()=>{
await fetch('http://localhost:4000/api/blog/', {
      method: "POST",
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

    <button onClick={createPost}>submit</button>
 </> )
}

export default NewPost