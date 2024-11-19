import React, { useContext } from 'react';
import { ContactContext } from './Contacts';

const ContactList = () => {
    const { contacts, setSelectedContact } = useContext(ContactContext);

return (
    <div>
        <h1>Contact List:</h1>
        <ul>
        {contacts.map((contact) => (
            <li
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
            >
            {contact.name}
            </li>
        ))}
        </ul>
    </div>
);
};

export default ContactList;
