import React,{useEffect, useState,useContext} from 'react'
import axios from 'axios'
import {UserContext} from "../../UserContext";
import {Navigate,useNavigate} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format';

export default function AddRequest() {
const [getlistokupasi,setlistOkupasi] = useState([]);
const [user,setUser] = useState([]);
const {setUserInfo,userInfo} = useContext(UserContext);
const [jangka_waktu,setJangkaWaktu] = useState('');
const [okupasi,setOkupasi] = useState([]);
const [alamat,setAlamat] = useState('');
const [provinsi,setProvinsi] = useState('');
const [kota,setKota] = useState('');
const [daerah,setDaerah] = useState('');
const [harga_bangunan,setHarga] = useState('');
const [kontruksi,setKontruksi] = useState('');
const [gempa,setGempa] = useState(true);
const[redirect,setRedirect] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/okupasi', {
      credentials: 'include',
    }).then(response => {
        response.json().then(userInfo => {
         
          setlistOkupasi(userInfo);
        })
     
    })
    setUser(userInfo?.id);
  }, []);


  const AddRequest = async (e) => {
    e.preventDefault();
  
    console.log( '', setUser(userInfo?.id));
    try {
      await axios.post("http://localhost:5000/request", {
        jangka_waktu,
        okupasi,
        alamat,
        harga_bangunan,
        provinsi,
        kota,
        daerah,
        kontruksi,
        gempa,
        user,

      });
      setRedirect(true);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  if(redirect){
    return <Navigate to={'/request-invoice'}/>
  }
  return (

   
    <div> 
      
<form class="" onSubmit={AddRequest}>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="form-control w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label className="label">
    <span className="label-text">Jangka Waktu Pertanggungan</span>
  </label>
  <select className="select select-bordered" value={jangka_waktu} onChange={ev => setJangkaWaktu(ev.target.value)}>
    <option selected>Pilih Jangka Waktu Pertanggungan</option>
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
    <option value={5}>5</option>
    <option value={6}>6</option>
    <option value={7}>7</option>
    <option value={8}>8</option>
    <option value={9}>9</option>
    <option value={10}>10</option>
  </select>

    </div>
    {/* Text Area */}
    <div class="form-control w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label className="label">
    <span className="label-text">Alamat Objek Pertanggungan</span>
  </label>
  <textarea className="textarea textarea-bordered h-24" placeholder="" value={alamat} onChange={ev => setAlamat(ev.target.value)}></textarea>

    </div>
    <div class="form-control w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label className="label">
    <span className="label-text">Okupasi</span>
  </label>
  <select className="select select-bordered" value={okupasi} onChange={ev => setOkupasi(ev.target.value)}>
    <option selected>Pilih Okupasi</option>

{  console.log("ID",okupasi)}
    {getlistokupasi.map((a) => (
      
              <option value={a._id}>{a.tipe_okupasi}</option>
            ))}
   
  </select>

    </div>

    <div className="form-control w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label className="label">
    <span className="label-text">Provinsi</span>
  </label>
  <input type="text" placeholder="" value={provinsi} onChange={ev => setProvinsi(ev.target.value)} className="input input-bordered w-full" />
    </div>
    <div className="form-control w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label className="label">
    <span className="label-text">Harga Bangunan</span>
  </label>

  <input type="number" placeholder="Rp" value={harga_bangunan} onChange={ev => setHarga(ev.target.value)} className="input input-bordered w-full" />
  </div>

  <div className="form-control w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <div className='grid grid-cols-2 gap-4'>
    <div>
  <label className="label">
    <span className="label-text">Kota / Kabupaten</span>
  </label>
  <input type="text" placeholder="" value={kota} onChange={ev => setKota(ev.target.value)} className="input input-bordered w-full max-w-xs" />
  </div>

  <div>
  <label className="label">
    <span className="label-text">Daerah</span>
  </label>
  <input type="text" placeholder="" value={daerah} onChange={ev => setDaerah(ev.target.value)} className="input input-bordered w-full max-w-xs" />
  </div>

  </div>
  </div>

  <div className="form-control w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="label">
    <span className="label-text">Kontruksi</span>
  </label>
  <div class="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="Kelas 1" name="default-radio" class="radio checked:bg-blue-500" onChange={ev => setKontruksi(ev.target.value)} />
    <label for="default-radio-1" class="ml-2 text-sm"><p className='text-black font-medium text-left'>Kelas 1</p>
    <p className='text-left'>Dinding, Lantai, Dan Semua Komponen Penunjang Strukturalnya Serta Penutup Atap Terbuat Seluruhnya Dan Sepenuhnya Dari Bahan Bahan Yang Tidak Mudah Terbakar</p>
    </label>
  
    
</div>
<div class="flex items-center">
<input id="default-radio-1" onChange={ev => setKontruksi(ev.target.value)} value="Kelas II" type="radio" name="default-radio" class="radio checked:bg-blue-500"/>
    <label for="default-radio-1" class="ml-2 text-sm"><p className='text-black font-medium text-left'>Kelas II</p>
    <p className='text-left'>Penutup Atap Terbuat Dari Sirap Kayu Keras, Dinding-Dinding Mengandung Bahan-Bahan Yang Dapat Terbakar Sampai Maksimum 20% Dari Luas Dinding. Lantai Dan Struktur-Struktur Penunjangnya Terbuat Dari Kayu</p>
    </label>
</div>
<div class="flex items-center mt-2">
<input id="default-radio-1" onChange={ev => setKontruksi(ev.target.value)} value="Kelas III" type="radio" name="default-radio" class="radio checked:bg-blue-500"/>
    <label for="default-radio-1" class="ml-2 text-sm"><p className='text-black font-medium text-left'>Kelas III</p>
    <p className='text-left'>Selain Kontruksi Kelas I dan Kelas II</p>
    </label>
</div>
</div>

<div className="form-control w-full md:w-1/2 px-3 mb-6 md:mb-0">
<label className="label">
    <span className="label-text">Perluasan</span>
  </label>
<div class="flex items-center">
<label class="text-gray-700">
  <input type="checkbox" value={gempa} onChange={ev => setGempa(ev.target.value)}/>
  <span class="ml-1">Gempa Bumi</span>
</label>
</div>


</div>




  </div>
 
  <button className="btn btn-active btn-primary btn-block">Check Premi</button>
 
</form>
    </div>
  )
}
