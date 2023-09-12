import { Button, FormControl, Input } from "@chakra-ui/react"
import { FormLabel } from "@chakra-ui/react"
import { logIn } from "api/auth"
import { useState } from "react"
import { useDispatch } from "react-redux"

export const LogInForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    
    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case "email": setEmail(value)       
                break;
            case "password": setPassword(value)       
                break;
        }
        // console.log(name);
        // setName(value)
        // const fName = 'set' + name.charAt(0).toUpperCase()
        //     + name.slice(1)
        // function func(callback, value) {
        //     console.log(callback);
        //     console.log(callback(value))
        // }
        // console.log(func(fName,value))
//   return f(value)
}


    return <FormControl  >
        <FormLabel>Email</FormLabel>
        <Input type="text" name="email" onChange={handleChange}></Input>
        <FormLabel>Password</FormLabel>
        <Input type="password" name ="password" onChange={handleChange}></Input>  
        <Button type="submit" onClick={()=>dispatch(logIn({email: email, password: password}))}>Login</Button>
    </FormControl>
}