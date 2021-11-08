import React from 'react';
import { makeStyles } from '@mui/styles';
import people from './../../../src/img/background2.jpg';
import { Grid, Paper } from '@mui/material';

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${people})`,
    backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    width: '100%',
    height: '90vh',
  },
  rightSideBackground: {
    backgroundColor: 'black',
    height: '90vh',
    opacity: '0.5',
  },
  leftSideBackground: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Login() {
  const classes = useStyles();
  //   return <div className={classes.background}>sas</div>;
  return (
    <div className={classes.background}>
      <Grid container xs={12}>
        <Grid className={classes.leftSideBackground} item xs={6}>
          <Paper elevation={1}>sas</Paper>
        </Grid>
        <Grid item className={classes.rightSideBackground} xs={6}>
          sas
        </Grid>
      </Grid>
      {/* <img src={people} className={classes.background} alt="people"></img> */}
    </div>
  );
}

export default Login;
