import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditOkupasi() {
    const [tipe_okupasi, setTipeOkupasi] = useState("");
    const [rate_premi, setRatePremi] = useState("");
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        getOkupasiById();
      }, []);

    const getOkupasiById = async () => {
    const response = await axios.get(`http://localhost:5000/okupasi/${id}`);
    setTipeOkupasi(response.data.tipe_okupasi);
    setRatePremi(response.data.rate_premi);
  };
  const update = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/okupasi/${id}`, {
        tipe_okupasi,
        rate_premi,
      });
      navigate("/okupasi");
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
    <span className="label-text">Tipe Okupasi</span>
  </label>

  <input type="text" placeholder="Masukan Okupasi" value={tipe_okupasi} onChange={(e) => setTipeOkupasi(e.target.value)} className="input input-bordered w-full" />
 
    </div>

    <div class="form-control w-full md:w-1/2 px-3 mb-6 md:mb-0">
  
    <label className="label">
    <span className="label-text">Rate Premi</span>
  </label>

  <input type="text" placeholder="Masukan Rate Premi" value={rate_premi} onChange={(e) => setRatePremi(e.target.value)} className="input input-bordered w-full" />
 
    </div>
 </div>
  <button className="btn btn-active btn-primary ">Update</button>
 
</form>
    </div>
  )
}
