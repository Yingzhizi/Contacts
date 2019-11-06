import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../logo/icon.png';

const useStyles = makeStyles(theme => ({

  title: {
    fontSize: 24,
  },

  toolbar: {
	  flexGrow: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      alignItems: 'center',
  },

  logoIcon: {
    maxHeight: '50px',
    marginRight: '10px',
  }

}));

export default function AppAppBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
		  <Link href="/">
		  	<img src={logo} alt="logo" className={classes.logoIcon} />
		  </Link>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/"
          >
            {'Contacts'}
          </Link>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}
