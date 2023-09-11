import { Flex, Spacer } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react"
import { useSelector } from 'react-redux'
import { selectAuth } from 'redux/selectors'


export const UserMenu = () => {

    const auth = useSelector(selectAuth)
    return <Flex  minWidth='max-content' alignItems='center' gap='2'>
        <p>Email</p>
        <Spacer/>
        {auth ? <Button>Logout</Button>:""}
    </Flex>
}