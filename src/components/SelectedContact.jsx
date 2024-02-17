import React, { useState, useEffect } from 'react';

function SelectedContact({ selectedContactId }) {
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    // Fetch the details of the selected contact based on the selectedContactId
    const fetchSelectedContact = async () => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        setSelectedContact(result);
      } catch (error) {
        console.error('Error fetching selected contact:', error);
      }
    };

    if (selectedContactId) {
      fetchSelectedContact();
    }
  }, [selectedContactId]);

  return (
    <div>
      <h2>Selected Contact Details</h2>
      {selectedContact ? (
        <div>
          <p>Name: {selectedContact.name}</p>
          <p>Email: {selectedContact.email}</p>
          <p>Phone: {selectedContact.phone}</p>
          {/* Add additional fields can be added here/below , as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SelectedContact;