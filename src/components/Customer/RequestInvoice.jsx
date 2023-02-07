import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { FormatRupiah } from "@arismun/format-rupiah";
import CurrencyFormat from 'react-currency-format';

export default function RequestInvoice() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            const {data: response} = await axios.get('http://localhost:5000/request-invoice');
            setData(response);
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
    
        fetchData();
      }, []);

  return (
    <div className="overflow-x-auto">
    <table className="table w-full">
   <tr className='border-b-2'>
        <td>Premi Terbaik</td>
        <td>Periode</td>
        <td>Perluasan</td>
        <td>Harga Bangunan</td>
        </tr>
       
     <tbody>
     {data.map(item => (
        <>
     <tr className='border-b-2'>
     <td>
         <p className='font-bold'>Asuransi Kebakaran</p> 
        <p> Rumah Tinggal Bukan Ruko </p>
        <p className='font-bold'>Nomor Invoice {item.nomor_invoice}</p>
     </td>
     <td>
         {item.jangka_waktu} Tahun
     </td>
     <td>
         -
     </td>
     <td>
     <CurrencyFormat thousandSeparator={','} decimalSeparator={'.'} decimalScale={2} prefix={'IDR'} value={item.harga_bangunan}/>
     </td>
     </tr>
     <tr>
         <td colSpan={2}></td>
         <td className='border-l-2 border-b-2'></td>
         <td className='border-b-2'>Premi Dasar  : <CurrencyFormat thousandSeparator={','} decimalSeparator={'.'} decimalScale={2} prefix={'IDR'} value={item.premi_dasar}/></td>
       
     </tr>
     <tr>
         <td colSpan={2}></td>
         <td className='border-l-2 border-b-2'></td>
         <td className='border-b-2'>Biaya Administrasi:IDR 10,000.00</td>
     </tr>
     <tr>
         <td colSpan={2}></td>
         <td className='border-l-2 border-b-2'></td>
         <td className='border-b-2'>Total: <CurrencyFormat thousandSeparator={','} decimalSeparator={'.'} decimalScale={2} prefix={'IDR'} value={item.total}/></td>
     </tr>
     </>
     ))}
        
     </tbody>
    </table>
  </div>
  )
}
