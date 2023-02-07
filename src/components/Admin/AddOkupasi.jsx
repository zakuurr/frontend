import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddOkupasi() {
    const [tipe_okupasi, setTipeOkupasi] = useState("");
    const [rate_premi, setRatePremi] = useState("");
   
    const navigate = useNavigate();
    const save = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:5000/okupasi", {
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
      
<form class="" onSubmit={save}>
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
  <button className="btn btn-active btn-primary ">Add</button>
 
</form>
    </div>
  )
}
