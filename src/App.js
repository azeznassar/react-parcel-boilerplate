import React, { useState } from 'react';
import './App.css';

function App() {

    const [count, setCount] = useState(0);

    return (
        <div className="app">
            <header className="appHeader">
                <h1>React-Parcel boilerplate</h1>
            </header>
            <div className="content">
                <h3>Modify <code>src/App.js</code> and save</h3>
                <div>
                    <button onClick={() => setCount(count + 1)}>Click me</button>
                    <p>You clicked {count} times</p>
                </div>
            </div>
        </div>
    );
}

export default App;