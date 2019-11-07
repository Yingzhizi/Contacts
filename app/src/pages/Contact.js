import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import ToolBar from '../components/ToolBar';
import UsersTable from '../components/UsersTable';
import apiClient from '../clients/apiClient';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    marginLeft: theme.spacing(2),
  },
  content: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    marginBottom: theme.spacing(5),
  }
}));

export default function Contacts() {
  const classes = useStyles();
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
        {/* seatch bar is here, but have no time to complete the filter function */}
        <div className={classes.root}>
            <ToolBar />
        </div>

        {/* user list going here */}
        <div className={classes.content}>
            <UsersTable users={users} />
        </div>
    </React.Fragment>
  );
}
