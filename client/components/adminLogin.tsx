import React, { useReducer } from 'react';
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



const login = () => {



  const initialState = { email: '', password: '' };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_EMAIL', payload: event.target.value });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_PASSWORD', payload: event.target.value });
  };

  const submitss =()=>{
fetch("http://localhost:4000/api/users/login", {
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
    <div className='flex flex-col'>
      <input
        className='mb-5 text-black'
        type='text '
        value={state.email}
        onChange={handleEmailChange}
        placeholder='username'
        
      />
      <input
        value={state.password}
        onChange={handlePasswordChange}
        className='mb-5 text-black'
        type='password'
        placeholder='password'
      />

      <button onClick={submitss} className='bg-blue-500' type='button'>
        Submit
      </button>
    </div>
  );
};

export default login;
