import {useState} from "react";

import Spline from '@splinetool/react-spline';
import './sphere.css';

export default function Sphere(){
    const [loading, setLoading] = useState(true)

    return (
        <div className={loading? 'loading': 'wrapper'}>
            <Spline scene="https://prod.spline.design/VLZnQ19L7N4rfGeI/scene.splinecode"  onLoad={()=>setLoading(false)} />
        </div>
    );
}