import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Footer from '../../components/Footer/footer'
import img_login from '../../Images/login.png'
import img_boasvindas from '../../Images/twitter-frase.PNG'

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item sm={6} xs={12}>
             <img width='100%' src={img_login}></img>
          </Grid>
          <Grid item sm={6} xs={12}>
             <Grid className={classes.grid_text}>
              <TextField
                    id="outlined-dense"
                    className={classes.textfield}
                    label="Nome, "
                    margin="dense"
                    variant="outlined"
                  />
                    <TextField
                    id="outlined-dense"
                    className={classes.textfield}
                    margin="dense"
                    variant="outlined"
                  />
                  <Button variant="outlined" text="Entrar" color="primary" className={classes.fab}>
                      Entrar
                  </Button>
              </Grid>
              <Grid className={classes.grid_image}>
                  <img width='80%' src={img_boasvindas}></img>
                  <Button variant="outlined" text="Entrar" color="primary" className={classes.fab2}>
                      Inscreva-se
                  </Button>
                  <Button variant="outlined" text="Entrar" color="primary" className={classes.fab2}>
                      Entrar
                  </Button>
              </Grid>
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
  grid_image: {
    alignContent: 'center',
    marginLeft:'24%',
    marginTop:'80px',
    marginBottom:'80px',
    marginRight:'24%',
    align: 'center',
  },
  grid_text: {
    alignContent: 'center',
    marginLeft:'15%',
    marginTop:'3%'
  },
  fab: {
    margin: theme.spacing(1),
    marginTop:'20px',
    width:'70px',
    height:'50px',
    fontFamily:'Segoe UI',
    borderRadius:'60px',
    textTransform: 'none',
  },
  fab2: {
    margin: theme.spacing(1),
    marginTop:'20px',
    width:'100%',
    height:'30px',
    fontFamily:'Segoe UI',
    borderRadius:'60px',
    textTransform: 'none',
    paddingBottom: '20px',
  },
  textfield: {
    margin: theme.spacing(1),
    marginTop:'20px',
    width:'200px',
    height:'100px',
    fontSize:'11px',
    fontStyle: 'normal',
    fontFamily:'Segoe UI',

  },
  container: {
    marginTop:'30px',
    marginLeft:'60px'
  }
}));
