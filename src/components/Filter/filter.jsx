import css from './filter.module.css';
import { useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";

//==============================================================================================================================
export const Filter = () => {

    const dispatch = useDispatch();
       
    const handleFilterChange = (filter) => dispatch(setFilter(filter));

    return  (
        <label className={css.label_name}>Find contacts by name
            <input className={css.input_name}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={(e) => handleFilterChange(e.target.value)}
            />
        </label>
    )
}
//==============================================================================================================================