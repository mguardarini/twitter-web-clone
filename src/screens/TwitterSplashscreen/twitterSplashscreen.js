import React from 'react'
import style from  './style.scss'
import Dashboard from '../Dashboard/dashboard';
import Box from '@material-ui/core/Box';

export default function TwitterSplashscreen(){
    return (
        <Box style={{

            marginTop:'6o%',
            height:'720px'

        }}bgcolor="#55ACEE" >
            <img class="logo scale" src="https://chriscarey.com/practice/twitter-intro/twitter-white.svg"/>
            <div class="logo content animateOnce"><Dashboard/></div>
        </Box>
    )
}