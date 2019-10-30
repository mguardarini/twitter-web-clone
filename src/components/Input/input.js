import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles} from '@material-ui/core/styles';

export default function InputComponent(props) {
    const classes = useStyles();
    return (
        <TextField
            id="outlined-dense"
            className={classes.textfield}
            label={props.label}
            margin="dense"
            variant="outlined"
        />
    )
}
  
const useStyles = makeStyles(theme => ({
    textfield: {
      margin: theme.spacing(1),
      marginTop:'20px',
      width:'200px',
      height:'100px',
      fontSize:'11px',
      fontStyle: 'normal',
      fontFamily:'Segoe UI'
    }
}));
  