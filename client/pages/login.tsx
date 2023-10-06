import React, {useReducer} from 'react'
import registerStyles from '../styles/Register.module.css'
import jwtDecode from "jwt-decode";


interface State {
  email: string;
  password: string;
}

type Action = { type: string; payload: string };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    case 'UPDATE_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
}


const Login = () => {
 const initialState = { email: '', password: '' };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_EMAIL', payload: event.target.value });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_PASSWORD', payload: event.target.value });
  };

  const submitss =()=>{
fetch("https://gate-http.onrender.com/api/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: state.email,
        password: state.password,
      }),
    }).then(res=>res.json().then(d=>{console.log(d)
    

    if(d.token){

  
 
      const admin:any= jwtDecode(d.token);
      console.log(admin);
                localStorage.setItem("token", d.token);
                if (admin.userEmail === "jeff") {
            window.location.href = "/admin/home";
          }  
          else{
          window.location.href = "/";
          }
    }
    
    } ))
  }


  return (
     <section className={`${registerStyles.section} min-h-screen flex flex-col justify-center items-center`}>

    <div className='bg-white w-96 p-2 opacity-70 mb-4 '>
    <span className='bg-black text-white py-2 px-4'>
      credentials
    </span>
    <input   onChange={handleEmailChange} className='ps-4' type='text' placeholder='Enter your Email'/>
</div>

 <div className='bg-white w-96 p-2 opacity-70 mb-4'>
    <span className='bg-black text-white py-2 px-4'>
      credentials
    </span>
    <input onChange={handlePasswordChange} className='ps-4' type='text' placeholder='Enter your password'/>
</div>

 

<button onClick={submitss} className='text-white p-2 bg-black mt-8 border-2 border-white rounded-lg'>Login</button>

   </section>
  )
}

export default Login