import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const backgroundImage =
  'https://media-private.canva.com/MADer60-gdY/1/screen_2x.jpg?response-expires=Wed%2C%2006%20Nov%202019%2015%3A02%3A21%20GMT&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLWVhc3QtMSJGMEQCIAGyBa8IH3GfGV6Dn24gOylhiolSHvq0QP8dDlsVSculAiBFvmUDKBMXdqr58QI8J0d2hpCIGhCgsgucfVqIdVCr3yrQAgh1EAAaDDA1MTY4NzA4OTQyMyIMY6w9N06MCyKzS8N3Kq0C%2BHIFeWL4CVj%2FsRAKteKMbCg6zKMYq2AWSFelZt9mwHvPUaFWvA9JJ%2FEj1Q04GAr3v%2B4un9FS4IM1vu%2BKLTwZ29p6L6PW1Ci40eHd%2Fx4Xx9CGBpu3LbyWJ1Vb0jML0VunOxmYQTnVRV%2F3qbJfTw3r%2FchnbEbheWZuQeQaeFUXBt1JHs3JVIGCiBApr0Rv5Oa1X5dEfTSK4UVH2Z2ApvRxiqtlBkbNLtXhVih4PIL3iyDPDcXQen8vyhpjkL%2BVHqVuT03807PG1VI9oHLtVXCVfios0BRKh3rKos9BDjaAiGS1dPkiDA9qZ117RVnMJMI%2Bxv%2F4ls2TvFT8fKdOmmr1S9vf%2FAC4Y56AUXD0LpfBNj1ASayBLgHd0LClZepYyS%2Ftn08OScH3tIFdLC%2Bp3zDw8IruBTrQAuEJetazicZWsXg7eh%2F%2FIE3RmO0KgMNMuraFwfFKdsNfFuc%2BhSITsxeIYJVH2zsgsjLLfDONCnx5dbwHw5gjFe9r6W9YuQMIP6E6wNIlrhkF9OxpQdOJ1eY502k9VBMLQGHjX2naDlUBOaQ2avEsaDQXJWkEba9LxTwIQEi6U5u3p39YCT2eZGQ5wflS1ji%2FnalEmUvRB1NiXcMqOv%2BUFLf1R7hyEV%2FTR6GU%2FBSOxy8xbDKMIlEJQ%2Bs%2FnSlGe2c8%2BGUZiT2K7wuY5ohUR9cXI6W0%2B6A3BE%2BM0ZYLVAFvk69rbv6Yziz974R%2B5aFwEp7HAB3aI3o9A%2FIRysMfmGqQQFb2PUcPjhUubgBygm%2FcssmzRPtbLv6iRFzQeczENFExWq6j84Z2s%2BOR%2F7YyHgp1baA9jmOKqRGYJZ75oiSZ4rp2%2FvEAD2Z73DFGlvLr%2BaTLow%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20191106T125707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7513&X-Amz-Credential=ASIAQYCGKMUH23L4SHGC%2F20191106%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=74388e1d348eb2474136310d7bb674c1d8a3f4955f46ce86c47fabe76949fff0';

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
				href="/contact"
			  >
				Start
			  </Button>
			  <div className={classes.backdrop} />
	      </Container>
	    </section>
    </React.Fragment>
  );
}
