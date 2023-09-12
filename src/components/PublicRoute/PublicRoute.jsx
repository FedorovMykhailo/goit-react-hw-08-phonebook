import { LogIn } from "pages/Login"
import { Register } from "pages/Register"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectAuth } from "redux/selectors"

export const PublicRoute = ({to}) => {
    const auth = useSelector(selectAuth)
    if (auth) { return <Navigate to={"/contacts"} /> }
    else if (to === "login") { return <LogIn/>}
    else {return <Register/>} 
}