import { Outlet } from "react-router-dom"
import { UserMenu } from "./UserMenu/UserMenu"
import { useDispatch, useSelector } from "react-redux"
import { selectAuth } from "redux/selectors"
import { AuthMenu } from "./AuthMenu/AuthMenu"
import { Flex, Spacer } from "@chakra-ui/react"
import { useEffect } from "react"
import { refreshLogin } from "api/auth"

export const CommonLayout = () =>


{
const dispatch = useDispatch()
useEffect(()=>{dispatch(refreshLogin())},[dispatch])
    
    const auth = useSelector(selectAuth)
    return <Flex width='380px'  gap='2' flexDirection='column' >
        {!auth ? <AuthMenu/>:<UserMenu/>}
        <Spacer/>
        <Outlet />
    </Flex>
}