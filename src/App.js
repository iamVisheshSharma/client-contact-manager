import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import api from './api/contacts';
import EditContact from "./components/EditContact";
import Card from "./components/Card";

function App() {

  // const LOCAL_STORAGE_KEY = 'contacts';
  const [contactList, setcontactList] = useState([])
  const [search, setSearch] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const addContactHandler = async (contact) => {
    const response = await api.post('/add', contact)
    console.log(response.data.response);
    setcontactList([...contactList, response.data.response]);
  }

  const retreiveContacts = async () => {
    const response = await api.get("/")
    return response.data;
  }

  const removeHandler = async (id) => {
    await api.delete(`/delete/${id}`);
    const newContact = contactList.filter((contact) => contact.uuid !== id);
    setcontactList(newContact);
  }

  const updateContactHandler = async (contact) => {
    const response = await api.patch(`/edit/${contact.uuid}`, contact);
    const {uuid} = response.data.result;
    setcontactList(contactList.map(contact => {
      return contact.uuid === uuid ? {...response.data.result} : contact;
    }))
  }

  const searchHandler = (searchTerm) => {
    setSearch(searchTerm);
    if(searchTerm !== ""){
      const newContactResult = contactList.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(search.toLowerCase())
      });
      setSearchResult(newContactResult);
    }
    else{
      setSearchResult(contactList);
    }
  }

  useEffect(() => {
    const getContact = async () => {
      const contacts = await retreiveContacts();
      if(contacts) setcontactList(contacts.allContacts)
    }
    getContact();

  }, []);


  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route 
            path='/' 
            exact 
            render={(props) => (
              <ContactList {...props} contacts={search.length < 1 ? contactList : searchResult} 
              getContactId={removeHandler} 
              search={search} 
              searchKeyword={searchHandler} />
            )}
          ></Route>
          <Route 
            path="/add" 
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          ></Route>
          <Route path='/card' component={Card} />
          <Route path='/contact/:id' component={ContactDetail} />
          <Route path='/edit' render={(props) => (<EditContact {...props} updateContactHandler={updateContactHandler} />)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
