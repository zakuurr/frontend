import axios from 'axios';
import CurrencyFormat from 'react-currency-format';
import {UserContext} from "../../UserContext";
import React, { useEffect,useState,useContext } from 'react'
import { Link } from 'react-router-dom';

export default function MyProfile() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get('http://localhost:5000/profile-user',{
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
         
        <div className="card w-96 bg-slate-400 shadow-2xl">
        {data.map((item,index) => (
        <>
  <div className="card-body">
    <table>
        <tr>
        <td>Nama</td>
        <td>:</td>
        <td>{item.nama}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>:</td>
            <td>{item.email}</td>
        </tr>
    </table>
   
    <div className="card-actions justify-end mt-10">
    <Link
                    to={`/edit-profile/${item._id}`}
                    className="btn btn-primary"
                  >
                    Edit
                    </Link>
    </div>
  </div>
  </>
        ))};
</div>
</div>
    </div>
  )
}
