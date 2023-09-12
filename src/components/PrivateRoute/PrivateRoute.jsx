import { Contacts } from "pages/Contacts"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectAuth } from "redux/selectors"

export const PrivateRoute = () => {
    const auth = useSelector(selectAuth)
    return auth ? <Contacts/> : <Navigate to={"/login"}/> 
}