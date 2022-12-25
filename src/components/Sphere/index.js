import {useEffect, useState} from "react";

import Spline from '@splinetool/react-spline';
import './sphere.css';
import Loading from "../Loading";

export default function Sphere(){
    const [loading, setLoading] = useState(true)

    return (
        <div className={'wrapper'}>
            <Loading isLoading={loading}/>
            <div className={`sphereWrapper ${!loading && 'fade'}`}>
                <Spline scene="https://prod.spline.design/VLZnQ19L7N4rfGeI/scene.splinecode"
                    onLoad={()=>setLoading(false)}
            />
            </div>
        </div>
    );
}