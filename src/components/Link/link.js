import React from 'react';
import Link from '@material-ui/core/Link';

export default function CustomLink(props) {
    return (
        <Link
            to={props.to}
            className={props.className}
            component="button"
            variant="body2"
            onClick={props.onClick}
            >
            {props.text}
        </Link>
    )
}   
