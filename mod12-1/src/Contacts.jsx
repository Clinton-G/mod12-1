import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

const dummyContacts = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' },
  { id: 3, name: 'Wumbo Wombo', email: 'wumbo@wombo.com', phone: '111-222-3456' },
];

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState(dummyContacts);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        selectedContact,
        setSelectedContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
