import React from 'react';
import Grid from '@material-ui/core/Grid';
import Footer from '../../components/Footer/footer'
import Input from '../../components/Input/input'
import Button from '@material-ui/core/Button';
import {withStyles, makeStyles} from '@material-ui/core/styles';

import imgLogin from '../../Images/login.png'
import imgBoasVindas from '../../Images/twitter-frase.PNG'

const CustomButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText('#1da1f2'),
    backgroundColor:'#1da1f2',
    '&:hover': {
      backgroundColor: '#1da1f2',
    },
  },
}))(Button);


export default function LoginScreen() {
    const classes = useStyles();
   
    return (
      <div className={classes.rootGrid}>
        <Grid container>
          <Grid item sm={6} xs={12}>
             <img width='100%' src={imgLogin}></img>
          </Grid>
          <Grid item sm={6} xs={12}>
             <Grid className={classes.inputGrid}>
                  <Input label='Nome'/>
                  <Input label='Senha'/>
                  <Button variant="outlined" text="Entrar" color="primary" className={classes.entrarButtoon}>
                    Entrar
                  </Button>
              </Grid>
              <Grid className={classes.imageGrid}>
                  <img width='65%' src={imgBoasVindas}></img>
                  <CustomButton variant="outlined" text="Entrar" color="primary" className={classes.inscrevaButton}>
                      Inscreva-se
                  </CustomButton>
                  <Button variant="outlined" text="Entrar" color="primary" className={classes.entrarButton2}>
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
  rootGrid: {
    flexGrow: 1,
    color: '#e6ecf0',
  },
  imageGrid: {
    alignContent: 'center',
    marginLeft:'26%',
    marginTop:'18px',
    marginBottom:'80px',
    marginRight:'24%',
    align: 'center',
    width:'70%',
    height:'70%'
  },
  inputGrid: {
    marginLeft:'15%',
    marginTop:'3%',
    marginBottom:'1%'
  },
  entrarButtoon: {
    marginTop:'20px',
    width:'58px',
    height:'50px',
    fontFamily:'Segoe UI',
    borderRadius:'60px',
    textTransform: 'none',
  },
  inscrevaButton: {
    marginTop:'20px',
    width:'65%',
    color:'white',
    height:'40px',
    fontFamily:'Segoe UI',
    borderRadius:'60px',
    textTransform: 'none',
  },
  entrarButton2: {
    marginTop:'15px',
    width:'65%',
    color:'#1da1f2',
    height:'40px',
    fontFamily:'Segoe UI',
    borderRadius:'60px',
    textTransform: 'none',
  },
  container: {
    marginTop:'30px',
    marginLeft:'60px'
  }
}));
