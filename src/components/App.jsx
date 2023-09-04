import {  useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "api/services";
// import { nanoid } from "nanoid"
import ContactForm from "./ContactForm/ContactForm"
import Filter from "./Filter/Filter"
import ContactList from "./ContactList/ContactList"

const App = () => {
const dispatch = useDispatch()
  // const [contacts, setContacts] = useState(getDataFromLocal())
  // const [filter, setFilter] = useState("")
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
        margin: '0',
        textAlign: 'left'  
      }}>
        <div>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter  />
        <ContactList/>
        </div>
    </div>
  )
  }

export default App