import React, { useState, useEffect} from 'react';
import AppBar from '../components/AppBar';
import UserTable from '../components/UsersTable';
import apiClient from '../clients/apiClient';

export default function Contacts() {
  const [users, setUsers] = useState([]);
  const api = new apiClient();

  useEffect(() => {
    // Update the document title using the browser API
    api.getAllClients().then(json => {
        setUsers(json);
    });
  });

  return (
    <React.Fragment>
        <AppBar />
        {/* user list going here */}
        <div>
            <UserTable users={users} />
        </div>
    </React.Fragment>
  );
}
