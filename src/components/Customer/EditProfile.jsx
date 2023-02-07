import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProfile() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        getUsersById();
      }, []);

    const getUsersById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`,{
        withCredentials:true
    });
    setNama(response.data.nama);
    setEmail(response.data.email);
  };
  const update = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        withCredentials:true,
        nama,
        email,
      });
      navigate("/user-profile");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (

   
    <div> 
      
<form class="" onSubmit={update}>
<div class="flex flex-wrap -mx-3 mb-6">
    <div class="form-control w-full md:w-1/2 px-3 mb-6 md:mb-0">
  
    <label className="label">
    <span className="label-text">Nama</span>
  </label>

  <input type="text" placeholder="Masukan Nama" value={nama} onChange={(e) => setNama(e.target.value)} className="input input-bordered w-full" />
 
    </div>

    <div class="form-control w-full md:w-1/2 px-3 mb-6 md:mb-0">
  
    <label className="label">
    <span className="label-text">Email</span>
  </label>

  <input type="text" placeholder="Masukan Rate Premi" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered w-full" />
 
    </div>
 </div>
  <button className="btn btn-active btn-primary ">Update</button>
 
</form>
    </div>
  )
}
