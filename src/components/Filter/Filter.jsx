
import { Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setFilterValue } from "redux/filterSlice";
// import css from "../Filter/Filter.module.css"
// import PropTypes from "prop-types";

const Filter = () => {    

    const dispatch = useDispatch();
    
    const handleFilterChange = (evt) => {
        const name = evt.currentTarget.value.toLowerCase().trim();
        dispatch(setFilterValue(name))
    }
        return (
            <div>
                <Input     
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={handleFilterChange}
                required />  
            </div>
        )
    }

export default Filter

// Filter.propTypes = {
//     onChange: PropTypes.func,
// }