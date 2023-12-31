import { Flex, Spacer } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { selectAuth } from 'redux/selectors'


export const AuthMenu = () => {

    // const auth = useSelector(selectAuth)
const navigate = useNavigate()

    return <Flex  minWidth='max-content' alignItems='center'  gap='5' justifyContent='space-between'>
        <Button onClick={()=>navigate("/register", { replace: true })}>Register</Button>
        <Spacer/>
        <Button onClick={() => navigate("/login", { replace: true })}>Login</Button>
    </Flex>
}