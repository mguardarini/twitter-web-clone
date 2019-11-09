import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import StaticGithubIcon from '../../assets/images/github.svg'

import useStyles from './style';

export default function Dashboard(){
    const classes = useStyles();

    return (
        <Grid container className={classes.Root}>
            <Grid item sm={4} xs={12}>
                <Paper className={classes.Paper}>
                    <h1>Hello Everyone.</h1>
                    This is sample to help you about this library material-ui.
                    So, if you like this example, please, star on my github.

                    If you want changed something, open a pull request for the repo and help another person.
                    <img alt='dashboard' width='50%' src={StaticGithubIcon}></img>
             
                    <br/>
                    See you and have nice life.
                    <br/>
                    <a href="https://github.com/mguardarini/twitter-web-clone">https://github.com/mguardarini/twitter-web-clone</a>
                </Paper>
            </Grid>
        </Grid>

    )
}