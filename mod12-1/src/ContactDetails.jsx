import React, { useContext } from 'react';
import { ContactContext } from './Contacts';

const ContactDetails = () => {
    const { selectedContact } = useContext(ContactContext);

    if (!selectedContact) {
        return <p>Please Selecta Contact</p>;
    }

    return (
        <div>
            <h2>Contact Details:</h2>
            <p><strong>Name:</strong> {selectedContact.name}</p>
            <p><strong>Email:</strong> {selectedContact.email}</p>
            <p><strong>Phone:</strong> {selectedContact.phone}</p>
        </div>
    );
};

export default ContactDetails;
