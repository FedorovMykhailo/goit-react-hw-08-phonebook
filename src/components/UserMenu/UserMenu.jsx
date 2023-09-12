import { Flex, Spacer } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react"
import { logOut } from 'api/auth'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuth, selectUser } from 'redux/selectors'


export const UserMenu = () => {
    const dispath = useDispatch()
    const auth = useSelector(selectAuth)
    const user = useSelector(selectUser)
    return <Flex  minWidth='max-content' alignItems='center' gap='2'>
        <p>Hello {user}</p>
        <Spacer/>
        <Button onClick={()=>dispath(logOut())}>LogOut</Button>
    </Flex>
}