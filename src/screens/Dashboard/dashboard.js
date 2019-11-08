import React from 'react'
import Grid from '@material-ui/core/Grid';
import TwitterBird from '../../components/TwitterAnimations/TwitterBird/twitterBird';
import TwitterLike from '../../components/TwitterAnimations/TwitterLike/twitterLike';

import Paper from '@material-ui/core/Paper';
import useStyles from './style';

export default function Dashboard(){
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs>
                <Paper className={classes.paper}>
                    <TwitterBird/>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper}>
                    <TwitterLike/>
                </Paper>
            </Grid>
        </Grid>

    )
}