import axios from 'axios';
import CurrencyFormat from 'react-currency-format';
import React, { useEffect,useState } from 'react'
export default function ListRequest() {
  const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get('http://localhost:5000/list-request');
          setData(response);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      }

      const approve = async(id) =>
      {
        try {
         const response =  await axios.patch(`http://localhost:5000/request-approve/${id}`)
         console.log(response);
        } catch (error) {
          console.error(error.message);
        }
      }

      const reject = async(id) =>
      {
        try {
         const response =  await axios.patch(`http://localhost:5000/request-reject/${id}`)
         console.log(response);
        } catch (error) {
          console.error(error.message);
        }
      }


  
  return (
    <div> 
      
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        
        <th>Nomor Invoice</th>
        <th>Alamat</th>
        <th>Tipe Okupasi</th>
        <th>Total</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {data.map((item,index) => (
        <>
     <tr className='border-b-2'>
     <td>
       
    {item.nomor_invoice}
     </td>
     <td>
         {item.alamat}
     </td>
     <td>
         {item.okupasi.map(a => (
          a.tipe_okupasi
          )
        )}
     </td>
     <td>
     <CurrencyFormat thousandSeparator={','} decimalSeparator={'.'} decimalScale={2} prefix={'IDR'} value={item.total}/>
     </td>
     <td>
     <button className="btn btn-success m-3" onClick={() => approve(item._id)}>Aprrove</button>
     <button className="btn btn-error" onClick={() => reject(item._id)}>Reject</button>
     </td>
     </tr>
     </>
     ))}
    </tbody>
    
  </table>
</div>
    </div>
  )
}
