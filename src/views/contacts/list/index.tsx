import React, { useContext, useState } from 'react';
import { ContactContext } from '../../../context/contact';
import { addContact, deleteContact } from '../../../context/contact/actions';
import { Contact } from '../../../context/contact/types';

const ContactsList = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useContext(ContactContext);

  const addNewContact = () => {
    if (!!name.length && state?.contacts) {
      setName("");
      dispatch(addContact(name, state.contacts.length + 1));
    }
  }

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addNewContact}>Add Contact</button>
      <ul>
        {state?.contacts.map((contact: Contact, index: number) => (
          <li key={index}>
            <span>{contact.name}</span>
            <button onClick={() => dispatch(deleteContact(contact.id))}>DELETE</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactsList;
