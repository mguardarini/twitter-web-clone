import React  from 'react';
import Button from '@material-ui/core/Button';

export default function DefaultButton(props)  {
        return (
            <Button 
                color={props.color}
                className={props.className} 
                variant={props.variant} 
                style={props.style} 
                onClick={props.onClick}
            >               
                {props.text}
            </Button>
        )
}


