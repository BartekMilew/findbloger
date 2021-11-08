import React from 'react';
import { makeStyles } from '@mui/styles';
import people from './../../../src/img/background.jpg';

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${people})`,
    backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    width: '100%',
    height: '40%',
  },
});

function Login() {
  const classes = useStyles();
  //   return <div className={classes.background}>sas</div>;
  return (
    <div>
      <img src={people} className={classes.background} />
    </div>
  );
}

export default Login;
