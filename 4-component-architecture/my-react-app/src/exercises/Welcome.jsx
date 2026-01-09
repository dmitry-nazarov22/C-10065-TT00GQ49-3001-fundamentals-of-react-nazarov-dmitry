import { useState } from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <Welcome isLoggedIn={isLoggedIn} />
            <button onClick={() => {
                setIsLoggedIn(isLoggedIn ? false : true)
            }}>Toggle</button>
        </>
    )
}

function Welcome({ isLoggedIn }) {
    return (
        <div>
        {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>}
        </div>
    );
}

export default App