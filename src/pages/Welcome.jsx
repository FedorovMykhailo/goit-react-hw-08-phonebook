import { Flex, Spacer, Text } from "@chakra-ui/react"

export const Welcome = () => {
    return <Flex minWidth='max-content' alignItems='center' gap='2' flexDirection='column' padding='2'>
       
        <Text>Welcome to PhoneBook!</Text>
        <Spacer/>
        <Text>Please Login or Register!</Text>
        </Flex>
}