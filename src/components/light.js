import React, { useState } from 'react';

const Ligth = () => {

    const [red, setRed] = useState('red');
    const [yellow, setYellow] = useState('offYellow');
    const [green, setGreen] = useState('offGreen');

    let turnLightsOn = (e) => {
        let color = e.target.id;
        if (color === 'red') {setRed('red'); setYellow('offYellow'); setGreen('offGreen') };
        if (color === 'yellow') {setRed('offRed'); setYellow('yellow'); setGreen('offGreen') };
        if (color === 'green') {setRed('offRed'); setYellow('offYellow'); setGreen('green');}
    }

    return (
        <>
        <div className="trafficlight">
            <div className="protector"></div>
            <div className="protector"></div>
            <div className="protector"></div>
            <div id='red' onClick={turnLightsOn} className={red}></div>
            <div id='yellow' onClick={turnLightsOn} className={yellow}></div>
            <div id='green' onClick={turnLightsOn} className={green}></div>
        </div>
        </>
    );
};

export default Ligth;