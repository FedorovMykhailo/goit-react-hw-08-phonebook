import ContactForm from "../components/ContactForm/ContactForm"
import Filter from "../components//Filter/Filter"
import ContactList from "../components/ContactList/ContactList"
import {  useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "api/services";
import { Text } from "@chakra-ui/react";

export const Contacts = () =>
{
const dispatch = useDispatch()
     useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
    return <>
        <Text>Phonebook</Text>
        <ContactForm/>
        <Text>Contacts</Text>
        <Filter  />
        <ContactList />
     </>
}