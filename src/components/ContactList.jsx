import React from "react";
import { useState, useEffect } from "react";



function ContactList({ contacts }) {


  return ( 
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {
           // Map over data here - We will 'escape' into Javascript and map over an array of contacts here.
         }
      </tbody>
    </table>
); 
}

export default ContactList;