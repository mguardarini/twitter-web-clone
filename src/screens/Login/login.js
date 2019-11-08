import React from 'react';
import Grid from '@material-ui/core/Grid';
import Footer from '../Footer/footer'
import Input from '../../components/Input/input'
import Button from '@material-ui/core/Button';
import imgLogin from '../../assets/images/login.png'
import imgBoasVindas from '../../assets/images/twitter-frase.PNG'
import CustomButton from '../../components/Button/customButton';
import Hidden from '@material-ui/core/Hidden';
import CustomLink from '../../components/Link/link';
import useStyles from './style';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export default function LoginScreen () {

      let history = useHistory();
      const classes = useStyles(); 
      const [login, setLogin] = useState(''); // '' is the initial state value
      const [password, setPassword] = useState(''); // '' is the initial state value


      function handleClick(evt) {
        evt.preventDefault();
        console.log(login)
        history.push("/dashboard");
      }
      
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
                      <Input value={login} onInput={e=>setLogin(e.target.value)} placeholder="Celular, e-mail ou numero"/>
                      <Input value={password} onInput={e=>setPassword(e.target.value)} placeholder='Senha'/>                 
                      <Button submit onClick={handleClick} variant="outlined" text="Entrar" color="primary" className={classes.entrarButtoon}>
                          Entrar
                      </Button>
                  </Grid> 
                  <Grid className={classes.forgetPasswordGrid}>
                      <CustomLink className={classes.forgetPasswordText} to='/' text="Esqueceu sua senha?"></CustomLink>
                  </Grid> 
                  <Hidden only={['xs','sm','md']}>
                    <Grid className={classes.imageGrid}>
                        <img alt='login' width='80%' src={imgBoasVindas}></img>
                        <CustomButton variant="outlined" text='Inscreva-se' className={classes.inscrevaButton}/>
                        <Button variant="outlined" color="primary" className={classes.entrarButton2}>
                            Entrar
                        </Button>
                    </Grid>
                  </Hidden>
              </Grid>       
            </Grid>
            <Footer/>
          </div>
        );
}
