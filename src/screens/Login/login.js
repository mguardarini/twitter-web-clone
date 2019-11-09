import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Footer from '../Footer/footer'
import Input from '../../components/Input/input'
import DefaultButton from '../../components/Button/defaultButton';
import StaticLoggedOutHomePagePrimary from '../../assets/images/login.png'
import StaticLoggedOutHomePageSecondary from '../../assets/images/twitter-frase.PNG'
import CustomButton from '../../components/Button/customButton';
import CustomLink from '../../components/Link/link';
import useStyles from './style';
import { useHistory } from "react-router-dom";

export default function LoginScreen () {

        let history = useHistory();
        const classes = useStyles(); 
        const [login, setLogin] = useState(''); 
        const [password, setPassword] = useState('');

        function handleClick(evt) {
          evt.preventDefault();
          history.push("/dashboard");
        }
      
        return (
          <div className={classes.RootGrid}>
            <Grid container>
                  <Grid item xs={6}>
                    <img alt='dashboard' width='103%' src={StaticLoggedOutHomePagePrimary}></img>
                  </Grid>             
                  <Grid item xs={6}>
                     <Grid className={classes.FormGrid}>
                        <Input value={login} onInput={e=>setLogin(e.target.value)} placeholder="Celular, e-mail ou numero"/>
                        <Input value={password} onInput={e=>setPassword(e.target.value)} placeholder='Senha'/>                 
                        <DefaultButton  onClick={handleClick} variant="outlined" text="Entrar" color="primary" className={classes.SignupButton}/>                     
                        <CustomLink className={classes.ForgetPassword} text="Esqueceu sua senha?"></CustomLink>
                     </Grid> 
                     <Grid className={classes.SecondaryFormPageSignup}>
                        <img alt='login' width='80%' src={StaticLoggedOutHomePageSecondary}></img>
                        <CustomButton variant="outlined" text='Inscreva-se' className={classes.PrimaryStaticLoggedOutHomePageButtonSignup}/>
                        <DefaultButton text="Entrar" onClick={handleClick} variant="outlined" color="primary" className={classes.SecondaryStaticLoggedOutHomePageButtonSignup}/>              
                     </Grid>
                  </Grid>       
                <Footer/>
            </Grid>
          </div>
        );
}
