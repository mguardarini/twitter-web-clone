import React from 'react';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

export default function CustomButton(props){
    
const BtnCustom = withStyles(theme => ({
    root: {
      // color: theme.palette.getContrastText('#1da1f2'),
      backgroundColor:'#1da1f2',
      '&:hover': {
        backgroundColor: '#1da1f2',
      }
    },
  }))(Button);

  return (<BtnCustom variant={props.variant} className={props.className} texts={props.text}>
                {props.text}
          </BtnCustom>
  )

}
