import { useDispatch, useSelector } from "react-redux";
//import {  useSelector } from "react-redux";
// import { getContacts } from "api/services";
import { deleteContact } from "api/services";
import {  selectError, selectFilteredContacts,selectIsLoading } from "redux/selectors";
import { Box, Button, Flex, List, ListItem, Text } from "@chakra-ui/react";
// import css from "../ContactList/ContactList.module.css"
// import PropTypes from "prop-types";

const ContactList = () => {

    const dispatch = useDispatch();

    const filteredContacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)

    const handleContactDelete = (id) => {
        console.log(id);
        dispatch(deleteContact(id))
    }

    return (<>
        {isLoading && <h2> Loading...</h2 >}
         {error && <h2> {error}</h2 >}
        <List display='flex' gap ='2' flexDirection='column' overflowY='scroll' height='250px' >
            {filteredContacts.map(({ id, name, number }) =>
            <ListItem fontSize='16px' key={id} minWidth='320px' display='flex' justifyContent='space-between' gap ='2' alignItems='center'>    
                    <Flex width='100%' justifyContent='space-between' alignItems='center'>
                        <Box width='40%'><Text>{name}</Text></Box>
                        <Box width='30%'><Text>{number}</Text></Box>
                        <Button width='30%' type="button" onClick={() => { handleContactDelete(id) }}>Delete</Button>
                    </Flex>
            </ListItem>)}
            
        </List></>
    )
}

export default ContactList

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.exact({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })),
//     handleDelete: PropTypes.func.isRequired,
// }