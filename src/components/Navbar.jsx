import React,{useEffect, useState,useContext} from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import {UserContext} from "../UserContext";

function Navbar() {
    const {setUserInfo,userInfo} = useContext(UserContext);
    const [redirect,setRedirect] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/profile', {
          credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
              
                setUserInfo(userInfo);
            })
         
        })
    
      }, []);
  
      function logout() {
        fetch('http://localhost:5000/logout', {
          credentials: 'include',
          method: 'POST',
        });
        setUserInfo(null);
        setRedirect(true);
      }
      
      if(redirect){
        return <Navigate to={'/'}/>
      }
      const role = userInfo?.role;
      console.log(role);
  return (
    <div><div className="navbar bg-base-100 rounded-2xl">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">ASURANSI KEBAKARAN</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        {role == 'Administrator' && (
            <>
            <li><NavLink to={"/okupasi"} className="navbar-item">Tipe Okupasi</NavLink></li>
           <li><NavLink to={"/list-request"} className="navbar-item">List Request</NavLink></li>
          </>
        )}

        {role == 'Customer' && (
            <>
            <li><NavLink to={"/request"} className="navbar-item">Create Request</NavLink></li>
           <li><NavLink to={"/myrequest"} className="navbar-item">My Request</NavLink></li>
           <li><NavLink to={"/user-profile"} className="navbar-item">My Profile</NavLink></li>
          </>
        )}

      
        <li> <a onClick={logout}>Logout</a></li>
      </ul>
    </div>
  </div></div>
  )
}

export default Navbar