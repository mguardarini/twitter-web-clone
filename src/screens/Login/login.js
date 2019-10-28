import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Footer from '../../components/Footer/footer'
import img_login from '../../Images/login.png'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item sm={6} xs={12}>
             <img width='100%' src={img_login}></img>
          </Grid>
          <Grid item sm={6} xs={12}>
              <TextField
                      id="outlined-dense"
                      label="Dense"
                      className={classes.dense}
                      margin="dense"
                      variant="outlined"
                    />
                    <TextField
                    id="outlined-dense"
                    label="Dense"
                    className={classes.dense}
                    margin="dense"
                    variant="outlined"
                  />
                  <Button variant="outlined" color="primary" className={classes.fab}>
                    Entrar
                  </Button>


          </Grid>       
        </Grid>
        <Footer/>
      </div>
    );
  }

  
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: '#e6ecf0',
  },
  fab: {
    margin: theme.spacing(1),
    marginTop:'20px'
  },
  dense: {
    margin: theme.spacing(1),
    marginTop:'20px'

  },
}));
