import React, {useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import png from '@/assets/png.png';
import jpg from '@/assets/ocr.jpg';
import Svg from '@/assets/svg.svg';


function TODO(a:number) {
    console.log('TODOFUNCTION')
}
export const App = () => {
    const [count, setCount] = useState<number>(0);
    TODO(5677);
    const increment = () => setCount(prev => prev + 1);

    // if (__PLATFORM__ === 'mobile') {
    //     return (
    //         <div>
    //             <h1>Its mobile baby</h1>
    //         </div>
    //     )
    // }
    // if (__PLATFORM__ === 'desktop') {
        return (
            <div>
                <h1>PLATFORM={__PLATFORM__}</h1>
                <div>
                    <img width={300} src={png} alt=""/>
                    <img width={300} src={jpg} alt=""/>
                    <Svg color={'red'} width={300} height={300}/>
                </div>
                <div>
                    <Link to={'/about'}>about</Link>
                </div>
                <div>
                    <Link to={'/shop'}>shop</Link>
                </div>
                <h1>{count}</h1>
                <button className={classes.button} onClick={increment}>
                <span>
                    inc
                </span>
                </button>
                <Outlet/>
            </div>
        );
    // }

};

export default App;