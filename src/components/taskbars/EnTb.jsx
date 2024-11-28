import React, { useEffect, useState } from 'react';
import owlly95_nobg from '../../assets/owlly95-nobg.svg';

export default function EnTb(){
    const [time, setTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();

            let am_pm = hours >= 12 ? 'PM' : 'AM';

            hours = hours % 12;

            hours = hours ? hours : 12;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            let currentTime = `${hours}:${minutes} ${am_pm}`;

            setTime(currentTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="taskbar">
            <div className="start">
                <img src={owlly95_nobg} alt="owlly95 logo"/>
                <b>Start</b>
            </div>
            <div className="time">{time}</div>
        </div>
    );
}