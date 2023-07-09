import {ContactForm} from './ContactForm/contact_form';
import {ContactList} from './ContactList/contact_list';
import {Filter} from './Filter/filter';
import './App.css';


export const App = () => {
  
    return  <section className='section'>
              <div className='app_div'>
                  <h1>Phonebook</h1>
                  <ContactForm/>
                  <h2>Contacts</h2>
                  <Filter/>
                  <ContactList />
              </div> 
            </section>
};
