import React, { useState, useEffect } from "react";

const TitleUpdater = () => {
  // useState + useEffect to update document.title

    const [count, setCount] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000);

    // cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        document.title = `Counter: ${count}`;
    }, [count]);

    return <div>Counter value: {count}</div>;
};

export default TitleUpdater;