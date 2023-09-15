import { Routes, Route, Navigate } from "react-router-dom"
import { CommonLayout } from "./CommonLayout";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { PublicRoute } from "./PublicRoute/PublicRoute";
import { Welcome } from "pages/Welcome";


const App = () => {

 

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
            <Route index element={<Welcome/>} />
            <Route path="register" element={<PublicRoute to="register"/>} />
            <Route path="login" element={<PublicRoute to="login"/>} />
            <Route path="contacts" element={<PrivateRoute />} />
            <Route path="*" element={<Navigate to="login" replace />} />
          </Route>
        </Routes>
       
        </div>
    </div>
  )
  }

export default App