import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import initialContacts from "./data/initialContacts";

import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import ContactDetails from "./components/ContactDetails";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from './components/Layout';


function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : initialContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const editContact = (id, updatedContact) => {
    setContacts(contacts.map(c => c.id === id ? { ...c, ...updatedContact } : c));
  };

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/addContact" element={<AddContact addContact={addContact} />} />
            <Route path="/contactList" element={<ContactList contacts={contacts} deleteContact={deleteContact} />} />
            <Route path="/contacts/:id" element={<ContactDetails contacts={contacts} deleteContact={deleteContact} editContact={editContact} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
