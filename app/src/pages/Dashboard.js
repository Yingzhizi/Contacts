import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import backgroundImage from '../logo/background.jpg';

const useStyles = makeStyles(theme => ({
	container: {
	     marginTop: theme.spacing(3),
	     marginBottom: theme.spacing(14),
	     display: 'flex',
	     flexDirection: 'column',
	     alignItems: 'center',
   },

	background: {
	  backgroundImage: `url(${backgroundImage})`,
	  // backgroundColor: '#7fc7d9', // Average color of the background image.
	  // backgroundPosition: 'center',
	  position: 'absolute',
	  left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      zIndex: -2,
	},

	backdrop: {
	    position: 'absolute',
	    left: 0,
	    right: 0,
	    top: 0,
	    bottom: 0,
	    backgroundColor: theme.palette.common.black,
	    opacity: 0.1,
	    zIndex: -1,
	},

	button: {
	  minWidth: 200,
	},

	h5: {
	  marginBottom: theme.spacing(4),
	  marginTop: theme.spacing(4),
	  [theme.breakpoints.up('sm')]: {
	    marginTop: theme.spacing(5),
	  },
	  color: 'white',
	  textShadow: '2px 2px #4c4c4e',
	},

	h2: {
		marginTop: theme.spacing(35),
		[theme.breakpoints.up('sm')]: {
  	    marginTop: theme.spacing(35),
		color: 'white',
		textShadow: '5px 5px #4c4c4e',
  	  },
  	},


}));
export default function Contacts() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <React.Fragment>
        <AppBar />
		<section className={classes.root}>
	      <Container className={classes.container}>
			  <div className={classes.background}>
				  <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
			  </div>
			  <Typography color="inherit" align="center" variant="h2" marked="center" className={classes.h2}>
				Find your contacts.
			  </Typography>
			  <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
				Simplify your life.
			  </Typography>
			  <Button
				color="secondary"
				variant="contained"
				size="large"
				className={classes.button}
				component="a"
				onClick={() => history.push("/contact")}
			  >
				Start
			  </Button>
			  <div className={classes.backdrop} />
	      </Container>
	    </section>
    </React.Fragment>
  );
}
