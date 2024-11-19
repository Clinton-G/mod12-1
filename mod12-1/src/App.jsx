import React from 'react';
import { ContactProvider } from './Contacts';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

const App = () => {
  return (
    <ContactProvider>
      <div>
        <ContactList />
        <ContactDetails />
      </div>
    </ContactProvider>
  );
};

export default App;
