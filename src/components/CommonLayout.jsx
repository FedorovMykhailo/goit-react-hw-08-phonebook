import { Outlet } from "react-router-dom"
import { UserMenu } from "./UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { selectAuth } from "redux/selectors"
import { AuthMenu } from "./AuthMenu/AuthMenu"

export const CommonLayout = () =>
{
    const auth = useSelector(selectAuth)
    return <>
        {!auth ? <AuthMenu/>:<UserMenu/>}
        
        <Outlet />
    </>
}