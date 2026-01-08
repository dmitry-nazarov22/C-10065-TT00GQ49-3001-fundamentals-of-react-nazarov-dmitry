import React, { useState } from "react";

function NameForm() {
    const [name, setName] = useState("");

    const handleClick = () => {
        alert(`${name}`)
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleClick}>Show name</button>
        </div>
    )
}

export default NameForm;

