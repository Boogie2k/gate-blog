import React, {useState} from 'react'
import registerStyles from '../styles/Register.module.css'


const Register = () => {
     
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [username, setUsername] = useState("");
    

 let registerUser = () => {
    fetch("https://gate-http.onrender.com/api/users/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
      }),
    }).then((res) =>
      res.json().then((data) => {
         window.location.href = "/login";
      })
    );
  };

  return(
   <section className={`${registerStyles.section} min-h-screen flex flex-col justify-center items-center`}>

    <div className='bg-white w-96 p-2 opacity-70 mb-4 '>
   <span className='bg-black text-white py-2 px-4'>
       Credentials
    </span>
    <input  value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }} className='ps-4' type='text' placeholder='Enter your Email'/>
</div>

 <div className='bg-white w-96 p-2 opacity-70 mb-4'>
    <span className='bg-black text-white py-2 px-4'>
       Credentials
    </span>
    <input  value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }} className='ps-4' type='text' placeholder='username'/>
</div>

 <div className='bg-white w-96 p-2 opacity-70 '>
    <span className='bg-black text-white py-2 px-4'>
       Credentials
    </span>

    <input  value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }} className='ps-4' type='text' placeholder='password'/>
</div>

<button   onClick={() => {
         
          registerUser();
        }} className='text-white p-2 bg-black mt-8 border-2 border-white rounded-lg'>Sign Up</button>

   </section>
)}

export default Register