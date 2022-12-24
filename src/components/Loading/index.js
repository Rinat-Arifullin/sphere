import {useEffect, useState} from "react";

import './loading.css';

export default function Loading (isLoading){

    if(!isLoading){
        return null
    }

    return <div className={'loading'}>
        <div className={'circle'}>
            <h1>Loading ...</h1>
        </div>
    </div>
}