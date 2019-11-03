import React from 'react';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import useStyles from './style';

export default function InputComponent(props) {
    const classes = useStyles();
    return (
        <TextField
            id="outlined-dense"
            className={clsx(classes.textfield)}
            label={props.placeholder}
            variant="outlined"
        ></TextField>
    )
}
  