import { useState } from "react";

function IncrementParent() {
    return <Parent />
}

function Parent() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Display count={count} />
            <IncrementButton setCount={setCount} />
        </>
    );
    }

function Display({ count }) {
    return <p>Count: {count}</p>;
}

function IncrementButton({ setCount }) {
    return <button onClick={() => setCount(c => c + 1)}>Increment</button>;
}

export default IncrementParent