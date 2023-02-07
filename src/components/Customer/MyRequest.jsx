import axios from 'axios';
import CurrencyFormat from 'react-currency-format';
import React, { useEffect,useState } from 'react'

export default function MyRequest() {
  const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get('http://localhost:5000/myrequest',{
            withCredentials : true
          });
          setData(response);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      }

      


  
  return (
    <div> 
      
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        
        <th>Nomor Polis</th>
        <th>Jenis Penanggungan</th>
        <th>Nomor Invoice</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
    {data.map((item,index) => (
        <>
     <tr className='border-b-2'>
     <td>
       
    {item.nomor_polis}
     </td>


     {item.nomor_polis
        ? <td> Asuransi Kebakaran</td>
        : <td> </td>
      }

   
{item.nomor_polis
        ? <td> {item.nomor_invoice}</td>
        : <td> - </td>
      }
    {item.nomor_polis
        ? <td> {item.status}</td>
        : <td> </td>
      }
     <td>
    
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
