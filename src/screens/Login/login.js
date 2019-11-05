import React from 'react';
import Grid from '@material-ui/core/Grid';
import Footer from '../Footer/footer'
import Input from '../../components/Input/input'
import Button from '@material-ui/core/Button';
import imgLogin from '../../images/login.png'
import imgBoasVindas from '../../images/twitter-frase.PNG'
import CustomButton from '../../components/Button/customButton';
import Hidden from '@material-ui/core/Hidden';
import Link from '../../components/Link/link';
import useStyles from './style';

export default function LoginScreen() {
    const classes = useStyles(); 
    return (
      <div className={classes.rootGrid}>
        <Grid container>
          <Hidden only={['xs','sm','md']}>
            <Grid item sm={6} xs={12}>
              <img alt='dashboard' width='99%' src={imgLogin}></img>
            </Grid>
          </Hidden>  
          <Grid item sm={5} xs={11}>
             <Grid className={classes.inputGrid}>
                  <Input placeholder="Celular, e-mail ou numero"/>
                  <Input placeholder='Senha'/>                 
                  <Button variant="outlined" text="Entrar" color="primary" className={classes.entrarButtoon}>
                    Entrar
                  </Button>
              </Grid> 
              <Grid className={classes.forgetPasswordGrid}>
                  <Link className={classes.forgetPasswordText} to='/' text="Esqueceu sua senha?"></Link>
              </Grid> 
                <Grid className={classes.imageGrid}>
                    <img alt='login' width='80%' src={imgBoasVindas}></img>
                    <CustomButton variant="outlined" text='Inscreva-se' className={classes.inscrevaButton}/>
                    <Button variant="outlined" color="primary" className={classes.entrarButton2}>
                        Entrar
                    </Button>
                </Grid>
          </Grid>       
        </Grid>
        <Footer/>
      </div>
    );
  }

  