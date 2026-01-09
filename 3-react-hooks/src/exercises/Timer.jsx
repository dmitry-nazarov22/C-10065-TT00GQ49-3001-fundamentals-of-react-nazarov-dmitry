import { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setTime(t => t + 1), 1000);
        return () => clearInterval(timer);
    }, []);

    return <p>Time: {time}s</p>;
}

export default Timer;
