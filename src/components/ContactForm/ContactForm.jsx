import { useDispatch, useSelector } from "react-redux";
import { addContact } from "api/services";
import { selectContacts } from "redux/selectors";
// import css from "../ContactForm/ContactForm.module.css"
import { Button, Flex, FormLabel, Input, FormControl} from "@chakra-ui/react";
import { useState } from "react";
//import PropTypes from "prop-types";

const FormComponent = () => {  
    
    const [name, setName] = useState();
    const [phone,setPhone] = useState()
    
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
   
    const handleFormSubmit = () => {
        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()))
            return alert(`${name.toLowerCase()} is already in contacts`)
        dispatch(addContact({ "name": name, "number": phone }))
    } 

    return (
        <FormControl border='1px solid blue' padding='20px' display='flex' gap ='5' flexDirection='column' alignItems='flex-start' >
            <Flex  gap ='2' width='100%' alignItems='center' >
                <FormLabel id="name" width='30%'>Name</FormLabel>
                <Input onChange={(evt) => setName(evt.target.value)}  
                flexGrow='0'    
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required />
            </Flex>
             <Flex  gap ='2' width='100%' alignItems='center' >
                <FormLabel id="number" width='30%'>Number</FormLabel>
                <Input onChange={(evt) => setPhone(evt.target.value)}             
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required />
            </Flex>
            <Button type="submit" onClick={handleFormSubmit}>Add contact</Button>
         </FormControl>
     )
  }

  export default FormComponent

// FormComponent.propTypes = {
//     submit: PropTypes.func,
// }