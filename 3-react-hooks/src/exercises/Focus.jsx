import { useRef } from "react";

const Focus = () => {
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus(); // focus the input
    };

    return (
        <>
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleFocus}>Focus</button>
        </div>
        </>
    );
}

export default Focus;