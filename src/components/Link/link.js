import React from 'react';
import Link from '@material-ui/core/Link';
import useStyles from './style';

export default function CustomLink(props) {
    const classes = useStyles();
    return (
        <Link
            to={props.to}
            className={[classes.link,props.className]}
            component="button"
            variant="body2"
            onClick={props.onClick}
            >
            {props.text}
        </Link>
    )
}   
