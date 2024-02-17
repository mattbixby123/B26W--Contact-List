import React, { useState, useEffect } from 'react';

function SelectedContact({ selectedContactId, setSelectedContactId }) {
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

  // Function to handle navigation back to the list view
  const handleBackToList = () => {
    setSelectedContactId(null); // Navigate back to the list view
  };

  return (
    <div>
      <h2>Selected Contact Details</h2>
      {/* Button to navigate back to the list view */}
      <button onClick={handleBackToList}>Back to List</button>
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
