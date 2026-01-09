function App() {
    const userName = "Dmitry";

    return <Parent name={userName} />;
}

function Parent(props) {
    return (
        <div>
        <h1>Parent</h1>
        <Child name={props.name} />
        </div>
    );
}

function Child(props) {
    return (
        <div>
        <h2>Child</h2>
        <p>User name: {props.name}</p>
        </div>
    );
}

export default App
