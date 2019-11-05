import React from 'react';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import useStyles from './style';

export default function InputComponent(props) {
    const classes = useStyles();
    const height=28;
    const width=196;
    return (
        <TextField
            id="outlined-dense"
            className={clsx(classes.textfield)}
            label={props.placeholder}
            variant="outlined"
            inputProps={{
                style: {
                  height,
                  width,
                  padding: '10px',
                  fontSize: "11px"

                },
                
            }}
            InputLabelProps={{
                style: {
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  width: '100%',
                  fontSize:'14px'
                } }}
        ></TextField>
    )
}
  