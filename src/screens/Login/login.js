import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Footer from '../../components/Footer/footer'
import img_login from '../../Images/login.png'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      color: '#e6ecf0',

    },
    paper: {
      textAlign: 'center',
      color: '#aab8c2',
    },
    link:{
        fontSize: '12px',
        padding:'7px',
        paddingTop:'10px',
        paddingBottom:'11px',
        color:'#aab8c2',
        textAlign:'center',
        fontFamily:'Segoe UI'
    },
    footer:{
        marginLeft:'50px',
        marginRight:'50px'
    }
  }));
  
  export default function FullWidthGrid() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item sm={6}>
                <img width='100%' src={img_login}></img>
          </Grid>
          <Grid item sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>       
        </Grid>
        <Footer/>
      </div>
    );
  }