import React, { useRef, useState } from 'react';

function UncontrolledForm() {
    const inputRef = useRef(null);
    const [output, setOutput] = useState('');

    const handleClick = () => {
        const value = inputRef.current.value;
        if (value) {
        setOutput(`You typed: ${value}`);
        } else {
        setOutput('Nothing to display');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <h2>Uncontrolled Form</h2>
        <input ref={inputRef} type="text" placeholder="Type something..." />
        <button onClick={handleClick}>Show Value</button>
        <p>{output}</p>
        </div>
    );
}

export default UncontrolledForm;