import React from 'react'
import style from  './style.scss'
import Dashboard from '../Dashboard/dashboard';

export default function TwitterSplashscreen(){
    return (
            <div>
                <div class="cover">
                    <img src="http://www.macdrifter.com/theme/images/twitter-snow.svg" alt="Twitter Bird" id="icon"/>
                </div>
                <div class='content'>
                    <Dashboard/>
                </div>
            </div>
    )
}