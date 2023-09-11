import {  useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "api/services";
// import { nanoid } from "nanoid"

import { Routes, Route } from "react-router-dom"
import { Contacts } from "pages/Contacts";
import { LogIn } from "pages/Login";
import { Register } from "pages/Register";
import { CommonLayout } from "./CommonLayout";

const App = () => {
const dispatch = useDispatch()
  // const [contacts, setContacts] = useState(getDataFromLocal())
  // const [filter, setFilter] = useState("")
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
        margin: '0',
        textAlign: 'left'  
      }}>
      <div>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route index element={<LogIn/>} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<LogIn/>} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes>
       
        </div>
    </div>
  )
  }

export default App