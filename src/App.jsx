import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import Login from './components/Login'
import Okupasi from './pages/Okupasi'
import Request from './pages/Request'
import AddRequest from './components/Customer/AddRequest'
import Invoice from './pages/Invoice'
import RequestAdd from './pages/RequestAdd'
import {UserContextProvider} from "./UserContext";
import RequestInvoice from './components/Customer/RequestInvoice'
import OkupasiAdd from './pages/OkupasiAdd'
import OkupasiEdit from './pages/OkupasiEdit'
import RequestCust from './pages/RequestCust'
import ProfileMe from './pages/ProfileMe'
import ProfileEdit from './pages/ProfileEdit'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <UserContextProvider>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/okupasi" element={<Okupasi/>}/>
        <Route path="/list-request" element={<Request/>}/>
        <Route path="/request" element={<RequestAdd/>}/>
        <Route path="/request-invoice" element={<Invoice/>}/>
        <Route path="/add-okupasi" element={<OkupasiAdd/>}/>
        <Route path="/edit-okupasi/:id" element={<OkupasiEdit/>}/>
        <Route path="/myrequest" element={<RequestCust/>}/>
        <Route path="/user-profile" element={<ProfileMe/>}/>
        <Route path="/edit-profile/:id" element={<ProfileEdit/>}/>
      </Routes>
      </UserContextProvider>
    </div>
  )
}

export default App
