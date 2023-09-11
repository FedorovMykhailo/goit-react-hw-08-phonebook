import { Button, Input } from "@chakra-ui/react"
import { FormLabel } from "@chakra-ui/react"
import { logIn, register } from "api/auth"
import { useState } from "react"
import { useDispatch } from "react-redux"

export const RegisterForm = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const dispatch = useDispatch()
    
    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case "name": setName(value)
                break;
            case "password": setPassword(value)
                break;
            default: setEmail(value);
        }
    }

    return <>
        <FormLabel>Name</FormLabel>
        <Input type="text" name="name" onChange={handleChange}></Input>
        <FormLabel>Password</FormLabel>
        <Input type="password" name ="password" onChange={handleChange}></Input>  
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" onChange={handleChange}></Input>
        <Button type="submit" onClick={() => dispatch(register({ name: name, email: email, password: password  }))}>Login</Button>
    </>
}