import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { FormatRupiah } from "@arismun/format-rupiah";
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';


export default function ListOkupasi() {
  const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
   

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>{
    setLoading(true);
    try {
      const {data: response} = await axios.get('http://localhost:5000/okupasi');
      setData(response);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  }

  const deleteOkupasi = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/okupasi/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
        <div className="overflow-x-auto w-full">
       <Link className='btn btn-primary mb-3' to={'/add-okupasi'}>Tambah +</Link>
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>No</th>
        <th>Tipe Okupasi</th>
        <th>Rate Premi</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
       {data.map((item,index) => (
  
        <>
    
      <tr key={item.key}>
       <th>
        {index + 1}
       </th>
        <th>

         {item.tipe_okupasi}
        </th>
        <th>

{item.rate_premi}
</th>
        <th>
        <Link
                    to={`/edit-okupasi/${item._id}`}
                    className="btn btn-warning btn-xs m-2"
                  >
                    Edit
                    </Link>
                    <button
                    onClick={() => deleteOkupasi(item._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
        
        </th>
      </tr>
      </>
       ))}
    </tbody>
    
  </table>
</div>
    </div>
  )
}
