import React, { useState } from 'react';

const Ligth = () => {

    const [red, setRed] = useState('red');
    const [yellow, setYellow] = useState('offYellow');
    const [green, setGreen] = useState('offGreen');

    let turnOnRed = () => {
        setRed('red');
        setYellow('offYellow');
        setGreen('offGreen');
    }
    let turnOnYellow = () => {
        setRed('offRed');
        setYellow('yellow');
        setGreen('offGreen');
    }
    let turnOnGreen = () => {
        setRed('offRed');
        setYellow('offYellow');
        setGreen('green');
    }

    return (
        <>
        <div className="trafficlight">
            <div className="protector"></div>
            <div className="protector"></div>
            <div className="protector"></div>
            <div id='setRed' onClick={turnOnRed} className={red}></div>
            <div id='setYellow' onClick={turnOnYellow} className={yellow}></div>
            <div id='setGreen' onClick={turnOnGreen} className={green}></div>
        </div>
        </>
    );
};

export default Ligth;