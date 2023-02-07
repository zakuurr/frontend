import React, { useState,useContext } from 'react'
import {Navigate,useNavigate} from 'react-router-dom'
import { UserContext } from '../UserContext';

function Login() {
    // const navigate = useNavigate();
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[redirect,setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    async function login(ev) {
      ev.preventDefault();
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
      });
      if (response.ok) {
        response.json().then(userInfo => {
            setUserInfo(userInfo);
            setRedirect(true);
            
          });
     
      } else {
        swal("Error", "Wrong Credentials!", "error");
      }
      
    }

    if(redirect){
        return <Navigate to={'/dashboard'}/>
    }
    // useEffect(() => {
    //     setCounter(value => value + 1)
    //   }, [])
    
  
    
    return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
           Sign in
        </h1>
        <form className="mt-6" onSubmit={login}>
            <div className="mb-2">
                <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" value={email} onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <label
                    for="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" value={password} onChange={e => setPassword(e.target.value)}
                />
            </div>
           
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 is-success is-fullwidth">
                    Login
                </button>
            </div>
        </form>

    </div>
</div>
  )
}

export default Login