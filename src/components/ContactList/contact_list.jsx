import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import {Contact} from '../Contact/contact'
import {nanoid} from 'nanoid';
import css from './contact_list.module.css';

const getVisibleContacts = (contacts, filter) => {
     return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase().trim()));
};

export const ContactList = () => {

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const visibleContacts = getVisibleContacts(contacts, filter);
   
    return  <div className={css.contact_list_div}>
                <ul className={css.contact_list}> 
                    {visibleContacts.map(contact => <Contact name={contact.name} number={contact.number} key={nanoid()}/>)} 
                </ul>
            </div>
}