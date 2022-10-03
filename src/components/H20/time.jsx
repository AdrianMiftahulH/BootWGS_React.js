import React, { useState, useEffect } from 'react';

const TimeUseState = () => {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            <p>Clock</p>
            {date.toLocaleTimeString()}
        </div>
    )
}

export default TimeUseState