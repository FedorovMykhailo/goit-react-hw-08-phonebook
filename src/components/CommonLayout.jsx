import { Outlet } from "react-router-dom"
import { UserMenu } from "./UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { selectAuth } from "redux/selectors"
import { AuthMenu } from "./AuthMenu/AuthMenu"
import { Flex, Spacer } from "@chakra-ui/react"

export const CommonLayout = () =>
{
    const auth = useSelector(selectAuth)
    return <Flex width='320px'  gap='2' flexDirection='column' >
        {!auth ? <AuthMenu/>:<UserMenu/>}
        <Spacer/>
        <Outlet />
    </Flex>
}