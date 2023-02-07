import React from 'react'
import ListRequest from '../components/Admin/ListRequest'
import MyProfile from '../components/Customer/MyProfile'
import RequestInvoice from '../components/Customer/RequestInvoice'
import Layout from './Layout'


function ProfileMe() {
  return (
    <div>
        
   <Layout> 
    
    <MyProfile/>
   </Layout>
   </div>
  )
}

export default ProfileMe