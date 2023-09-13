import { useDispatch, useSelector } from "react-redux";
//import {  useSelector } from "react-redux";
// import { getContacts } from "api/services";
import { deleteContact } from "api/services";
import {  selectError, selectFilteredContacts,selectIsLoading } from "redux/selectors";
import { Button, List, ListItem } from "@chakra-ui/react";
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
        <List display='flex' gap ='2' flexDirection='column' >
            {filteredContacts.map(({ id, name, number }) =>
            <ListItem key={id} minWidth='320px' display='flex' justifyContent='space-between' gap ='2' alignItems='center'>
                {name}: {number}
                    <Button  type="button" onClick={() => { handleContactDelete(id) }}>Delete</Button>
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