import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    link:{
        fontSize: '12px',
        paddingLeft:'2px',
        paddingRight:'13px',
        paddingTop:'10px',
        paddingBottom:'11px',
        color:'#aab8c2',
        textAlign:'center',
        fontFamily:'Segoe UI'
    },
  }));

export default function CustomLink(props) {
    const classes = useStyles();
    return (
        <Link
            className={classes.link}
            component="button"
            variant="body2"
            onClick={() => {
                alert("I'm footer.");
            }}
            >
              {props.name}
        </Link>
    )

}   
