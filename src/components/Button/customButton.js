import React from 'react';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

export default function CustomButton(props){
    
const BtnCustom = withStyles(theme => ({
    root: {
      backgroundColor:'#1da1f2',
      '&:hover': {
        backgroundColor: '#1E5DFF',
      }
    },
  }))(Button);

  return (<BtnCustom variant={props.variant} className={props.className} texts={props.text}>
                {props.text}
          </BtnCustom>
  )

}
